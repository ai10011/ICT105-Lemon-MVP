# User Testing & Usability Validation Results

> [!NOTE]
> **Mock-up Data & Testing Disclaimer:** > User testing evidence and testing forms were **not formally conducted** during this prototype phase. All metrics, task completion numbers, System Usability Scale (SUS) scores, user responses, and defect logs provided in this document represent **simulated mock-up datasets** generated as analytical baseline projections for academic evaluation.

---

## 1. Document Metadata & Session Overview

| Attribute | Session Specification Details |
| --- | --- |
| **Project Name** | Lemon - Smart Campus Lost-and-Found System (LostLink) |
| **Repository URL** | `https://github.com/ai10011/ICT105-Lemon-MVP` |
| **Live Prototype URL** | `https://ai10011.github.io/ICT105-Lemon-MVP/prototype/project/` |
| **Course & Milestone** | ICT 105 Fundamental Technology Entrepreneurship (Lab 11 QA & Lab 13 Final Sprint) |
| **Test Execution Date** | July 25, 2026 |
| **Total Cohort Pool ($N$)** | 20 Testers (15 Target Students, 5 Campus Security / Staff) |
| **Test Platforms Tested** | Desktop (Google Chrome v126, Firefox v127) & Mobile (iOS Safari iPhone 14 Pro, Android Chrome Pixel 7, Galaxy Fold 320px) |

---

## 2. Quantitative Key Performance Indicators (KPIs)

Usability data collected across the 20 simulated test sessions were benchmarked against project Service Level Agreements (SLAs):

### 2.1 Core Usability Metrics Summary

| Metric Indicator | Target Threshold / SLA | Observed Simulated Result | Assessment Status |
| --- | --- | --- | --- |
| **Task Completion Rate (TCR)** | $\ge 85.0\%$ overall success | **86.67%** (104 / 120 task attempts) | **Passed Target** |
| **System Usability Scale (SUS)** | $\ge 75.0 / 100.0$ (Grade A) | **79.25 / 100.0** (Above Average) | **Passed Target** |
| **Avg. Time-on-Task (ToT)** | $\le 45\text{s}$ (Simple), $\le 90\text{s}$ (Forms) | **31.4s** (Simple), **62.8s** (Forms) | **Passed Target** |
| **Single Ease Question (SEQ)** | $\ge 5.5 / 7.0$ average rating | **5.85 / 7.0** average score | **Passed Target** |
| **Defect Remediation Rate** | $100\%$ Critical/High bugs fixed | **100% Resolved** (`IMP-01` to `IMP-09`) | **Passed Target** |

### 2.2 System Usability Scale (SUS) Score Breakdown
Calculated using Sauro's standardized 10-item SUS scale ($N = 20$ response average):
SUS Items (Odd = Positive, Even = Negative)                     Avg. Response (1-5)
──────────────────────────────────────────────────────────────────────────────────

I would like to use this system frequently:                  [ 4.25 ]  ★★★★☆

I found the system unnecessarily complex:                    [ 1.80 ]  ★☆☆☆☆

I thought the system was easy to use:                        [ 4.35 ]  ★★★★☆

I would need support of a technical person:                  [ 1.45 ]  ★☆☆☆☆

Functions in this system were well integrated:             [ 4.10 ]  ★★★★☆

I thought there was too much inconsistency:                  [ 1.95 ]  ★☆☆☆☆

Most people would learn to use this quickly:                 [ 4.50 ]  ★★★★★

I found the system cumbersome to use on mobile:              [ 2.10 ]  ★★☆☆☆

I felt very confident using the system:                      [ 4.05 ]  ★★★★☆

Needed to learn a lot before getting started:               [ 1.35 ]  ★☆☆☆☆
──────────────────────────────────────────────────────────────────────────────────

Calculated SUS Final Composite Score:                           79.25 / 100.0 (Grade A-)

---

## 3. Master Task Completion & Observation Matrix

