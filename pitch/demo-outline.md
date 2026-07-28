# Demo Outline for Final Pitch

## 1. Opening Problem
- **Fragmented Search Channels:** University students who lose personal items on campus currently search through disorganized LINE/Discord chat groups, Facebook posts, or physically visit security desks.
- **High Abandonment Rate:** 65% of students abandon their search within 24 hours because current workarounds are scattered and inefficient, leading to high rates of unrecovered personal property in campus facilities.

## 2. Target User
- **Primary Users:** University undergraduate students who commute across high-density campus facilities (e.g., Main Library, Lecture Halls, ICT Computer Labs) and frequently lose or find everyday essentials (Student IDs, calculators, access cards, USB drives).
- **Secondary Users:** Campus security staff and facility processing clerks responsible for logging incoming inventory items and handling manual inquiries.

## 3. Product Solution
- **Lemon - Smart Campus Lost-and-Found System:** A centralized web-based indexing, discovery, and administration portal.
- **Key Features:** Fast lost/found report filing, multi-criteria category and building search filters, masked PII contact protection (`65XXXXX@au.edu`), ownership claim requests, color-coded visual status badges (`Pending Review`, `Available`, `Claimed`, `Closed`), and an administrative management dashboard.

## 4. Demo Flow
1. **Homepage / Landing Page (`index.html`):** Present the project headline (*"Recover lost campus items faster with one central platform"*), problem context, target users, and hero search action buttons.
2. **Main User Action (`index.html` → `form.html` / `records.html`):** Demonstrate the two primary user pathways: submitting a test report or searching the live catalog.
3. **Form Submission (`form.html`):** Guide evaluators through filing a lost/found report with mandatory field validations (Category, Campus Building, Date), optional photo upload, and student PII consent.
4. **Search / Filter / List (`records.html`):** Demonstrate multi-criteria keyword search, category filter, campus building dropdown filter, visual status badges, and collapsible mobile filter accordion drawer.
5. **Detail / Status (`detail.html`):** Inspect item details, verify PII contact masking (`65XXXXX@au.edu`), view color-coded status badges, and submit an ownership verification claim.
6. **Admin / Update (`admin.html`):** Switch to staff administrative portal view, review pending claims, verify proof of ownership, and update report status from `Pending Review` to `Claimed`.
7. **Dashboard / Summary (`dashboard.html`):** Display real-time updated summary statistics including total item reports, pending verification queue, resolution rate %, and category distribution charts.

## 5. Evidence
- **Customer Discovery Evidence (Lab 03):** 15 structured student problem interviews confirming that scattered chat groups cause severe communication delays and item loss.
- **Validation / Testing Evidence (Lab 08 & Lab 13):** 20 user test runs (T001–T020) achieving an **80.00% task completion rate** and an average usefulness rating of **4.35 / 5.0**.
- **Startup / Product Metrics (Lab 11 & Lab 12):** Recorded **365 landing page views**, a **41.37% CTA click-through rate**, 99 demo attempts, 48 active testers, and 8 core tracked product metrics (`M-01` to `M-08`).

## 6. Closing Value Message
*"For university students and campus security staff struggling with fragmented lost-item searches, **Lemon** provides a single centralized platform that accelerates item recovery, protects student privacy, and streamlines campus lost-and-found logistics."*

