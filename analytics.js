/*
 * License Ready NY / NJ analytics
 * Explicit GA4 events only. No email addresses, question text, names,
 * phone numbers, form message text, or other user-entered PII is sent.
 *
 * 2026-09-22 updates:
 * - Separate daily-practice email signup from real-estate service leads.
 * - Add practice-tests funnel measurement requested after GA4 review.
 * - Preserve first-party campaign attribution across an on-site session.
 * - Keep Payhip click/begin_checkout separate from purchase.
 */
(() => {
    'use strict';

    const GA4_ID = 'G-8SNVD5ZVG4';
    const examState = /^\/nj(?:\/|$)/.test(location.pathname) ? 'NJ' : 'NY';

    const send = (name, fields = {}) => {
        if (typeof window.gtag === 'function') {
            window.gtag('event', name, {
                send_to: GA4_ID,
                exam_state: examState,
                ...fields
            });
        }
    };

    /* -----------------------------------------------------
       Session attribution for lead forms
       ----------------------------------------------------- */
    const attributionKeys = [
        'utm_source',
        'utm_medium',
        'utm_campaign',
        'utm_content',
        'utm_term',
        'gclid',
        'gbraid',
        'wbraid'
    ];

    const readStoredAttribution = () => {
        try {
            return JSON.parse(sessionStorage.getItem('lr_attribution') || '{}');
        } catch {
            return {};
        }
    };

    const writeStoredAttribution = value => {
        try {
            sessionStorage.setItem('lr_attribution', JSON.stringify(value));
        } catch {
            /* Storage can be unavailable in privacy-restricted contexts. */
        }
    };

    const captureAttribution = () => {
        const params = new URLSearchParams(location.search);
        const stored = readStoredAttribution();
        let changed = false;

        for (const key of attributionKeys) {
            const value = params.get(key);
            if (value) {
                stored[key] = value;
                changed = true;
            }
        }

        if (!stored.landing_path) {
            stored.landing_path = location.pathname || '/';
            changed = true;
        }

        if (changed) writeStoredAttribution(stored);
        return stored;
    };

    const attribution = captureAttribution();
    window.lrGetAttribution = () => ({ ...attribution });

    const populateLeadAttributionFields = () => {
        const form = document.getElementById('real-estate-lead-form');
        if (!form) return;

        const values = readStoredAttribution();
        for (const key of attributionKeys) {
            const field = form.querySelector(`[name="${key}"]`);
            if (field) field.value = values[key] || '';
        }

        const landingField = form.querySelector('[name="landing_path"]');
        if (landingField) landingField.value = values.landing_path || '';
    };

    /* -----------------------------------------------------
       Page / funnel entry events
       ----------------------------------------------------- */
    const path = location.pathname.replace(/\/+$/, '') || '/';

    if (path === '/practice-tests.html') {
        send('practice_tests_view', {
            page_group: 'practice_hub'
        });
    }

    if (path === '/work-with-me.html') {
        send('work_with_me_view', {
            page_group: 'real_estate_services'
        });
    }

    /* -----------------------------------------------------
       Quiz funnel
       ----------------------------------------------------- */
    let readySent = false;
    let quizStarted = false;

    window.lrQuizReady = details => {
        if (readySent) return;
        readySent = true;

        send('quiz_ready', details);

        const target = document.getElementById('question');
        if (target && 'IntersectionObserver' in window) {
            const observer = new IntersectionObserver(entries => {
                if (
                    entries.some(entry => entry.isIntersecting) &&
                    document.visibilityState === 'visible'
                ) {
                    send('quiz_view', {
                        practice_topic: details.practice_topic
                    });
                    observer.disconnect();
                }
            }, { threshold: 0.5 });

            observer.observe(target);
        }
    };

    window.lrTopicSelect = topic => send('practice_topic_click', {
        practice_topic: topic,
        selection_method: 'quiz_picker'
    });

    window.lrQuizAnswer = details => {
        const fields = {
            exam_state: details.exam_state,
            practice_topic: details.practice_topic
        };

        if (!quizStarted) {
            quizStarted = true;
            send('quiz_start', fields);
        }

        send('quiz_answer', {
            ...fields,
            question_topic: details.question_topic,
            answer_correct: details.correct ? 1 : 0,
            question_number: details.answered
        });

        if (details.answered === 10) {
            send('quiz_practice_10', fields);
        }
    };

    /* -----------------------------------------------------
       Daily practice email funnel
       ----------------------------------------------------- */
    let dailyPracticeSignupSent = false;

    window.lrTrackDailyPracticeSignup = () => {
        if (dailyPracticeSignupSent) return;
        dailyPracticeSignupSent = true;

        send('daily_practice_signup', {
            lead_source: 'daily_practice_form',
            lead_category: 'study_email',
            form_name: 'mailer_lite_daily_practice'
        });
    };

    /* Backward-compatible alias while cached HTML rolls over. */
    window.lrTrackLead = window.lrTrackDailyPracticeSignup;

    /* -----------------------------------------------------
       Real-estate services lead funnel
       ----------------------------------------------------- */
    let realEstateLeadSent = false;

    const readRealEstateLeadMeta = () => {
        try {
            return JSON.parse(sessionStorage.getItem('lr_real_estate_lead_meta') || '{}');
        } catch {
            return {};
        }
    };

    window.lrTrackRealEstateLead = () => {
        if (realEstateLeadSent) return;
        realEstateLeadSent = true;

        const meta = readRealEstateLeadMeta();

        send('real_estate_lead', {
            lead_source: 'real_estate_consultation_form',
            lead_category: 'agent_services',
            form_name: 'work_with_me',
            lead_type: meta.lead_type || 'unknown',
            lead_timeline: meta.lead_timeline || 'unknown'
        });

        try {
            sessionStorage.removeItem('lr_real_estate_lead_meta');
        } catch {
            /* Ignore storage restrictions. */
        }
    };

    const bindForms = () => {
        populateLeadAttributionFields();

        const dailyForm = document.querySelector(
            '.ml-subscribe-form-45679580 form'
        );

        if (dailyForm) {
            let dailyStartSent = false;

            dailyForm.addEventListener('focusin', () => {
                if (dailyStartSent) return;
                dailyStartSent = true;
                send('daily_practice_form_start', {
                    form_name: 'mailer_lite_daily_practice'
                });
            });

            dailyForm.addEventListener('submit', () => {
                send('daily_practice_form_submit', {
                    form_name: 'mailer_lite_daily_practice',
                    transport_type: 'beacon'
                });
            });
        }

        const realEstateForm = document.getElementById('real-estate-lead-form');
        if (realEstateForm) {
            let realEstateStartSent = false;

            realEstateForm.addEventListener('focusin', () => {
                if (realEstateStartSent) return;
                realEstateStartSent = true;
                send('real_estate_lead_form_start', {
                    form_name: 'work_with_me'
                });
            });

            realEstateForm.addEventListener('submit', () => {
                const leadType = realEstateForm.querySelector('[name="lead_type"]')?.value || 'unknown';
                const leadTimeline = realEstateForm.querySelector('[name="timeline"]')?.value || 'unknown';

                try {
                    sessionStorage.setItem('lr_real_estate_lead_meta', JSON.stringify({
                        lead_type: leadType,
                        lead_timeline: leadTimeline
                    }));
                } catch {
                    /* Ignore storage restrictions. */
                }

                send('real_estate_lead_form_submit', {
                    form_name: 'work_with_me',
                    lead_type: leadType,
                    lead_timeline: leadTimeline,
                    transport_type: 'beacon'
                });
            });
        }
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', bindForms, { once: true });
    } else {
        bindForms();
    }

    /* -----------------------------------------------------
       Click diagnostics
       ----------------------------------------------------- */
    document.addEventListener('click', event => {
        const link = event.target.closest('a[href]');
        if (!link) return;

        const url = new URL(link.href, location.href);

        if (link.classList.contains('course-provider-link')) {
            send('course_school_click', {
                provider: link.dataset.provider || 'unknown'
            });
            return;
        }

        if (url.hostname === 'payhip.com' && url.pathname === '/b/AzSap') {
            send('practice_pack_click', {
                item_id: 'AzSap'
            });

            /* A click to Payhip starts checkout; it is not a purchase. */
            send('begin_checkout', {
                currency: 'USD',
                value: 14.99,
                items: [{
                    item_id: 'AzSap',
                    item_name: '250 NY Real Estate Practice Questions',
                    price: 14.99,
                    quantity: 1
                }]
            });
            return;
        }

        if (url.origin !== location.origin) return;

        const category = url.searchParams.get('category');
        const knownTopics = [
            'Agency',
            'Contracts',
            'Valuation',
            'Real Estate Practice',
            'Fair Housing',
            'Finance',
            'Commercial Real Estate',
            'Materials & Construction',
            'Property Ownership',
            'Property Characteristics',
            'Legal Descriptions',
            'Property Math',
            'Space Measurement',
            'Fixtures and Personal Property',
            'Offers and Negotiation',
            'Contracts and Contingencies',
            'NJ Attorney Review'
        ];

        if (category && knownTopics.includes(category)) {
            send('practice_topic_click', {
                practice_topic: category,
                destination_state: url.pathname.startsWith('/nj/') ? 'NJ' : 'NY'
            });
        }

        if (url.pathname === '/practice-tests.html') {
            send('practice_tests_click', {
                destination_state: 'NY'
            });
        }

        if (url.pathname === '/ny-exam-tips.html') {
            send('exam_tips_click', {
                destination_state: 'NY'
            });
        }

        if (url.pathname === '/work-with-me.html') {
            send('work_with_me_click', {
                destination: 'real_estate_services'
            });
        }

        if (url.hash === '#daily-practice') {
            send('daily_practice_cta_click', {
                destination: 'daily_practice_form'
            });
        }
    });
})();