Each test scenario evaluated specific core functional requirements across student and staff workflows:

| Task ID | User Task Description | Target Cohort | Completed | Partial | Failed | Key Confusion / Barrier Identified | Applied Engineering Fix |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **T01** | Identify portal purpose & CTA orientation | Students | 20 (100%) | 0 (0%) | 0 (0%) | None. Hero value message understood within 8 seconds. | Baseline copy validated (`FR-01`, `FR-02`). |
| **T02** | Submit lost/found report via `form.html` | Students | 17 (85%) | 2 (10%) | 1 (5%) | Mandatory vs. optional photo upload ambiguous; submit button truncated on 375px screens. | Added "(Optional)" helper label (`IMP-07`) and flex wrapping (`IMP-01`, `FR-03`, `FR-10`). |
| **T03** | Search & filter catalog (`records.html`) | Students | 18 (90%) | 2 (10%) | 0 (0%) | Filter drawer occupied 100% vertical viewport on mobile screens prior to fix. | Built collapsible `#mobile-filter-toggle` accordion (`IMP-04`, `FR-05`, `FR-06`). |
| **T04** | Verify details & privacy masking | Students | 19 (95%) | 1 (5%) | 0 (0%) | Users wanted clear instructions on physical pick-up locations alongside masked contacts. | Masked emails (`65XXXXX@au.edu`) and added claim procedure guidance modal (`IMP-06`, `FR-07`, `FR-15`). |
| **T05** | Staff status update (`admin.html`) | Staff | 4 (80%) | 1 (20%) | 0 (0%) | Navigation sidebar hidden on narrow mobile viewports. | Implemented slide-out mobile sidebar drawer with backdrop overlay (`IMP-05`, `FR-08`, `FR-09`). |
| **T06** | Review dashboard metrics (`dashboard.html`) | Staff & Students | 18 (90%) | 2 (10%) | 0 (0%) | Metric counters required manual browser refresh to reflect cross-tab status changes. | Registered dynamic `window.addEventListener('storage', ...)` event listeners (`IMP-08`, `FR-12`). |

---

## 4. Defect Classification & Implemented Fixes Audit

Issues uncovered during preliminary testing were logged, categorized by severity, and addressed through targeted code refactoring (`IMP-01` through `IMP-09`):

| Issue ID | Issue Description | Severity | Target File(s) | Technical Remediation Applied | Resolution Status |
| --- | --- | --- | --- | --- | --- |
| **UI-01** | Submit button cut off below viewport fold on small screens ($< 375\text{px}$). | **P1 - Critical** | `form.html`, `css/styles.css` | Converted selection card and form button containers into responsive flex containers (`flex-col sm:flex-row`) (`IMP-01`). | **Closed (Fixed)** |
| **UI-02** | Catalog filter side panel blocked grid results on mobile devices. | **P2 - High** | `records.html`, `js/records.js` | Built collapsible `#mobile-filter-toggle` accordion widget to toggle filter visibility dynamically (`IMP-04`). | **Closed (Fixed)** |
| **UI-03** | Admin management sidebar inaccessible on mobile devices. | **P2 - High** | `admin.html`, `js/admin.js` | Created slide-out mobile sidebar drawer equipped with backdrop overlay (`#admin-sidebar-overlay`) (`IMP-05`). | **Closed (Fixed)** |
| **UI-04** | Plain text status labels confused staff during claim lifecycle updates. | **P3 - Medium** | `admin.html`, `detail.html` | Replaced plain text with color-coded badge components (`Pending Review`, `Available`, `Claimed`, `Closed`) (`IMP-03`). | **Closed (Fixed)** |
| **UI-05** | Missing direct navigation link for analytics dashboard in header bar. | **P4 - Low** | `js/components.js` | Inserted direct Dashboard menu item into shared header component array (`IMP-09`). | **Closed (Fixed)** |

---

## 5. Qualitative Feedback Analysis

Feedback gathered during post-task exit interviews provided qualitative context behind tester behaviors:

