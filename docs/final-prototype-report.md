# Final Prototype Report

## 1. Project Title
**Lemon - Smart Campus Lost-and-Found System**  
*ICT105 Fundamental Technology Entrepreneurship – Final MVP Prototype Report*

---

## 2. Group Members and Roles

| Name | Role | Main Contribution | GitHub Evidence |
|---|---|---|---|
| **Kyaw Ye Lin** (`kyawyel68-Crystal`) | Product Lead | Co-authored pitch slides, uploaded final pitch presentation slides (`/pitch/`), GTM strategy, Business Model Canvas, and integrated Power BI dashboard metrics model. | [Commits](https://github.com/ai10011/ICT105-Lemon-MVP/commits?author=kyawyel68-Crystal) |
| **Phollapat Rodchue** (`ai10011`) | Technical Lead | Co-authored pitch slides, uploaded final prototype screenshots (`/screenshots/`), developed web prototype (`prototype/project/`), and authored `docs/feature-implementation-status.md` and `docs/final-prototype-report.md`. | [Commits](https://github.com/ai10011/ICT105-Lemon-MVP/commits?author=ai10011) |
| **Tin May Lin** (`meirosemary`) | UX/UI Lead | Co-authored pitch slides, designed UI wireframes, authored `docs/final-reflection.md` and `docs/final-submission-checklist.md`, acquisition metrics framework, and responsible IT privacy guidelines. | [Commits](https://github.com/ai10011/ICT105-Lemon-MVP/commits?author=meirosemary) |
| **Phoochit Jantakam** (`Bilal112344`) | Documentation Lead | Co-authored pitch slides, maintained weekly logbook (`docs/weekly-logbook.md`), root repository `README.md` maintenance, risk registers, and system requirements notes. | [Commits](https://github.com/ai10011/ICT105-Lemon-MVP/commits?author=Bilal112344) |

---

## 3. Problem Background
University students who lose personal items on campus currently face fragmented, unstructured reporting channels (such as informal LINE/Discord chat groups, paper notebooks, or asking physical security desks manually). 

Because these existing workarounds are scattered and inefficient:
- **High Abandonment Rate:** 65% of students abandon their search for lost items within 24 hours.
- **Message Drowning:** Found item announcements in group chats quickly get buried under unrelated messages.
- **Unclaimed Property Accumulation:** Campus security offices accumulate large volumes of unclaimed personal items due to lack of a centralized search index.

Through our Lab 03 customer problem discovery, our team validated that students urgently need a single, official, privacy-first web portal to report, index, search, and recover lost personal belongings without physical IoT hardware complexity.

---

## 4. Target Users

1. **Primary Target User – University Students (e.g., "Justin", 1st-Year Undergraduate):**
   - **Needs:** Fast, centralized search interface to check lost/found items by category, campus location, and date; simple item reporting form; privacy protection for contact information.
   - **Pain Point:** Searching through dozens of chat groups with no filtering or status updates.

2. **Secondary Target User – Campus Security & Facility Clerks:**
   - **Needs:** Streamlined administrative dashboard to log incoming inventory, update claim statuses (`Pending Review`, `Available`, `Claimed`, `Closed`), and view overall campus resolution metrics.
   - **Pain Point:** Manual logbooks and high volume of repetitive in-person inquiries.

---

## 5. Evidence Summary

Our product decisions and feature designs were directly driven by empirical evidence gathered across multiple venture development phases:

- **Lab 03 Customer Discovery:** User interviews validated that existing chat-group workarounds fail. Based on user feedback, we pivoted from physical drop-off mechanics to a digital location-pinning model and introduced privacy-first contact masking.
- **Lab 08 Customer Validation (v1 Prototype):** Evaluated core user flows with 20 target testers (T001–T020). Achieved an **80.00% task completion success rate**, an average feedback score of **3.55 / 5.0**, and an interest score of **3.80 / 5.0**. Identified 5 key usability pivots implemented in Sprint 2:
  1. *Visual Status Badges (FR-08):* Color-coded status labels replacing plain text.
  2. *Campus Location Dropdown (FR-06):* Building dropdown filter to reduce search friction.
  3. *Form Input Streamlining (FR-10):* Reduced required fields and inline guidance.
  4. *Header Dashboard Navigation (FR-12):* Direct link to summary stats in header bar.
  5. *Prominent Admin CTAs (FR-09):* Enhanced action buttons on administrative management view.
- **Lab 12 Digital Go-to-Market (Landing Page Test):** Recorded **365 total page views**, a **41.37% CTA click-through rate**, and **48 active demo testers** with a **13.15% conversion rate**.

---

## 6. Final Prototype Overview

The **Lemon MVP** is an interactive, fully responsive web application built with HTML5, Tailwind CSS, Vanilla JavaScript, and a Node.js Express REST API server (`server.js`) backed by JSON storage (`record-data.json`) and client-side `localStorage` fallback.

### Core Prototype System Architecture:
- **Landing & Discovery Gateway ([index.html](../prototype/project/index.html)):** Displays platform value proposition, live counters, hero search input, and quick CTA buttons.
- **Item Reporting Form ([form.html](../prototype/project/form.html)):** Structured input form for Lost/Found reports supporting category selection, building location dropdown, date picker, photo preview, and user consent checkbox.
- **Catalog Directory & Search ([records.html](../prototype/project/records.html)):** Dynamic record grid with real-time keyword search, report type pills, category filters, campus building selector, and collapsible mobile filter accordion drawer (`#mobile-filter-toggle`).
- **Record Detail & Tracking ([detail.html](../prototype/project/detail.html)):** Item view showing high-resolution photos, location details, masked student IDs (`65XXXXX`), and visual status badges.
- **Admin Management Portal ([admin.html](../prototype/project/admin.html)):** Facility clerk dashboard for updating item statuses (`Pending Review`, `Available`, `Claimed`, `Closed`), tracking total secured items, and managing records via a slide-out mobile drawer (`#admin-sidebar-overlay`).
- **Analytics Dashboard ([dashboard.html](../prototype/project/dashboard.html)):** Analytics overview displaying resolution rate %, category progress distribution, and personal report history.

---

## 7. Requirement Traceability Summary

All 16 Minimum Prototype Requirements (`FR-01` through `FR-16`) defined in [system-requirements.md](system-requirements.md) have been **100% implemented** in the final prototype:

| Req ID | Requirement Description | Implemented Screen / Module | User Story ID | Evidence & Validation Source | Status |
|---|---|---|---|---|---|
| **FR-01** | Homepage or landing screen | [index.html](../prototype/project/index.html) | US-01, US-03 | Hero section, value proposition, quick search, live counters. | Fully Implemented |
| **FR-02** | Primary user pathway | `Shared/components.js`, header/footer | US-01, US-02 | Connected navigation bar and user flow from Landing → Submit → Directory → Detail → Admin. | Fully Implemented |
| **FR-03** | User input or data submission | [form.html](../prototype/project/form.html), `js/form.js` | US-01, US-02, US-04 | Report form with item name, type, 5 categories, location dropdown, photo upload preview, consent checkbox. | Fully Implemented |
| **FR-04** | Data storage or record management | [server.js](../prototype/project/server.js), `data/record-data.json` | US-01, US-02 | Node.js Express REST API (`GET/POST /api/records`) with JSON file storage & `localStorage` fallback. | Fully Implemented |
| **FR-05** | View records / information list | [records.html](../prototype/project/records.html), `js/records.js` | US-03 | Dynamic grid layout showing reported item cards, photos, location tags, and visual status badges. | Fully Implemented |
| **FR-06** | Search, filter, or category function | [records.html](../prototype/project/records.html), `js/records.js` | US-03 | Text keyword search, Lost/Found pills, category multi-select, building filter dropdown, mobile filter accordion. | Fully Implemented |
| **FR-07** | Detail view for each record | [detail.html](../prototype/project/detail.html), `js/detail.js` | US-05 | Item detail view loaded via `?id=`, photo viewer, map location preview, masked contact details. | Fully Implemented |
| **FR-08** | Status or progress tracking | `detail.html`, `records.html`, `admin.html` | US-05, US-06 | Standardized color-coded visual status badges (`Pending Review`, `Available`, `Claimed`, `Closed`). | Fully Implemented |
| **FR-09** | Admin or manager function | [admin.html](../prototype/project/admin.html), `js/admin.js` | US-06 | Admin status update actions, total secured counter, resolution rate bar, slide-out mobile drawer. | Fully Implemented |
| **FR-10** | Basic validation and error prevention | `form.html`, `login.html`, `js/form.js` | US-01, US-02 | HTML5 & JS field validation, mandatory building/category check, date limits, visual error rings. | Fully Implemented |
| **FR-11** | Confirmation or feedback message | `Shared/components.js` (`showToast`) | US-01, US-06 | Toast notification banner confirming report submissions, status updates, and user feedback. | Fully Implemented |
| **FR-12** | Dashboard or summary view | [dashboard.html](../prototype/project/dashboard.html), `js/dashboard.js` | US-05 | Dashboard cards tracking user reports, recovery %, category distribution bars, and header access link. | Fully Implemented |
| **FR-13** | Basic UI consistency | `Shared/header.html`, `css/styles.css` | All Stories | Unified design system using custom Tailwind tokens, Plus Jakarta Sans typography, and shared header/footer. | Fully Implemented |
| **FR-14** | Mobile-friendly responsive design | `Shared/components.js`, `css/styles.css` | All Stories | Responsive grid breakpoints (`grid-cols-1 md:grid-cols-3`), mobile touch menu drawer, and stacked search box. | Fully Implemented |
| **FR-15** | Privacy and responsible data handling | `form.html`, `detail.html`, `privacy-and-data-protection.md` | US-01, US-05 | Masked student ID (`65XXXXX`), photo guideline disclaimer (no faces), stripped sensitive fields, consent check. | Fully Implemented |
| **FR-16** | Final prototype traceability | [feature-implementation-status.md](feature-implementation-status.md) | All Stories | Complete traceability connecting requirements `FR-01`–`FR-16` to user stories, prototype code, and test cases. | Fully Implemented |

---

## 8. Data Handling

Our team implemented strict data minimization and responsible IT design policies documented in [privacy-and-data-protection.md](privacy-and-data-protection.md):

- **Data Fields Collected:** Item Name, Report Type (`Lost`/`Found`), Category (5 options: *Electronics, Cards & IDs, Books & Stationery, Accessories, Personal Belongings*), Campus Building Location, Date Lost/Found, Item Description, Photo File/URL, Masked Student ID (`65XXXXX`), and Contact Email.
- **Sensitive Data Minimization:** Home addresses, phone numbers, national IDs, and financial information are **strictly excluded** from data collection forms.
- **Privacy & Masking:** Public directory screens (`records.html`, `detail.html`) display masked student IDs to prevent unauthorized identification. Contact details are accessible only behind simulated verification.
- **Photo Upload Policy:** Upload instructions explicitly prohibit photos containing human faces or private documentation details (Issue `#62`, Issue `#64`).
- **Data Flow Architecture:** Data submitted on `form.html` is posted to `POST /api/records` on the REST server (`server.js`), persisted to `data/record-data.json`, and synced with browser `localStorage` (`lemon_records`) for client-side offline rendering.

---

## 9. Validation and User Testing Results

- **Usability Testing Setup (Lab 08):** Evaluated prototype v1 across 20 target campus users (T001–T020) using 5 core scenarios: (1) Report lost item, (2) Search catalog with filters, (3) View item detail, (4) Check claim status, and (5) Update item status on admin view.
- **Quantitative Results:**
  - **Task Success Rate:** 80.00% (16 / 20 users completed all tasks without assistance).
  - **Usability Rating:** 3.55 / 5.0.
  - **Product Interest Score:** 3.80 / 5.0 (76.00% intent to adoption).
- **Sprint 2 UX Enhancements Delivered (Lab 11):**
  - Resolved main user confusion around status labels by implementing visual color-coded badges (`Pending Review` [Amber], `Available` [Emerald], `Claimed` [Blue], `Closed` [Gray]).
  - Added collapsible mobile filter accordion (`#mobile-filter-toggle`) so catalog results remain visible on smaller smartphone viewports.
  - Added header bar navigation shortcut directly to the analytics dashboard.

---

## 10. Startup / Product Metrics

The prototype tracks 8 foundational startup metrics ([startup-metrics.md](startup-metrics.md)):

| Metric ID | Metric Name | Result / Baseline Value | Purpose & Target |
|---|---|---|---|
| **M-01** | Landing Page Views | 365 Page Views | Evaluates acquisition interest across campus channels (Target: >= 100). |
| **M-02** | CTA Click-Through Rate | 41.37% (151 clicks / 365 views) | Measures call-to-action effectiveness on landing hero search button. |
| **M-03** | Active Demo Testers | 48 Active Testers | Tracks user engagement with interactive prototype features. |
| **M-04** | Task Success Rate | 80.00% (16 / 20 users) | Validates user interface intuitive design and navigation ease. |
| **M-05** | Conversion Rate | 13.15% (48 active / 365 views) | Tracks conversion from landing page visitors to active prototype users. |
| **M-06** | Average Usefulness Score | 4.35 / 5.0 | Evaluates user satisfaction with central search vs chat groups. |
| **M-07** | Average Interest Score | 3.80 / 5.0 (76.00%) | Measures willingness of students to adopt platform on campus. |
| **M-08** | Resolution Rate % | Dynamic Dashboard Metric | Measures % of reported lost items successfully returned/claimed. |

---

## 11. Business Value and Venture Direction

- **Value Proposition:** Lemon drastically reduces lost item recovery time from days to minutes, centralizing campus inventory without requiring physical hardware, sensors, or expensive IoT tracking networks.
- **Venture Direction (Evidenced-Based Pivot):** Proceeding with B2B Campus Service Licensing. The platform can be licensed directly to university facility management and campus security departments as an administrative inventory and lost-and-found management solution.
- **Revenue Model:** Annual campus software subscription fee covering system hosting, administrative staff dashboard access, QR-code poster integration, and analytics reporting.

---

## 12. Limitations and Future Improvements

### Current Prototype Limitations:
1. **Client-Side Role Simulation:** Administrative access (`admin.html`) currently relies on client-side role toggles rather than multi-tenant OAuth server authentication.
2. **File Storage Fallback:** Images use base64 data URLs or static mock paths; production storage requires Amazon S3 / Cloudinary cloud bucket hosting.
3. **Database Architecture:** Uses JSON file storage (`record-data.json`) and `localStorage` fallback; requires PostgreSQL relational database migration for scale.

### Future Development Roadmap:
- **In-App Anonymous Messaging (US-08):** Enable secure finder-owner chat without exposing personal contact numbers.
- **Automated Match Notifications (US-07):** Push email/LINE bot notifications when a newly reported found item matches a lost item report.
- **Automated Image Face Blurring:** Integrated client-side machine learning pipeline to automatically detect and obscure faces in submitted photos.
- **Production Relational Database:** Full migration to cloud-hosted PostgreSQL with Express JWT session authentication.

---
*Report prepared by Team Lemon for ICT105 Lab 14 Final MVP Submission.*
