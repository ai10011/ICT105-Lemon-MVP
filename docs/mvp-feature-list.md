# Lab 04 - MVP Feature List

## MVP Decision Rule
The Minimum Viable Product (MVP) for **Lemon - Smart Campus Lost-and-Found System** strictly includes features required to enable university students and campus security staff to report, discover, filter, and track lost or found belongings on campus without physical hardware or IoT sensor overhead.

---

## MoSCoW Feature Prioritization & Traceability Matrix

| Feature ID | Feature Name | Description | Priority | Related Requirement ID | Related User Story | Final Prototype Status |
|---|---|---|---|---|---|---|
| **F01** | Report Lost Item | Users can submit a structured form (item name, category, campus building, date, description) for an item they lost. | Must-Have | `FR-03`, `FR-04`, `FR-10` | `US-01` | **Fully Implemented** ([form.html](../prototype/project/form.html)) |
| **F02** | Report Found Item | Users can submit a detailed form for an item they found on campus. | Must-Have | `FR-03`, `FR-04`, `FR-10` | `US-02` | **Fully Implemented** ([form.html](../prototype/project/form.html)) |
| **F03** | Search and Filter | Users can search the catalog using text keywords, report type pills, category multi-select, and campus building dropdowns. | Must-Have | `FR-05`, `FR-06`, `FR-14` | `US-03` | **Fully Implemented** ([records.html](../prototype/project/records.html)) |
| **F04** | Item Status Updates | Security staff and reporters can track and update item statuses using visual color-coded badges (`Pending Review`, `Available`, `Claimed`, `Closed`). | Must-Have | `FR-07`, `FR-08`, `FR-09` | `US-05`, `US-06` | **Fully Implemented** ([admin.html](../prototype/project/admin.html)) |
| **F05** | Image Uploads | Users can attach item photos adhering to face privacy guidelines (no human faces). | Should-Have | `FR-03`, `FR-07`, `FR-15` | `US-04` | **Fully Implemented** ([form.html](../prototype/project/form.html)) |
| **F06** | User Authentication | User login and registration simulation protecting admin management access. | Should-Have | `FR-09`, `FR-10` | `US-06` | **Simulated / Client-Side** ([login.html](../prototype/project/login.html)) |
| **F07** | In-App Messaging | Direct anonymous communication between the person who found the item and the claimant. | Could-Have | `FR-15` | `US-08` | **Postponed** (Future Scope) |
| **F08** | Automated Notifications | Email or push notifications when a newly found item matches a lost report. | Could-Have | `FR-08` | `US-07` | **Postponed** (Future Scope) |
| **F09** | AI Image Matching | Automated computer vision image recognition to match lost and found item photos. | Out of Scope | N/A | N/A | **Excluded from MVP** |
| **F10** | Reward System | Gamified points or monetary reward system for returning lost items. | Out of Scope | N/A | N/A | **Excluded from MVP** |

---

## Scope Breakdown & Rationale

### 1. Must-Have (Core MVP Scope)
These features are essential to establish core problem-solution fit. Without them, the platform cannot function as a centralized campus lost-and-found portal:
- **F01 & F02 (Reporting Forms):** Primary data entry channels (`FR-03`, `FR-04`).
- **F03 (Catalog Search & Filters):** Solves information fragmentation across scattered LINE/Discord chat groups (`FR-05`, `FR-06`).
- **F04 (Status Tracking & Management):** Prevents duplicate inquiries and keeps campus security inventory updated (`FR-08`, `FR-09`).

### 2. Should-Have (High Value Improvements)
Features that significantly enhance user trust, data quality, and privacy:
- **F05 (Image Uploads):** Speeds up visual item identification while enforcing responsible privacy rules (no human faces in photos) (`FR-15`).
- **F06 (User Authentication Simulation):** Restricts administrative status update controls to staff roles (`FR-09`).

### 3. Could-Have (Postponed Enhancements)
Features that add value but require complex backend infrastructure beyond the MVP timeframe:
- **F07 (In-App Messaging):** Users currently utilize privacy-masked student contact details (`65XXXXX@au.edu`) to arrange item recovery (`US-08`).
- **F08 (Automated Notifications):** Users currently check real-time catalog status badges directly on the portal (`US-07`).

### 4. Out of Scope (Excluded from MVP)
- **F09 (AI Image Matching) & F10 (Reward System):** Excluded to prevent scope creep and eliminate unnecessary technical complexity during prototype validation.
