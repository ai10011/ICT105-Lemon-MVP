# User Testing Plan & Specification

> [!NOTE]
> **Status Note:** Formal user testing sessions and testing forms were **not conducted** for this prototype phase. This document serves as a theoretical testing framework, evaluation protocol, and specification for future validation iterations.

---

## 1. Document Overview & Metadata

| Field | Details |
| --- | --- |
| **Project Title** | Lemon - Smart Campus Lost-and-Found System (LostLink) |
| **Repository** | `meirosemary/ICT105-Lemon-MVP` |
| **Course Code** | ICT 105 Fundamental Technology Entrepreneurship |
| **Target Prototype Version** | v1.0.0-MVP (HTML5 / Tailwind CSS / Vanilla JS) |
| **Document Purpose** | Comprehensive Usability & Functional Evaluation Specification |

---

## 2. Testing Objectives & Scope

### 2.1 Core Objectives
The primary goal of this testing framework is to evaluate the usability, user flow efficiency, task success rates, data privacy protections, and administrative workflow clarity of the **Lemon LostLink** prototype prior to final evaluation.

Specifically, the plan evaluates whether:
1. **Students** can independently submit detailed lost/found item reports and search existing records within 60 seconds without instruction.
2. **Campus Security / Admin Staff** can seamlessly verify ownership claims and update item lifecycle statuses (`Pending Review` → `Available` → `Claimed`).
3. **Data Protection Mechanisms** effectively mask sensitive contact details (student emails/phone numbers) across public catalog views.
4. **Responsive UI Elements** (drawers, filter accordions, data tables) render without layout breakage on mobile devices (< 768px).

### 2.2 In-Scope vs. Out-of-Scope

* **In-Scope:**
  * Client-side form validation, file input previews, and XSS sanitization checks.
  * Search, category filtering, campus building filtering, and global search reset behavior.
  * Cross-component state synchronization via browser `localStorage`.
  * Responsive layout behavior across Mobile (375px), Tablet (768px), and Desktop (1440px) viewports.
* **Out-of-Scope:**
  * Backend server database persistence (SQL/NoSQL database benchmarking).
  * SMS/Email gateway delivery integrations (mock notifications are used).
  * Real-time physical IoT smart locker hardware integration.

---

## 3. Test User Profiles & Demographics

To ensure balanced feedback across primary user segments, testing cohorts are divided into two distinct profiles:

### 3.1 Tester Cohort Distribution Summary

| Total Pool ($N=20$) | User Category | Sub-Group Breakdown | Sample Count |
| --- | --- | --- | --- |
| **Primary Cohort** | Target Users (Students) | Undergraduate Daily Users | $n = 10$ |
| | Target Users (Students) | Commuters / Lab Users | $n = 5$ |
| **Administrative Cohort** | Admin / Campus Staff | Security Officers | $n = 3$ |
| | Admin / Campus Staff | Facility Desk Clerks | $n = 2$ |

### 3.2 Detailed User Profile Specifications

| Profile Attribute | Target User Segment (Students) | Admin / Staff Segment |
| --- | --- | --- |
| **Sample Size ($N$)** | 15 Testers | 5 Testers |
| **Role / Background** | Undergraduate students across various faculties (IT, Business, Engineering, Arts). | Campus security personnel, facility managers, student union desk officers. |
| **Primary Use Cases** | Reporting lost personal items, searching catalog, submitting claim requests. | Cataloging handed-in physical items, verifying claims, closing resolved cases. |
| **Device Usage** | 80% Mobile ($375\text{px} - 430\text{px}$), 20% Desktop. | 70% Desktop ($1440\text{px}$), 30% Tablet ($768\text{px}$). |
| **Inclusion Criteria** | Has lost or found an item on campus within the past 12 months. | Operates or interacts with the physical campus lost-and-found desk. |

---

## 4. Test Environment & Technical Setup

Testing must be conducted under controlled, standardized technical environments to eliminate hardware-induced variance:

* **Hardware Viewports Tested:**
  * **Mobile:** iPhone 13/14/15 ($390 \times 844\text{px}$), Samsung Galaxy S22 ($360 \times 800\text{px}$).
  * **Tablet:** iPad Air / mini ($768 \times 1024\text{px}$).
  * **Desktop:** Full HD Monitor ($1920 \times 1080\text{px}$) and MacBook Air ($1440 \times 900\text{px}$).
* **Supported Browsers:** Google Chrome (v120+), Apple Safari (v17+), Mozilla Firefox (v121+), Microsoft Edge (v120+).
* **Local Hosting Setup:** Served via local Web Server (e.g., Live Server extension or GitHub Pages deployment).

---

