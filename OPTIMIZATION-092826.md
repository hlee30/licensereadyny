# Website optimization — September 28, 2026

## Evidence and scope
Reports supplied for August 31–September 27, 2026 were extracted and duplicate exports treated as duplicates, not added together. Main landing report: 1,979 sessions; Practice Tests 1,601 sessions, 3 seconds average engagement per session; homepage 301 sessions, 2m22s. Pages report uses a different metric (engagement per active user); do not mix its 1s / 2m40s with the landing report. TikTok paid social: 1,560 sessions, rounded 0s engagement, no recorded key events; Google CPC: 146 sessions, 4m33s. These are associations, not evidence that page design alone caused the difference.

Country PDF and CSV are a region-filtered subset (71 active users); the exact region label is truncated in the PDF. Do not interpret them as all-site geography. Organic queries contain 260 impressions and zero clicks, with only 10 of 17 landing rows in the organic-page export. No ranking promises or geography exclusions were made.

The 266 key events include 229 quiz_answer, 16 quiz_start, 13 legacy generate_lead, 4 quiz_practice_10, 3 daily_practice_signup and 1 real_estate_lead. They are not 266 leads or sales. Reports span tracking changes and include testing referrals. Review key-event settings in GA4 separately; no account settings were changed.

## Installed changes
- Practice Tests now loads the same preserved NY bank directly, without a separate navigation step. Filtering, explanations, score, ten-answer progress and optional signup link work on that page.
- Shorter introduction and immediate start/browse actions; topic picker and progress below answers on this page to expose the question sooner on phones.
- Existing manual AdSense slot moved below the topic cards; publisher and loader retained. No additional per-seven-answer ad placement added on the hub. Existing homepage ad behavior unchanged. Auto ads can still choose other positions; those settings are not controlled here.
- Removed repetitive search-keyword paragraph; retained useful topic descriptions and study guidance.
- Replaced links to nine absent local NY topic documents with functioning filtered practice URLs across affected root pages. Removed those absent documents from the staged sitemap; no files deleted.
- Added practice_surface to events and practice_entry_click for the hub start action. Existing lead success callbacks and product tracking retained. Diagnostic events were not marked as key events.
- Cache versions updated on root HTML pages. NJ files, question bank, logo sizing/assets, #fefefe, MailerLite, Payhip, social URLs and ads.txt preserved.

## Verification
Browser tests: 10 topic modes, scoring, explanations, ten-answer milestone, event counts, picker navigation, invalid filter fallback, homepage and NJ regression. Mobile 390px and desktop 1440px: no horizontal overflow; rendered screenshots reviewed. All root HTML internal links resolve locally and IDs are unique. Question bank and NJ files compared against original. External service calls were stubbed to avoid test ad impressions or analytics traffic; live ads, delivery of signups and checkout were not tested.

## Deployment and measurement
These files are installed locally in C:\my-website; not yet published. A full before-change ZIP is in optimization-092826/website-before-092826.zip. After publishing, verify quiz_ready, quiz_view, quiz_start and quiz_practice_10 on the hub, plus confirmed signup. Compare seven complete days with a non-overlapping prior week, segmented by source, device and landing page. Investigate TikTok targeting, ad promise and in-app browser separately before increasing spend. Use confirmed daily_practice_signup for study leads; quiz answers are engagement diagnostics, not customers.
