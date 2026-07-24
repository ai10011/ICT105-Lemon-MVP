# Prototype Testing Notes

## Test Environment
- Prototype link or folder: [project](https://ai10011.github.io/ICT105-Lemon-MVP/prototype/project/)
- Browser/device used: Google Chrome (Desktop), Google Chrome (Android)
- Tester role: Group members, peer reviewers (Lab 11)
- Test date: 25/7/2026

## Main Test Cases

| Test ID | User Flow / Feature | Steps to Test | Expected Result | Actual Result | Status | Issue Found | Fix / Next Action |
|---|---|---|---|---|---|---|---|
| T-01 | Open homepage | Open prototype homepage | Homepage shows title, target user, problem, and main action | Hero title, problem overview, search box, CTA buttons, and recent finds grid loaded successfully | Pass | Mobile navigation menu was missing; hero search bar overflowed on small screens (< 768px) | Added responsive hamburger dropdown drawer in `components.js`; updated hero search box to vertical stacked flex layout on mobile in `index.html` |
| T-02 | Submit record | Fill form and submit | Record is saved or simulated and confirmation appears | Form validates inputs, saves record data to local storage / server API, displays confirmation modal | Pass | "I Lost Something" / "I Found Something" radio selection buttons truncated text on small phone screens (320px-375px) | Updated radio button container to responsive flex direction (`flex-col sm:flex-row`) and dynamic padding in `form.html` |
| T-03 | View record list | Open list page/section | Submitted or sample records are visible | All submitted and sample records rendered dynamically in responsive grid cards with category badges and time ago | Pass | Desktop margin padding `px-margin-desktop` on small screens caused squished card grid layout | Updated main container padding to `px-margin-mobile md:px-margin-desktop` in `records.html` |
| T-04 | Search/filter | Use keyword/category/status filter | Relevant records are shown | Dynamic filtering by status (Lost/Found), category, building location, and keyword text updated result count and card grid | Pass | Filter panel occupied full vertical height on mobile viewports before showing item results | Added collapsible "Search Filters & Options" accordion toggle button (`#mobile-filter-toggle`) in `records.html` and `records.js` |
| T-05 | Detail view | Select one record | Record details are shown clearly | Item page loaded details via `?id=...`, displaying item image, status badge, map location, reporter info, and action buttons | Pass | Font sizes and layout gaps were overly large on mobile screens | Applied responsive typography (`text-2xl sm:text-3xl lg:text-display-lg`) and gap scaling in `detail.html` |
| T-06 | Status update | Change record status in admin view | Status changes and dashboard updates | Admin table (`admin.html`) displayed real-time item status with action controls and metrics update | Pass | Admin sidebar was hidden on mobile with an unhandled hamburger button | Created slide-out mobile admin drawer with backdrop overlay (`#admin-sidebar-overlay`) and toggle handlers in `admin.js` |
| T-07 | Dashboard metrics | Open dashboard | Metrics are visible and match data | User dashboard (`dashboard.html`) displayed user stats, active claim counts, success rate, and match notification banner | Pass | Top margin `mt-xxl` created excessive whitespace above content on mobile viewports | Adjusted responsive margin spacing (`mt-md md:mt-xxl`) and notification banner flex layouts in `dashboard.html` |

## Summary of Issues
1. **Mobile Navigation Access:** The primary navigation links (`Browse`, `Report`, `Dashboard`) were hidden on mobile screens due to a missing mobile menu drawer.
2. **Hero Search Bar Overflow:** On mobile viewports, the search input, location select, and search button jammed horizontally, causing layout breaking and overflow.
3. **Filter Panel Layout on Mobile:** Filter options on `records.html` occupied excessive screen space above search results on phones.
4. **Admin Sidebar Mobile Access:** Security portal (`admin.html`) sidebar was inaccessible on mobile viewports.
5. **Form Radio Button Truncation:** "I Lost Something" / "I Found Something" form cards truncated option text on 320px-375px screens.

## Improvements Completed During Lab 11
- **Responsive Navigation Drawer ([Shared/components.js](file:///c:/Users/rodch/OneDrive/เอกสาร/ICT105-Lemon-MVP/prototype/project/Shared/components.js)):** Implemented slide-down mobile menu drawer with touch-friendly navigation links and active page indicators.
- **Mobile Search & Hero Optimization ([index.html](file:///c:/Users/rodch/OneDrive/เอกสาร/ICT105-Lemon-MVP/prototype/project/index.html)):** Converted search bar container into responsive flex column layout and optimized hero text sizes.
- **Collapsible Mobile Filter Accordion ([records.html](file:///c:/Users/rodch/OneDrive/เอกสาร/ICT105-Lemon-MVP/prototype/project/records.html) & [js/records.js](file:///c:/Users/rodch/OneDrive/เอกสาร/ICT105-Lemon-MVP/prototype/project/js/records.js)):** Added toggleable filter options container (`#mobile-filter-toggle`) for mobile viewports.
- **Admin Mobile Drawer & Security Portal ([admin.html](file:///c:/Users/rodch/OneDrive/เอกสาร/ICT105-Lemon-MVP/prototype/project/admin.html) & [js/admin.js](file:///c:/Users/rodch/OneDrive/เอกสาร/ICT105-Lemon-MVP/prototype/project/js/admin.js)):** Added slide-out mobile sidebar drawer with backdrop overlay (`#admin-sidebar-overlay`).
- **Mobile Form & Dashboard Layouts ([form.html](file:///c:/Users/rodch/OneDrive/เอกสาร/ICT105-Lemon-MVP/prototype/project/form.html), [dashboard.html](file:///c:/Users/rodch/OneDrive/เอกสาร/ICT105-Lemon-MVP/prototype/project/dashboard.html), [detail.html](file:///c:/Users/rodch/OneDrive/เอกสาร/ICT105-Lemon-MVP/prototype/project/detail.html)):** Enhanced touch targets, radio selection layouts, responsive margins, and typography scaling.
- **Global Responsive Utilities ([css/styles.css](file:///c:/Users/rodch/OneDrive/เอกสาร/ICT105-Lemon-MVP/prototype/project/css/styles.css)):** Added backdrop blur effects, drawer transition styles, and touch active state optimizations.