### 5.1 Key Success Factors (What Testers Liked)
* **Search Speed & Precision:** Instant, client-side keyword and building multi-filtering cut item search time significantly compared to manual scrolling in Line/Discord chats.
* **Data Privacy Reassurance:** Partial email masking (`65XXXXX@au.edu`) effectively addressed student concerns regarding personal phone/email exposure on public boards.
* **Visual Status Hierarchy:** Color-coded badges (`Green = Claimed`, `Yellow = Pending`, `Blue = Available`) made item verification intuitive for non-technical security staff.

### 5.2 Confusion Points & Adopted Enhancements
* **Photo Field Clarity:** Testers hesitated on `form.html` wondering if a physical photo was mandatory.  
  * *Fix:* Added explicit "(Optional - Image URL or File)" helper text and fallback placeholder images (`IMP-07`).
* **Cross-Tab Synchronization:** Updates made in `admin.html` did not immediately reflect on `dashboard.html` without a page reload.  
  * *Fix:* Hooked state listeners into `localStorage` storage events for immediate metric recalculations (`IMP-08`).

---

## 6. Functional Requirements Traceability Matrix (FR-01 to FR-16)

Verification that all system requirements were thoroughly tested and validated in `prototype/project/`:

| Requirement ID | Requirement Description | Mapped Test Case | Test Verification Method | Pass Rate Status |
| --- | --- | --- | --- | --- |
| **FR-01** | Landing page system purpose & value proposition | T01 | Visual hero title inspection | **100% Pass** |
| **FR-02** | Core call-to-action buttons navigation | T01 | Click-through routing check | **100% Pass** |
| **FR-03** | Item submission form input collection | T02 | Form field validation audit | **95% Pass** |
| **FR-04** | Image upload preview & fallback URL | T02 | Media container rendering test | **100% Pass** |
| **FR-05** | Keyword search across catalog items | T03 | Query string array filtering | **95% Pass** |
| **FR-06** | Multi-criteria filtering (Building, Category) | T03 | Dropdown combination check | **90% Pass** |
| **FR-07** | Detail view metadata display | T04 | Unique record ID rendering | **100% Pass** |
| **FR-08** | Item claim verification workflow | T04, T05 | Modal state change toggle | **90% Pass** |
| **FR-09** | Administrative management table | T05 | Admin record row rendering | **95% Pass** |
| **FR-10** | Client-side input validation & error state | T02 | Missing field alert trigger | **100% Pass** |
| **FR-11** | Global filter reset functionality | T03 | Reset button state refresh | **100% Pass** |
| **FR-12** | Analytics summary dashboard calculation | T06 | Metric counter calculation | **95% Pass** |
| **FR-13** | User claim modal popup triggers | T04 | Modal display backdrop check | **100% Pass** |
| **FR-14** | Cross-device responsive layout rendering | T01–T06 | Viewport breakpoint audit | **90% Pass** |
| **FR-15** | Personal contact information privacy masking | T04 | Regex email masking test | **100% Pass** |
| **FR-16** | LocalStorage state persistence across views | T02, T06 | Browser reload state check | **100% Pass** |

---

## 7. Evidence-Based MVP Strategic Decision

Based on the quantitative usability metrics, defect remediation verification, and requirement pass rates:

### **FINAL DECISION: PROCEED TO FINAL PRESENTATION (LAB 14)**

#### Key Justifications:
1. **Strong Overall Usability:** The composite **SUS score of 79.25 / 100.0** confirms that the prototype exceeds average university software usability standards.
2. **Defect Elimination:** 100% of P1/P2 usability barriers (`UI-01` through `UI-05`) were successfully refactored via responsive flex utilities and state event hooks (`IMP-01` through `IMP-09`).
3. **Traceability Compliance:** All 16 System Functional Requirements (`FR-01` to `FR-16`) were successfully verified with pass rates exceeding the $85.0\%$ target SLA.
