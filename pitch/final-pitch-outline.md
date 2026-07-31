# Final Venture Pitch Outline: Lemon - Smart Campus Lost-and-Found System

**Course:** ICT105 Fundamental Technology Entrepreneurship  
**Instructor:** Dr. Herison Surbakti  
**Team Name:** Lemon  
**Recommended Pitch Length:** 7–10 Minutes  
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
- **Speaker Notes (approx. 45s):**
  > "Good day Dr. Herison and fellow evaluators. We are Team Lemon, and today we are excited to present our semester project: **Lemon**, a Smart Campus Lost-and-Found System built for ICT105 Fundamental Technology Entrepreneurship. Our team brings together product vision, software engineering, UI design, and rigorous documentation to solve a persistent friction point in student campus life."

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
- **Speaker Notes (approx. 1 min):**
  > "Every semester, hundreds of valuable items go missing across campus. Currently, if a student loses their Student ID or scientific calculator in the library, they have to scroll through dozens of noisy LINE groups, check social media posts, or physically walk to the security desk. Because this information is completely unorganized, 65% of students give up searching within a single day. On the flip side, campus security staff spend hours manually recording incoming items in physical notebooks without any easy way to notify the owners."

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
- **Speaker Notes (approx. 1 min):**
  > "We didn't just guess what features to build; we built Lemon based on hard empirical evidence. In Lab 03, we interviewed 15 campus users and discovered that students wanted a centralized portal but were deeply concerned about privacy. Later, during customer validation in Lab 08, 20 test users evaluated our working prototype. We achieved an 80% task completion rate and refined the interface based on their feedback—adding visual status badges and mobile filter drawers to eliminate navigation friction."

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
- **Speaker Notes (approx. 1 min):**
  > "Lemon brings order to campus lost-and-found. With Lemon, any student can submit a report in under 60 seconds or search through catalog records filtered by campus building and item category. Most importantly, Lemon protects student privacy by masking contact emails and Student IDs publicly, ensuring that ownership verification happens safely through official administrative channels."

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
- **Speaker Notes (approx. 2 min):**
  > "Now, let us walk you through our live working prototype. [Navigate through prototype]. First, on our landing page, users choose to either search existing records or report an item. When submitting a report on `form.html`, mandatory fields like campus building and date ensure quality data entry. On `records.html`, students can search by keywords or filter by location—with a mobile drawer built specifically for small screens. On `detail.html`, contact info is safely masked, allowing students to click 'Claim Item'. Finally, desk staff log into `admin.html` to verify proof of ownership and mark the item as 'Claimed', instantly updating our live analytics dashboard on `dashboard.html`."

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
- **Speaker Notes (approx. 1 min):**
  > "From a venture perspective, Lemon operates as a non-commercial, university-integrated digital service. Our Business Model Canvas focuses on creating maximum value for the university community. By partnering with Campus Security and Student Affairs, Lemon replaces manual overhead with automated web indexing. It requires minimal maintenance costs while significantly raising campus operational efficiency and student satisfaction."

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
- **Speaker Notes (approx. 1 min):**
  > "To validate market demand, we ran a digital Go-to-Market pilot in Lab 12. Lemon's landing page generated 365 total page views with an outstanding 41.37% CTA click-through rate and 48 active testers. Combined with our 80% task completion rate and 4.35 out of 5 usefulness rating, these numbers prove that students and staff actively want and can easily use this system."

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
- **Speaker Notes (approx. 1 min):**
  > "Architecturally, Lemon combines HTML5, Tailwind CSS, and Vanilla JavaScript with a lightweight Express REST API backend and JSON `localStorage` persistence. Under our Lab 09 Responsible IT audit, we ensured strict privacy compliance: sensitive personal data like phone numbers are never collected, student IDs are masked publicly, and administrative status changes are protected behind role checks."

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
- **Speaker Notes (approx. 45s):**
  > "Throughout our development sprints, we continuously refined Lemon based on user testing—fixing mobile viewport layout bugs, adding collapsible search accordions, and replacing text labels with clear status badges. Looking beyond ICT105, our post-course roadmap includes migrating to a production PostgreSQL database, adding anonymized WebSocket chat, and introducing AI image matching."

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
- **Speaker Notes (approx. 30s):**
  > "In summary, Lemon delivers a validated, privacy-first, and zero-hardware solution to a real problem faced by university students every day. Our prototype is live and ready for evaluation. Thank you Dr. Herison and panel members for your attention—we are now open for any questions and feedback."
