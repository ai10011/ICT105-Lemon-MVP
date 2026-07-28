# Final Demo Link

## Prototype Link
- **Live Hosted Web Prototype**: [https://ai10011.github.io/ICT105-Lemon-MVP/prototype/project/index.html](https://ai10011.github.io/ICT105-Lemon-MVP/prototype/project/index.html)
- **GitHub Repository Source**: [https://github.com/ai10011/ICT105-Lemon-MVP/tree/main/prototype/project](https://github.com/ai10011/ICT105-Lemon-MVP/tree/main/prototype/project)

## Landing Page Link
- **Live Landing Page URL**: [https://ai10011.github.io/ICT105-Lemon-MVP/prototype/project/index.html](https://ai10011.github.io/ICT105-Lemon-MVP/prototype/project/index.html)
- **Landing Page Specification**: [`docs/landing-page-content.md`](../docs/landing-page-content.md)

## Notes for Instructor & Evaluators

### 1. Zero Setup Required
The application runs directly in any standard web browser (Chrome, Safari, Firefox, Edge). It is hosted via GitHub Pages and utilizes dynamic client-side JavaScript with `localStorage` data persistence, eliminating the need for local server installation.

### 2. Access Roles & Navigation
- **Student User Access:** Publicly accessible without login. Students can search items ([`records.html`](project/records.html)), submit missing/found reports ([`form.html`](project/form.html)), and view detailed record pages ([`detail.html`](project/detail.html)).
- **Admin / Staff Management Portal:** Accessible via header navigation or direct link ([`admin.html`](project/admin.html)). Staff can review pending report claims, verify ownership proofs, and update status badges (`Pending Review`, `Available`, `Claimed`, `Closed`).
- **Analytics Dashboard:** Publicly viewable statistics dashboard ([`dashboard.html`](project/dashboard.html)) displaying live report counters, resolution rates, and category distribution.

### 3. Pre-Populated Sample Data
The prototype comes pre-loaded with sample campus item records (Student IDs, calculators, access keys, headphones across campus buildings) to allow immediate testing of multi-criteria search, building filters, detail views, and administrative status updates.

### 4. Responsive Design
All pages support responsive viewports, including touch navigation drawers, stacked hero search inputs, mobile filter accordions, and slide-out admin drawers for phone viewports (< 768px).

