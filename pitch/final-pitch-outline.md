# Final Venture Pitch Outline: Lemon - Smart Campus Lost-and-Found System

**Course:** ICT105 Fundamental Technology Entrepreneurship  
**Instructor:** Dr. Herison Surbakti  
**Team Name:** Lemon  
**Live Prototype URL:** [Lemon MVP Live Prototype](https://ai10011.github.io/ICT105-Lemon-MVP/prototype/project/)

---

## Slide 1: Project Title and Team

- **Slide Title:** Lemon — Smart Campus Lost-and-Found System
- **Subtitle:** Centralizing Campus Discovery, Accelerating Recovery, and Protecting Student Privacy
- **Team Members & Responsibilities:**
  - **Kyaw Ye Lin** — *Product Lead*: Defined core problem, user personas, value proposition, and digital Go-to-Market strategy.
  - **Phollapat Rodchue** — *Technical Lead*: Lead web prototype architect, repository manager, and responsive mobile optimizer.
  - **Tin May Lin** — *UX/UI Lead*: Designed wireframes, visual style guide, customer validation metrics, and responsible IT frameworks.
  - **Phoochit Jantakam** — *Documentation Lead*: Maintained project documentation, weekly logbooks, requirements matrix, and risk registers.
- **Visual / Layout Recommendation:** Team portrait grid with member roles, GitHub handles, and project branding header.

---

## Slide 2: Problem and Target Users

- **Slide Title:** The Campus Lost-and-Found Crisis
- **Core Problem:**
  - Lost item reporting across university campuses is severely fragmented across unindexed LINE/Discord chat groups, Facebook community posts, and physical security desks.
  - **High Search Abandonment:** **65% of students abandon their search within 24 hours** due to scattered information, leaving high volumes of permanently unrecovered personal property.
- **Target User Segments:**
  1. **Primary Users (Students):** Undergraduate university students who frequently commute across high-density campus facilities (Main Library, Lecture Halls, ICT Computer Labs) and lose essential daily items (Student IDs, scientific calculators, USB drives, access cards).
  2. **Secondary Users (Campus Security & Facility Clerks):** Administrative staff burdened by manual paper logbooks, unorganized storage shelves, and repetitive student inquiries.
- **Visual / Layout Recommendation:** Split-screen graphic showing "Before" (scattered chat notifications & lost item post clutter) vs "Target Personas" (Student Justin & Security Officer).

---

## Slide 3: Evidence from Customer Discovery and Validation

- **Slide Title:** Evidenced-Based Validation & Discovery Insights
- **Customer Discovery (Lab 03):**
  - Conducted **15 structured user problem interviews** with students and facility staff.
  - **100% of respondents** confirmed that current scattered workarounds cause severe delays.
  - *Pivot Executed:* Shifted from physical drop-off locker hardware to a digital location-pinning web portal due to campus infrastructure constraints.
  - *Privacy Pivot:* Users explicitly rejected public display of personal phone numbers, requiring a privacy-first contact masking model.
- **Customer Validation & Usability Testing (Lab 08 & Lab 13):**
  - Tested prototype v1 with **20 user test runs** (Testers T001–T020).
  - **Task Completion Rate:** Achieved **80.00% (16/20 users)** across core reporting, searching, and claiming flows.
  - **Usability Feedback:** Rated **4.35 / 5.0** for platform usefulness and **3.80 / 5.0** for user interest.
  - *Key Iteration:* Replaced confusing text status labels with color-coded visual status badges (`Pending Review`, `Available`, `Claimed`, `Closed`).
- **Visual / Layout Recommendation:** Key metric callout cards (80% Task Completion Rate, 4.35/5 Usefulness) alongside interview quote callouts.

---

## Slide 4: Solution and Value Proposition

- **Slide Title:** Lemon — Centralized, Privacy-First Solution
- **Product Overview:** A lightweight, high-performance web platform that centralizes lost and found indexing, streamlines ownership verification, and automates report lifecycle tracking.
- **Core Value Propositions:**
  1. **Centralized Discovery Engine:** Single searchable database replacing scattered chat channels with multi-criteria category and building filters (FR-01, FR-06).
  2. **Privacy-First Contact Protection:** Student ID and email contact masking (`65XXXXX@au.edu`) preventing public data exposure while enabling secure claim verification (NFR-01, FR-07).
  3. **Streamlined Admin Workflow:** Color-coded status lifecycle tracking (`Pending Review` → `Available` → `Claimed` → `Closed`) that reduces administrative processing time (FR-08, FR-09).
  4. **Zero-Hardware Deployment:** Fully functional on standard mobile and desktop web browsers without requiring physical IoT sensors or expensive hardware infrastructure.
- **Visual / Layout Recommendation:** Product mockup showcasing the desktop and mobile interface highlights (Hero Search, Category Badges, Masked Detail View).

---

## Slide 5: Final Prototype Demonstration Flow

- **Slide Title:** Live Prototype Demonstration (5-Step Flow)
- **Step-by-Step Demo Journey:**
  1. **Landing Page Gateway (`index.html`):** Value proposition header, quick hero search bar, and primary CTAs (*"Try Demo / Search Lost Items"*).
  2. **Report Filing Streamline (`form.html`):** Intuitive lost/found item submission with mandatory field validations (Category, Campus Building, Date), optional photo upload, and mandatory user consent check.
  3. **Search & Catalog Index (`records.html`):** Real-time multi-criteria filtering, building dropdown selector, visual status badges, and collapsible mobile filter accordion drawer.
  4. **Item Detail & Ownership Claim (`detail.html`):** Comprehensive item view with masked contact protection (`65XXXXX@au.edu`) and interactive ownership claim request submission.
  5. **Admin Desk Portal & Analytics (`admin.html` & `dashboard.html`):** Simulated staff role-checked management console to review pending claims, update status (`Pending Review` → `Claimed`), and inspect real-time resolution metrics.
- **Visual / Layout Recommendation:** Step-by-step UI flowchart mapping screen transitions with embedded screenshots (`homepage.png`, `input-form.png`, `record-list.png`, `detail-view.png`, `admin-view.png`, `dashboard.png`).

---

## Slide 6: Business Model Canvas Summary

- **Slide Title:** Business Model Canvas & Operational Logic
- **BMC Key Components:**
  - **Value Proposition:** Centralized, efficient, organized, and privacy-protected campus lost-and-found management.
  - **Customer Segments:** University undergraduate students (Finders & Losers) and Campus Security / Student Affairs staff.
  - **Channels:** Mobile/desktop web browser, university portal links, campus QR code posters, and student LINE/Discord communities.
  - **Key Activities:** Web portal maintenance, record index management, claim status verification, and continuous UX refinement.
  - **Key Resources:** Development team, HTML5/Tailwind/JS web stack, JSON dataset storage, GitHub repository, and university web server.
  - **Key Partners:** University Administration, Campus Security Office, Student Affairs, and Student Body.
  - **Sustainability & Cost Structure:** Non-commercial university service model. Delivers high operational ROI by cutting administrative labor hours and reducing discarded campus lost property waste.
- **Visual / Layout Recommendation:** Clean 9-box Business Model Canvas grid graphic highlighting key operational pillars.

---

## Slide 7: Product/Startup Metrics and User Testing Findings

- **Slide Title:** Product Metrics & Digital Acquisition Results
- **Digital Go-to-Market & Acquisition Metrics (Lab 12):**
  - **M-01 Landing Page Views:** **365 total views** recorded across student acquisition channels (Target $\ge 100$).
  - **M-02 CTA Click-Through Rate:** **41.37%** (151 clicks / 365 views), demonstrating strong initial student intent.
  - **M-03 Demo Task Attempts:** **99 demo tasks** initiated by active visitors.
  - **M-05 Active Testers / Conversion Rate:** **48 active testers**, yielding a **13.15% landing page conversion rate**.
- **User Validation & Task Completion Metrics (Lab 08 & Lab 11 - M-01 to M-08):**
  - **Task Completion Rate:** **80.00%** across 20 test users.
  - **System Usefulness Score:** **4.35 / 5.0** average score.
  - **Target Resolution Rate:** Maintained a **> 70% case resolution target** for verified item claims.
- **Visual / Layout Recommendation:** Bar charts showing acquisition funnel (Views $\rightarrow$ CTA Clicks $\rightarrow$ Active Testers) alongside usability score breakdown.

---

## Slide 8: Technical Architecture and Data Handling

- **Slide Title:** Technical Architecture & Responsible IT Design
- **System Architecture & Tech Stack:**
  - **Frontend Stack:** HTML5, Tailwind CSS, Vanilla JavaScript, responsive CSS flexbox/grid layout (`prototype/project/`).
  - **REST API & Backend Integration:** Lightweight Express.js REST server (`server.js`) with JSON file storage (`record-data.json`) and client-side `localStorage` fallback.
  - **Architecture Rationale:** Ensures rapid zero-latency search queries, seamless offline test persistence, and clean separation between data and presentation layers.
- **Responsible IT & Privacy Framework (Lab 09):**
  - **Data Minimization:** Strictly excluded high-risk sensitive fields (National ID, Passport, Phone Number, Home Address).
  - **PII Protection:** Masked Student IDs (`65XXXXX`) and emails (`65XXXXX@au.edu`) on public index views.
  - **Role-Based Access Control (FR-09):** Restricted record editing and status updates (`Pending Review` $\rightarrow$ `Claimed`) to authorized staff on `admin.html`.
  - **Open-Source Compliance:** 100% compliant with MIT (Tailwind), SIL OFL (Google Fonts), and Apache 2.0 (Express.js) licenses.
- **Visual / Layout Recommendation:** Architecture block diagram (`system-architecture.mmd`) showing client browser $\leftrightarrow$ Express REST API $\leftrightarrow$ JSON/localStorage data layer, with privacy shield icons.

---

## Slide 9: Final Improvements and Future Development

- **Slide Title:** Product Iterations & Future Roadmap
- **Completed MVP Improvements (Lab 11 & Lab 13 Sprint Iterations):**
  - **IMP-01 / IMP-02 / IMP-04 (Mobile Viewport Optimization):** Implemented mobile navigation drawers (`Shared/components.js`), stacked hero search forms, and collapsible filter accordions (`records.html`).
  - **IMP-03 (Visual Status Badges):** Standardized visual color-coded badges (`Pending Review`, `Available`, `Claimed`, `Closed`) across detail and admin screens (FR-08).
  - **IMP-09 (Dashboard Navigation Access):** Added a direct header link for real-time analytics access (`dashboard.html`).
- **Post-Lab 14 Future Development Roadmap:**
  - **IMP-10 (Production Relational Database):** Migrate from client-side JSON/`localStorage` to a scalable PostgreSQL / MongoDB backend with full user auth (FR-04).
  - **IMP-11 (In-App Anonymized Chat):** Implement real-time WebSocket student-to-finder messaging without sharing private phone numbers (US-08, NFR-01).
  - **AI-Powered Photo Matching:** Integrate computer vision image comparison to match lost item upload photos with found inventory items automatically.
- **Visual / Layout Recommendation:** Two-column matrix: "Completed Improvements (Sprint 1 & 2)" vs "Future Development Pipeline".

---

## Slide 10: Closing and Q&A

- **Slide Title:** Transform Campus Recovery with Lemon
- **Core Summary Message:**
  > *"Lemon transforms campus lost-and-found from a chaotic, scattered search into a centralized, privacy-first, and highly efficient digital campus service."*
- **Key Investment / Adoption Highlights:**
  - **Validated Demand:** 365 landing page views, 41.37% CTA click rate, 48 active testers.
  - **Proven Usability:** 80.00% task completion rate across 20 test users.
  - **Ready for Deployment:** Fully functional web prototype live on GitHub Pages.
- **Live Demo & Repository Links:**
  - **Live Web Prototype:** [https://ai10011.github.io/ICT105-Lemon-MVP/prototype/project/](https://ai10011.github.io/ICT105-Lemon-MVP/prototype/project/)
  - **GitHub Repository:** [ai10011/ICT105-Lemon-MVP](https://github.com/ai10011/ICT105-Lemon-MVP)
- **Q&A Invitation:**
  > *"Thank you Dr. Herison Surbakti and evaluators for your time and guidance. We welcome any questions, feedback, or suggestions!"*
- **Visual / Layout Recommendation:** QR code linking to the live prototype alongside team contact email and closing logo graphic.
