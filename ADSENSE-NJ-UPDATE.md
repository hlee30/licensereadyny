# License Ready NY/NJ update — September 22, 2026

## Included changes
- Added AdSense display unit 8831968206 (`ca-pub-3584267014164543`) to the NY and NJ practice-test hubs.
- Added a quiz ad placement that creates a new responsive ad request after every 7 answered questions, only when the visitor explicitly clicks **Next Question** after question 7, 14, 21, etc. There is no timer-based refresh.
- Added GA4 diagnostic event `quiz_ad_break` with state, practice topic, and answer count.
- Added 10 NJ RealEstateU-based questions under `Buyer Representation Agreements`.
- NJ mixed-bank count is now 54 questions.
- Added the new NJ topic to the practice hub and analytics topic list.
- Preserved the existing AdSense loader in each HTML `<head>`; it is not duplicated for each quiz ad request.

## Files changed
- `/index.html`
- `/practice-tests.html`
- `/script.js`
- `/style.css`
- `/analytics.js`
- `/nj/index.html`
- `/nj/practice-tests.html`
- `/nj/quiz.html`
- `/nj/questions.js`
- `/nj/quiz.js`

## AdSense
Publisher: `ca-pub-3584267014164543`
Display slot: `8831968206`
Interval: 7 answered questions