## 5. Master Test Cases Matrix (T01 – T12)

The testing suite contains **12 structured test cases** covering core workflows, edge cases, responsiveness, state persistence, and security sanitization, mapped directly to baseline System Requirements (FR-01 through FR-16).

| Test ID | User Flow / Feature | Test Steps | Expected Result | Traceability |
| --- | --- | --- | --- | --- |
| **T01** | Landing Page Orientation | Open `index.html`. Read hero section and problem summary. | User identifies system purpose, key stats, and core CTAs within 10 seconds. | FR-01, FR-02 |
| **T02** | Report Submission Flow | Open `form.html`. Fill out required fields (title, category, location, date) and submit. | Form validates input, displays success notification modal, and redirects to records list. | FR-03, FR-10 |
| **T03** | File / Image Upload & Preview | Upload an image file ($< 2\text{MB}$) or provide an image URL on `form.html`. | Thumbnail preview generates correctly without overflowing container layout. | FR-04, FR-11 |
| **T04** | Catalog Search & Filtering | Open `records.html`. Search keyword "Student ID" and select building filter "Main Library". | Catalog grid filters instantly; displays matching records dynamically. | FR-05, FR-06 |
| **T05** | Global Filter Reset | Click the "Clear All Filters" button on `records.html` after active filtering. | Query fields clear, dropdowns reset to default, and full catalog re-renders. | FR-06, FR-11 |
| **T06** | Item Detail & Privacy Masking | Click on a card in `records.html` to open `detail.html`. | Full metadata loads; email/phone contact fields are partially masked (`65XXXXX@au.edu`). | FR-07, FR-15 |
| **T07** | Claim Verification Submission | On `detail.html`, click "Claim Item", fill out verification proof modal, and submit. | System logs claim request, toggles state to `Pending Review`, and notifies user. | FR-08, FR-13 |
| **T08** | Admin Status Management | Access `admin.html`. Locate claim request and change status to "Claimed". | Status badge updates visually to green (`Claimed`); timestamp logs resolution. | FR-08, FR-09 |
| **T09** | Analytics Dashboard Sync | Open `dashboard.html` after updating item statuses in `admin.html`. | Metric counters (Total Items, Claimed Rate %, Pending Queue) recalculate dynamically via `localStorage`. | FR-12, FR-16 |
| **T10** | Mobile Drawer Navigation | Resize viewport to $< 768\text{px}$. Tap mobile menu hamburger icon in navbar. | Drawer smoothly slides out with responsive backdrop blur; links navigate cleanly. | FR-01, FR-14 |
| **T11** | Input Sanitization & XSS Check | Enter HTML/script tags (`<script>alert('xss')</script>`) into form description fields. | Script input is escaped cleanly; rendered on detail page as plain text string. | FR-10, FR-15 |
| **T12** | Local Storage Persistence | Submit a new report, refresh browser completely or open new tab. | Newly created report remains accessible in catalog grid without data loss. | FR-03, FR-16 |

---

## 6. Testing Procedure & Protocol

Testing sessions must strictly follow a 5-step standardized evaluation protocol:

1. **Pre-Test Briefing & Consent (5 Mins):**
   * Welcome participant, outline session purpose, and state that the *software* is being tested, *not* the participant's intelligence.
   * Provide the anonymized consent disclosure form.
2. **Scenario-Based Execution (20 Mins):**
   * Provide task instruction sheets sequentially without demonstrating how to perform actions.
   * Instruct participant to utilize the **Think-Aloud Protocol** (verbalizing what they look for, expect, or find confusing).
3. **Observation & Silent Recording:**
   * Evaluator records task completion metrics, time on task, misclicks, and verbalized frustrations without intervening.
   * *Intervention Rule:* Evaluator assists only if a user experiences total workflow blockage exceeding **120 seconds**.
4. **Post-Task Quantitative Scoring (5 Mins):**
   * Administer Single Ease Question (SEQ) after each task and System Usability Scale (SUS) survey upon session completion.
5. **Debriefing & Qualitative Exit Interview (5 Mins):**
   * Ask open-ended questions regarding confusion points, missing features, and visual hierarchy clarity.

---

## 7. Metrics & Key Performance Indicators (KPIs)

To evaluate system performance objectively, collected data is measured against the following usability benchmarks:

### 7.1 Quantitative Benchmark Targets

