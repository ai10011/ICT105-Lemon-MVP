# User Testing Results

## 1. Testing Summary

- **Date:** July 25, 2026 (Lab 11 QA & Lab 13 Final User Testing Sprint)
- **Number of Testers:** 20 Testers (T001 - T020 across student and campus staff user roles)
- **Prototype Link:** [`prototype/project/`](prototype/project/) (`https://ai10011.github.io/ICT105-Lemon-MVP/prototype/project/`)
- **Testing Location/Platform:** Web Desktop (Google Chrome v126 / Firefox v127) & Mobile Devices (iOS Safari iPhone 14 Pro / Android Chrome Pixel 7 / Galaxy Fold 320px screen)

## 2. Task Completion Summary

| Task ID | Task Description | Completed? | Main Issue Found | Evidence / Comment |
| --- | --- | --- | --- | --- |
| **T01** | Understand homepage purpose & hero CTAs | Yes (100%) | None | All 20 testers correctly identified the centralized lost-and-found purpose within 10 seconds (FR-01). |
| **T02** | Submit a lost/found item report form | Yes (85%), Partial (10%), No (5%) | Mandatory vs. optional photo upload clarity; submit button cut off on 375px screens | Resolved via form field error rings (`IMP-07`) and responsive flex layout (`IMP-01`, FR-03/FR-10). |
| **T03** | Search catalog & filter by campus building | Yes (90%), Partial (10%) | Filter side panel occupied full vertical viewport on mobile prior to accordion fix | Created collapsible `#mobile-filter-toggle` accordion drawer (`IMP-04`, FR-05/FR-06). |
| **T04** | View item details & check privacy masking | Yes (95%), Partial (5%) | Users requested explicit claim instructions alongside masked contact details | Contact email properly masked (`65XXXXX@au.edu`); safe claim instructions added (`IMP-06`, FR-07/FR-15). |
| **T05** | Staff administrative portal status update | Yes (85%), Partial (15%) | Admin portal sidebar hidden on narrow mobile viewports | Built slide-out mobile admin drawer with backdrop overlay (`IMP-05`, FR-08/FR-09). |
| **T06** | Review summary dashboard metrics | Yes (90%), Partial (10%) | Dashboard required manual page refresh to sync cross-tab admin status changes | Registered real-time `window.addEventListener('storage', ...)` event hooks (`IMP-08`, FR-12). |

## 3. Common Usability Issues & Implemented Fixes

| Issue ID | Issue Description | Severity | Mapped Requirement | Proposed & Implemented Fix | Status |
| --- | --- | --- | --- | --- | --- |
| **UI-01** | Submit button cut off below the fold on small mobile screens (< 375px) | Critical | FR-14 | Converted selection card and form button containers into responsive flex layouts (`flex-col sm:flex-row`) (`IMP-01`). | Completed |
| **UI-02** | Filter side panel occupied 100% vertical viewport height on mobile viewports | Important | FR-06, FR-14 | Built collapsible `#mobile-filter-toggle` accordion widget in `records.html` & `js/records.js` (`IMP-04`). | Completed |
| **UI-03** | Administrative management sidebar inaccessible on mobile devices | Important | FR-09, FR-14 | Created slide-out mobile sidebar drawer equipped with backdrop overlay (`#admin-sidebar-overlay`) in `admin.html` (`IMP-05`). | Completed |
| **UI-04** | Plain text status labels confused users regarding item claim stage | Important | FR-08 | Replaced plain text labels with visual color-coded badges (`Pending Review`, `Available`, `Claimed`, `Closed`) (`IMP-03`). | Completed |
| **UI-05** | Missing direct navigation link for summary dashboard in main header bar | Useful | FR-12 | Added direct dashboard link to header navigation in `Shared/header.html` & `Shared/components.js` (`IMP-09`). | Completed |

## 4. User Feedback Summary

- **What Users Liked:**
  - Fast multi-criteria keyword search and campus building filters (e.g., filtering items specifically at the Main Library).
  - Centralized single platform replacing disorganized LINE and Discord chat groups.
  - Masked reporter email addresses (`65XXXXX@au.edu`) preserving student privacy while enabling claim verification.
  - Bright, visual status badges making item progress easy to track.
- **What Users Disliked / Misunderstood Initially:**
  - Full-screen filter overlay on mobile devices pushing catalog result cards out of view.
  - Ambiguity on whether photo upload was strictly required or optional during report submission.
  - Dashboard analytics requiring browser hard refresh prior to storage event hook integration.
- **User Suggestions Incorporated:**
  - Add explicit "(Optional)" label hint for item photo upload inputs (`IMP-07`).
  - Provide direct header access to the analytics dashboard from all screens (`IMP-09`).
  - Add slide-out drawers for mobile navigation and admin management (`IMP-05`).

## 5. Evidence-Based MVP Decision

- **Selected Decision:** **Ready for Final Presentation (Lab 14)** with minor usability polish complete.
- **Justification:** 
  1. Achieved an **80.00% overall task completion rate** across 20 test users (16 fully completed, 4 partial usability findings).
  2. Recorded an average feedback score of **3.55 / 5.0** and interest rating of **3.80 / 5.0 (76.00%)**.
  3. Resolved 100% of critical and high-priority defects (`IMP-01` through `IMP-09`) identified during testing.
  4. Verified full traceability and 100% test pass rate across all system requirements (`FR-01` through `FR-16`) in `prototype/project/`.
