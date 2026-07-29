# Demo Script

## Demo Objective

Demonstrate that **Lemon - Smart Campus Lost-and-Found System (LostLink)** enables university students and campus staff to report, search, verify, and track lost or found items through a centralized, privacy-first, and responsive web platform.

## Presenter Roles

| Member Name | Role in Demo | Part Presented |
| --- | --- | --- |
| **Kyaw Ye Lin** (Product Lead) | Introduction & Value Proposition | Homepage, project background, student pain points, target user persona, and primary pathways. |
| **Phollapat Rodchue** (Technical Lead) | Item Reporting & Data Submission | Report submission form (`form.html`), mandatory field validation, photo upload, and data storage. |
| **Tin May Lin** (UX/UI Lead) | Search Catalog & Detail Verification | Record search grid (`records.html`), campus building dropdown filters, detail view (`detail.html`), and privacy PII masking (`65XXXXX@au.edu`). |
| **Phoochit Jantakam** (Documentation Lead) | Admin Portal, Analytics & Closing | Staff administrative status updates (`admin.html`), ownership claim verification, analytics dashboard (`dashboard.html`), startup metrics, and closing statement. |

## Demo Flow

| Step | Screen / Feature | What Presenter Says | Requirement ID | Expected User Value |
| --- | --- | --- | --- | --- |
| 1 | **Landing / Homepage** (`index.html`) | "Welcome to **Lemon - Smart Campus Lost-and-Found System**. Our platform solves campus lost item friction by providing one official, centralized portal for university students and security staff." | FR-01 | Instantly understand system purpose and core value proposition. |
| 2 | **Main User Pathway** (`index.html` → `form.html` / `records.html`) | "From the homepage, users can immediately choose between two primary pathways: submitting a new lost/found report or searching the live catalog." | FR-02 | Clear navigation pathways for both item finders and item losers. |
| 3 | **Input Form** (`form.html`) | "When submitting a report, users fill mandatory item details—such as item category, campus building location, and date—along with optional photo upload and explicit PII data consent." | FR-03, FR-10, FR-11 | Quick, error-free reporting with input validation and clear feedback. |
| 4 | **Record List & Filters** (`records.html`) | "Users can browse all reported items with real-time keyword search, campus building dropdowns, category filters, visual status badges, and a mobile filter accordion." | FR-05, FR-06, FR-14 | Accelerates search time and reduces search abandonment rates. |
| 5 | **Detail View & Privacy Protection** (`detail.html`) | "Opening an item record reveals full metadata while safeguarding student privacy by masking contact details (`65XXXXX@au.edu`) until an ownership claim is submitted." | FR-07, FR-08, FR-15 | Verifies item ownership while maintaining student privacy and security. |
| 6 | **Admin Portal & Status Tracking** (`admin.html`) | "Campus security staff access the administrative management view to inspect pending verification claims, review ownership proof, and update item status to 'Claimed' or 'Closed'." | FR-08, FR-09 | Streamlines staff inventory management and status tracking. |
| 7 | **Analytics Dashboard** (`dashboard.html`) | "The summary dashboard provides real-time tracking of total reports, active pending claims, resolution rate percentages, and category distribution metrics." | FR-12 | Clear visual insights into overall campus lost-and-found operational performance. |
| 8 | **Closing & Summary** | "Lemon replaces scattered LINE and Discord chat groups with an organized, privacy-first platform that saves time and dramatically increases lost item recovery rates across campus." | FR-16 | Summarizes project impact and alignment with startup requirements. |

## Closing Statement

"For university students and campus security staff struggling with fragmented lost-item searches, **Lemon (LostLink)** provides a single centralized platform that accelerates item recovery, protects student privacy, and streamlines campus lost-and-found logistics."