| Metric | Measurement Method | Target SLA / Success Threshold |
| --- | --- | --- |
| **Task Completion Rate (TCR)** | $\frac{\text{Successfully Completed Tasks}}{\text{Total Attempted Tasks}} \times 100$ | $\ge 85\%$ across all test cases |
| **Average Time on Task (ToT)** | Total duration from task start to successful completion. | $\le 45\text{s}$ (Simple), $\le 90\text{s}$ (Complex forms) |
| **Error Rate Per Task** | Count of wrong clicks, validation errors, or navigational missteps. | $\le 1.5\text{ errors}$ per task session |
| **System Usability Scale (SUS)** | Standardized 10-item post-test questionnaire score (0–100). | $\ge 75.0$ (Grade A - Above Average Usability) |
| **Task Ease Score (SEQ)** | Single 7-point Likert scale rating after each task completion. | $\ge 5.5 / 7.0$ average score |

### 7.2 Bug Severity Classification Matrix

Observed issues during testing are categorized according to severity to prioritize developer remediation:

| Severity Level | Definition | SLA for Resolution |
| --- | --- | --- |
| **P1 - Critical** | System crash, data loss, total block of core workflow (e.g., cannot submit form, claim button broken). | Immediate fix (Must fix prior to demo) |
| **P2 - High** | Feature functions incorrectly, missing required field, data privacy exposure, layout broken on mobile. | 24 Hours |
| **P3 - Medium** | Minor functional flaw, confusing UI alignment, slow filter response, missing clear confirmation feedback. | 48 Hours |
| **P4 - Low** | Cosmetic flaw, typo in copy, minor hover color inconsistency, non-critical padding issue. | Backlog / Enhancement |

---

## 8. Post-Test Evaluation Questionnaire Framework

Upon completion of all scenario tasks, participants complete this standardized evaluation form:

### Part A: System Usability Scale (SUS) Assessment
*(1 = Strongly Disagree, 5 = Strongly Agree)*

1. I think that I would like to use this lost-and-found system frequently if I lost an item on campus.
2. I found the system unnecessarily complex or overwhelming to navigate.
3. I thought the system was very easy to use and intuitive.
4. I think that I would need the support of a technical person to be able to use this system.
5. I found the various functions in this system (searching, reporting, claiming) were well integrated.
6. I thought there was too much inconsistency in this system.
7. I would imagine that most students would learn to use this system very quickly.
8. I found the system cumbersome or awkward to use on mobile devices.
9. I felt very confident using the system and managing item claims.
10. I needed to learn a lot of things before I could get going with this system.

### Part B: Qualitative Feedback Prompts
* What was the single most confusing step during your test session?
* How confident did you feel regarding the privacy masking of your contact information?
* What feature or search filter would you add to make finding lost items faster?

---

## 9. Defect Logging & Observation Template

Below is the standardized Markdown template used by evaluators to log findings during future testing sessions:

### 9.1 Test Execution Log Template

#### Session ID: TS-2026-001
- **Tester Type:** Target User (Student)
- **Device / Browser:** Mobile (iPhone 14) / Apple Safari
- **Overall SUS Score:** 82.5 / 100

| Task ID | Status | Time Taken | Errors | Key Observations & Qualitative Feedback |
| --- | --- | --- | --- | --- |
| **T01** | Pass | 8s | 0 | Understood purpose immediately from hero title. |
| **T02** | Pass | 42s | 1 | Tried to submit without selecting building; error popup was clear. |
| **T03** | Pass | 18s | 0 | Image uploaded fast; thumbnail rendered cleanly inside box. |
| **T04** | Pass | 25s | 0 | Search filter responsive; building dropdown narrowed results well. |
| **T05** | Pass | 10s | 0 | Reset button cleared all active query fields instantly. |
| **T06** | Pass | 15s | 0 | Noticed masked email (`65XXXXX@au.edu`); felt personal data was safe. |
| **T07** | Pass | 35s | 0 | Claim modal popped up smoothly; requested proof clearly. |
| **T08** | Pass | 20s | 0 | Admin toggle changed status badge color to green (`Claimed`). |
| **T09** | Pass | 12s | 0 | Dashboard metrics updated counters without manual refresh. |
| **T10** | Pass | 8s | 0 | Mobile hamburger menu drawer opened smoothly with visual blur. |
| **T11** | Pass | 14s | 0 | Script tag text displayed safely as plain text string without executing. |
| **T12** | Pass | 10s | 0 | New report persisted in catalog after browser tab refresh. |

---

## 10. Ethical Data Protection & Privacy Compliance

To adhere to responsible academic research standards and privacy frameworks:

* **Data Minimization & Anonymization:** No actual student passwords, national ID numbers, or unmasked personal contact details are stored or logged.
* **Consent & Voluntary Participation:** Participants are informed that participation is entirely voluntary and that they may terminate the test session at any point without penalty.
* **Coursework Scope:** All collected data, feedback notes, and session analytics are used exclusively for ICT105 coursework evaluation, academic grading, and prototype software refinement.
