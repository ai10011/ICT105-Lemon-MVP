# Prototype Testing Notes

## Test Environment & Device Matrix
- **Prototype Live Link**: [ICT105 Lemon MVP Live Prototype](https://ai10011.github.io/ICT105-Lemon-MVP/prototype/project/)
- **Repository Path**: `meirosemary/ICT105-Lemon-MVP`
- **Testing Session**: Lab 11 Final QA & Verification Sprint
- **Test Date**: July 25, 2026
- **Device & Browser Coverage Matrix**:
  - Desktop: Google Chrome v126 (Windows 11, 1920x1080)
  - Desktop: Mozilla Firefox v127 (macOS Sonoma, 1440x900)
  - Mobile: Google Chrome for Android (Google Pixel 7, 412x915)
  - Mobile: Safari Mobile (iPhone 14 Pro, 393x852)
  - Narrow Screen/Small Mobile Viewport (Samsung Galaxy Fold Outer Screen, 320x672)

---

## System Requirements Traceability & Main Test Cases

| Test ID | Mapped Req | User Flow / Feature | Steps to Test | Expected Result | Actual Result | Status | Issue Found & Severity | Technical Fix / Action Taken |
|---|---|---|---|---|---|---|---|---|
| **T-01** | FR-01, FR-02 | Open Homepage & Hero Actions | Launch prototype URL and inspect hero section & call-to-action buttons | Renders project title, target user context, search bar, and primary CTA navigation | Renders hero text, search bar, and recent finds grid correctly on desktop | **Pass** | **High**: Hero search bar overflowed on screens < 768px; mobile nav menu links were hidden | Converted search bar container into a responsive vertical flex stack (`flex-col md:flex-row`); added mobile dropdown drawer in `Shared/components.js` |
| **T-02** | FR-03, FR-04 | Report Lost/Found Record | Fill item form with title, category, location, and description; click Submit | Form validates inputs, persists data to `localStorage` (`lemon_records`), and displays confirmation modal | Data persists correctly; modal triggers on successful submit | **Pass** | **Medium**: "I Lost Something" / "I Found Something" selection cards truncated text on 320px–375px screens | Updated selection card container layout to dynamic responsive flex direction (`flex-col sm:flex-row`) in `form.html` |
| **T-03** | FR-10, FR-15 | Form Validation & XSS Prevention | Submit form with empty required fields and enter script tags in description field | Form submission blocks, highlighting required fields with red outline; HTML input tags are escaped | Native submit blocked; script tags rendered as plain escaped text string | **Pass** | **Medium**: Browser-default HTML5 tooltips rendered inconsistently across Safari and Chrome | Intercepted submit with `e.preventDefault()` and built standardized client-side error ring styling in `js/form.js` |
| **T-04** | FR-05, FR-13 | View Records Grid | Navigate to `records.html` and inspect card grid rendering | Records display dynamically in a responsive grid with time-ago stamps, category badges, and location tags | Grid renders sample and user-submitted items correctly | **Pass** | **Low**: Fixed desktop container padding (`px-margin-desktop`) squished mobile card layouts | Replaced hardcoded desktop padding with responsive utility spacing (`px-margin-mobile md:px-margin-desktop`) in `records.html` |
| **T-05** | FR-06 | Multi-Criteria Search & Filter | Filter items by keyword search string, status (`Lost`/`Found`), location, and category | Result counter updates dynamically and card grid filters items matching all selected criteria | Real-time filtering updates result count and matches filter parameters accurately | **Pass** | **High**: Filter side panel occupied full viewport height on mobile screens, pushing item cards out of sight | Created a collapsible accordion container (`#mobile-filter-toggle`) controlled by `js/records.js` for mobile viewports |
| **T-06** | FR-06 | Reset Filter Query | Apply multiple filters on `records.html`, then click "Clear All Filters" button | All search inputs, category dropdowns, and radio buttons reset; full record list re-renders | Query resets and full record grid immediately restores | **Pass** | **Low**: Category select retained stale value after clearing text query | Bound global reset event handler in `js/records.js` to reset all form input values simultaneously |
| **T-07** | FR-07 | Item Detail View | Click "View Details" on any item card | Detail view (`detail.html?id=...`) renders item image, status badge, location map, reporter contact, and claim CTA | Detail page pulls correct ID parameter and populates all item metadata fields | **Pass** | **Low**: Heading typography and container padding were excessively large on mobile viewports | Applied fluid typography classes (`text-2xl sm:text-3xl lg:text-display-lg`) and responsive gap scaling in `detail.html` |
| **T-08** | FR-08, FR-09 | Admin Status Updates | Open `admin.html`, select an item record, and toggle status from `Pending` to `Claimed` | Item status updates in storage, status badge color changes, and metric counters recalculate | Status updates instantly in table row and local data store | **Pass** | **High**: Security portal admin sidebar was hidden on mobile devices with an unhandled trigger | Built a slide-out mobile admin drawer with backdrop overlay (`#admin-sidebar-overlay`) and toggle logic in `js/admin.js` |
| **T-09** | FR-12 | Dashboard Analytics Sync | Change status in `admin.html`, then switch to open `dashboard.html` tab | Dashboard metric cards (*Total*, *Pending*, *Claimed*, *Resolution Rate %*) update automatically | Metric cards calculate active claims and success rates dynamically | **Pass** | **Medium**: Metric recalculation required a manual browser hard refresh on the dashboard view | Implemented client-side `window.addEventListener('storage', ...)` event hooks in `js/dashboard.js` for real-time cross-tab sync |
| **T-10** | FR-11, FR-14 | User Feedback Toast Messages | Perform actions (submit form, claim item, reset filter) across various screens | Non-intrusive feedback toasts appear near top-right of screen and auto-dismiss after 3 seconds | Success and info toasts trigger smoothly with CSS animation | **Pass** | **Low**: Toast notification banners overflowed screen width on mobile viewports < 360px | Adjusted toast notification container max-width to `max-w-[90vw] sm:max-w-md` in `css/styles.css` |
| **T-11** | FR-15 | Privacy Disclaimer Verification | Inspect submission form and detail view for sensitive personal info handling | System displays privacy notice; phone numbers/emails are partially masked for non-admin viewers | Privacy disclosure visible below submit button; reporter contact details masked until claimed | **Pass** | **None** | No issues identified during privacy verification |
| **T-12** | FR-16 | End-to-End System Traceability | Navigate through entire flow: Homepage -> Search -> Detail -> Submit Report -> Admin Verification -> Dashboard | Complete user flow executes seamlessly without JS console errors or broken navigation links | End-to-end journey completes without errors | **Pass** | **None** | Verified all relative link paths across sub-pages in repository |

---

## Summary of Defects & Issue Classification

A total of **8 interface and usability defects** were identified during Lab 11 testing and subsequently resolved before final deployment:

| Defect ID | Severity | Category | Affected Module | Defect Description | Resolution Status |
|---|---|---|---|---|---|
| **DEF-01** | High | Responsive Layout | `Shared/components.js`, `index.html` | Navigation menu links collapsed without a mobile drawer trigger; hero search overflowed on viewports < 768px. | **Resolved** (`commit b14c9e1`) |
| **DEF-02** | High | Usability / UX | `records.html`, `js/records.js` | Filter side panel occupied 100% vertical viewport on mobile devices, hiding search results below the fold. | **Resolved** (`commit 3d71a09`) |
| **DEF-03** | High | Accessibility | `admin.html`, `js/admin.js` | Administrative management sidebar was inaccessible on mobile viewports due to missing drawer toggle handlers. | **Resolved** (`commit e92d04a`) |
| **DEF-04** | Medium | Layout / Touch | `form.html` | "I Lost Something" / "I Found Something" radio cards truncated text on 320px–375px screens. | **Resolved** (`commit c02f883`) |
| **DEF-05** | Medium | State Management | `js/dashboard.js` | Cross-tab status modifications in `admin.html` did not trigger automatic UI re-renders on `dashboard.html`. | **Resolved** (`commit e21c78a`) |
| **DEF-06** | Medium | Validation | `js/form.js` | Native HTML5 form validation tooltips rendered inconsistently across mobile browsers. | **Resolved** (`commit f83a210`) |
| **DEF-07** | Low | Visual Design | `records.html` | Hardcoded desktop margin classes caused squished grid card rendering on small screens. | **Resolved** (`commit 72b94e5`) |
| **DEF-08** | Low | Visual Design | `detail.html`, `dashboard.html` | Heading typography and layout padding were excessively large on phone screens. | **Resolved** (`commit c02f883`) |

---

## Technical Refactoring & Improvements Completed (Lab 11)

### 1. Mobile Navigation & Drawer Components (`Shared/components.js`)
- **Refactor**: Built an accessible, touch-friendly slide-down mobile menu drawer with dynamic active-page highlighting.
- **Evidence**: `commit b14c9e1` - *Add responsive mobile drawer navigation and touch event handlers in components.js*

### 2. Collapsible Filter Accordion (`records.html` & `js/records.js`)
- **Refactor**: Implemented a collapsible `#mobile-filter-toggle` accordion widget that defaults to collapsed on viewports < 768px, ensuring item result cards remain visible above the fold.
- **Evidence**: `commit 3d71a09` - *Implement collapsible mobile filter accordion and query reset logic in records module*

### 3. Administrative Portal Mobile Sidebar (`admin.html` & `js/admin.js`)
- **Refactor**: Built a slide-out administrative drawer equipped with a backdrop overlay (`#admin-sidebar-overlay`) and escape key accessibility listeners.
- **Evidence**: `commit e92d04a` - *Build mobile administrative sidebar drawer with backdrop overlay in admin.html*

### 4. Cross-Component Event Synchronization (`js/dashboard.js`)
- **Refactor**: Registered dynamic `window.addEventListener('storage', ...)` event listeners to detect `localStorage` updates in real time, instantly updating metric counters (*Total*, *Pending*, *Claimed*, *Resolution Rate %*) across open tabs.
- **Evidence**: `commit e21c78a` - *Add storage event listeners for real-time dashboard analytics recalculation*

### 5. Form Validation & UI Utility Enhancements (`form.html`, `js/form.js`, `css/styles.css`)
- **Refactor**: Standardized input error rings, prevented default native form popups, added custom toast notification styles, and enforced responsive typography scaling (`text-2xl sm:text-3xl lg:text-display-lg`).
- **Evidence**: `commit c02f883` & `commit 72b94e5` - *Apply fluid typography utilities, custom form error handlers, and touch target optimizations*

---

## Quality Sign-off Verification

- **Requirement Coverage**: 100% of functional requirements (`FR-01` through `FR-16`) verified and tested.
- **Pass Rate**: 12 / 12 Test Cases **Passed** (100% success rate post-refactoring).
- **Open Critical Defects**: 0 open critical or high defects remaining.
- **Deployment Status**: Ready for production deployment on GitHub Pages.
