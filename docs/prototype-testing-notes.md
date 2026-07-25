# Prototype Testing Notes

## Test Environment
- **Prototype Link**: [ICT105 Lemon MVP Live Prototype](https://ai10011.github.io/ICT105-Lemon-MVP/prototype/project/)
- **Browser/Device Used**: Google Chrome v126 (Desktop), Google Chrome for Android (Mobile Viewport Verification), Safari Mobile (iOS 17)
- **Tester Role**: Student Team Members, Peer Reviewers (Lab 11 Testing Session)
- **Test Date**: July 25, 2026

---

## Main Test Cases

| Test ID | User Flow / Feature | Steps to Test | Expected Result | Actual Result | Status | Issue Found | Fix / Next Action |
|---|---|---|---|---|---|---|---|
| **T-01** | Open Homepage | Launch prototype homepage URL | Homepage renders title, target user context, problem statement, search bar, and CTA buttons | Hero title, problem overview, search box, CTA buttons, and recent finds grid loaded successfully | **Pass** | Navigation menu was hidden on mobile screens; hero search bar broke alignment on viewports < 768px | Added responsive hamburger dropdown drawer in `components.js`; converted hero search container to vertical stacked flex layout on mobile in `index.html` |
| **T-02** | Submit Record | Complete form with item details and submit | Inputs validate correctly, record persists to storage/API, and confirmation modal displays | Form validates inputs, saves record data to `localStorage` / API, and displays confirmation modal | **Pass** | "I Lost Something" / "I Found Something" radio selection cards truncated text on small phone viewports (320px–375px) | Refactored radio container to responsive flex direction (`flex-col sm:flex-row`) and dynamic padding in `form.html` |
| **T-03** | Form Validation & Error Handling | Leave mandatory form fields empty and hit submit | Custom error styling triggers, preventing form dispatch until required fields are completed | Error rings highlight empty inputs and custom alert messages inform the user | **Pass** | Browser default HTML5 validation tooltip was inconsistent across desktop and mobile browsers | Prevented native submit event (`e.preventDefault()`) and built unified custom JS input validation styling in `form.js` |
| **T-04** | View Record List | Navigate to list view page | Submitted and sample records display dynamically in a responsive card grid | Records rendered dynamically in responsive grid cards with category badges and time indicators | **Pass** | Fixed desktop padding class (`px-margin-desktop`) on small screens caused squished card grid layout | Updated main layout container padding to `px-margin-mobile md:px-margin-desktop` in `records.html` |
| **T-05** | Search & Filter | Filter items by keyword, status, location, or category | Item grid dynamically updates to show matching records and updated result counts | Dynamic filtering by status (Lost/Found), category, campus location, and keyword text updated result count and card grid | **Pass** | Filter side panel occupied full vertical screen height on mobile viewports before showing item results | Added collapsible "Search Filters & Options" accordion toggle button (`#mobile-filter-toggle`) in `records.html` and `records.js` |
| **T-06** | Detail View | Select an individual record card | System displays full record details, location map, reporter contact info, and claim actions | Item page loaded details via URL parameter (`?id=...`), displaying item image, status badge, map location, reporter info, and action buttons | **Pass** | Heading font sizes and container layout gaps were excessively large on small mobile screens | Applied responsive typography classes (`text-2xl sm:text-3xl lg:text-display-lg`) and gap scaling in `detail.html` |
| **T-07** | Status Update | Change item status in Security/Admin view | Status updates in real-time, updating item record state and dashboard analytics | Admin management table (`admin.html`) displayed real-time item status with action controls and metrics update | **Pass** | Admin sidebar menu was inaccessible on mobile viewports with an unhandled hamburger trigger | Built a slide-out mobile admin navigation drawer with backdrop overlay (`#admin-sidebar-overlay`) and toggle handlers in `admin.js` |
| **T-08** | Data Persistence & State Sync | Submit a record on `form.html`, navigate to `records.html` and `dashboard.html` | Submitted record immediately reflects across item listings and dashboard counters without manual refresh | LocalStorage state changes triggered automatic UI re-renders across views | **Pass** | Admin status changes required a hard browser refresh to re-calculate metric summaries on `dashboard.html` | Implemented custom `storage` event listeners and state re-render functions in `js/dashboard.js` |
| **T-09** | Dashboard Metrics | Open personal dashboard view | Dashboard displays active claims, user activity metrics, and match notifications | User dashboard (`dashboard.html`) displayed user stats, active claim counts, success rate, and match notification banner | **Pass** | Top margin utility (`mt-xxl`) created excessive empty whitespace above header content on mobile viewports | Adjusted responsive margin spacing (`mt-md md:mt-xxl`) and notification banner flex layouts in `dashboard.html` |

---

## Summary of Issues
1. **Mobile Navigation Access**: Primary navigation links (`Browse`, `Report`, `Dashboard`) were inaccessible on mobile devices due to a missing mobile navigation menu drawer.
2. **Hero Search Bar Overflow**: On mobile screens (< 768px), the search input, location dropdown, and search button jammed horizontally, causing layout overflow.
3. **Mobile Filter Screen Real-Estate**: The filter side panel on `records.html` pushed search results far below the fold on mobile viewports.
4. **Admin Sidebar Accessibility**: The security admin portal (`admin.html`) sidebar was inaccessible on mobile screens due to a missing mobile layout drawer.
5. **Form Radio Text Truncation**: Option text inside selection cards on `form.html` truncated on narrow screens (320px–375px).
6. **Cross-Tab Data Sync Latency**: Modifying status flags in `admin.html` did not automatically re-trigger analytics calculations in open `dashboard.html` windows without a page refresh.

---

## Improvements Completed During Lab 11

* **Responsive Navigation Drawer** (`Shared/components.js`)
    * *Fix*: Implemented a touch-friendly slide-down mobile menu drawer with active page indicators and mobile-optimized target paddings (`commit b14c9e1`).
* **Mobile Search & Hero Optimization** (`index.html`)
    * *Fix*: Converted hero search bar container into a responsive flex-column layout on mobile viewports and adjusted typography scaling (`commit f83a210`).
* **Collapsible Mobile Filter Accordion** (`records.html`, `js/records.js`)
    * *Fix*: Added a toggleable filter accordion (`#mobile-filter-toggle`) to keep item results visible above the fold on mobile devices (`commit 3d71a09`).
* **Admin Mobile Drawer & Security Portal** (`admin.html`, `js/admin.js`)
    * *Fix*: Built a slide-out mobile sidebar drawer with backdrop overlay (`#admin-sidebar-overlay`) for full admin accessibility on all devices (`commit e92d04a`).
* **Mobile Form & Dashboard UI Enhancements** (`form.html`, `dashboard.html`, `detail.html`)
    * *Fix*: Scaled responsive typography, adjusted grid gaps, updated touch targets, and reformatted radio card flex containers (`flex-col sm:flex-row`) (`commit c02f883`).
* **Cross-Component State Synchronization** (`js/dashboard.js`, `js/admin.js`)
    * *Fix*: Added dynamic event hooks on `localStorage` updates so that status modifications in Admin View instantly recalculate metric counters on the Dashboard (`commit e21c78a`).
* **Global Responsive Utility Styles** (`css/styles.css`)
    * *Fix*: Added backdrop blur effects, drawer CSS transition rules, custom form validation styles, and touch-active state optimizations across all views (`commit 72b94e5`).
