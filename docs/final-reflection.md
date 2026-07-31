# Final Reflection

## 1. What We Built
Our team built **Lemon**, a web-based campus lost-and-found discovery and indexing portal for university students and campus security staff. The platform provides an intuitive, mobile-responsive interface featuring lost/found item reporting forms, real-time catalog search with building and category filters, visual status badges, privacy-masked student IDs, an administrative status management dashboard, and analytics overview cards.

## 2. What We Learned About Users
- **Fragmented Workarounds Fail:** Chat groups (LINE/Discord) and paper notebooks lead to high search abandonment (65% within 24 hours) because lost posts drown quickly under daily messages.
- **Categorization Urgency Differs:** Low-value items (water bottles) have low urgency, whereas high-value items (ID cards, calculators, USB drives) require immediate search indexing and status updates.
- **Privacy is Essential:** Students expressed strong concerns regarding public exposure of phone numbers and home addresses. Masking student IDs (`65XXXXX`) and withholding direct contact details until verified significantly increased user willingness to submit reports.

## 3. What We Learned About Requirements
- **Requirements Must Drive Features Directly:** Defining `FR-01` through `FR-16` early ensured every UI component, form input, and API route directly served a specific user need or system requirement.
- **Scope Discipline is Key:** Postponing complex non-essential features (in-app anonymous messaging `US-08` and push notifications `US-07`) kept the team focused on perfecting core lost-and-found reporting, search filtering, and status tracking.

## 4. What We Improved After Testing
Following Lab 08 usability testing with 20 users (80.00% task completion):
- **Color-Coded Status Badges (`FR-08`):** Replaced plain text labels with distinct status badges (`Pending Review`, `Available`, `Claimed`, `Closed`) to eliminate user confusion around item availability.
- **Campus Building Dropdowns (`FR-06`):** Replaced generic text inputs with specific campus building dropdown options to reduce location search friction.
- **Mobile Responsive Drawers (`FR-14`):** Added a mobile menu drawer in `components.js` and a collapsible filter accordion on `records.html` for smartphone viewports.
- **Direct Header Analytics CTA (`FR-12`):** Added a header navigation shortcut so users and staff can access summary metrics in one click.

## 5. What Was Difficult Technically
- **Responsive Layout Harmony:** Ensuring that dense data tables on `admin.html` and wide search filters on `records.html` remained readable without horizontal overflow on smaller mobile screens (`< 768px`). Resolved using collapsible accordions and slide-out mobile drawers (`#admin-sidebar-overlay`).
- **Data Persistence Sync:** Maintaining seamless data synchronization between client-side `localStorage` fallbacks, REST API endpoints (`server.js`), and pre-populated JSON sample datasets (`record-data.json`).

## 6. What We Would Improve Next
1. **Cloud Relational Database Integration:** Migrate file-based JSON storage to a cloud-hosted PostgreSQL database with Express JWT user session authentication.
2. **In-App Anonymous Messaging (`US-08`):** Build encrypted in-app chat enabling owners and finders to arrange item handovers securely.
3. **Machine-Learning Face Obfuscation:** Implement client-side face detection to automatically blur human faces in submitted item photographs before saving.

## 7. Individual Contributions

| Member | Role | Contribution | Evidence Link / Commit |
|---|---|---|---|
| **Kyaw Ye Lin** (`kyawyel68-Crystal`) | Product Lead | Co-authored pitch slides, uploaded final pitch presentation slides (`/pitch/`), GTM strategy, Business Model Canvas, and metrics model. | [Commits](https://github.com/ai10011/ICT105-Lemon-MVP/commits?author=kyawyel68-Crystal) |
| **Phollapat Rodchue** (`ai10011`) | Technical Lead | Co-authored pitch slides, uploaded final prototype screenshots (`/screenshots/`), developed web prototype (`prototype/project/`), and authored `docs/feature-implementation-status.md` and `docs/final-prototype-report.md`. | [Commits](https://github.com/ai10011/ICT105-Lemon-MVP/commits?author=ai10011) |
| **Tin May Lin** (`meirosemary`) | UX/UI Lead | Co-authored pitch slides, designed UI wireframes, authored `docs/final-reflection.md` and `docs/final-submission-checklist.md`, acquisition metrics framework, and responsible IT privacy guidelines. | [Commits](https://github.com/ai10011/ICT105-Lemon-MVP/commits?author=meirosemary) |
| **Phoochit Jantakam** (`Bilal112344`) | Documentation Lead | Co-authored pitch slides, maintained weekly logbook (`docs/weekly-logbook.md`), root repository `README.md` maintenance, risk registers, and system requirements notes. | [Commits](https://github.com/ai10011/ICT105-Lemon-MVP/commits?author=Bilal112344) |
