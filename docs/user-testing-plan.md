# User Testing Plan

## 1. Testing Objective

The objective of this user testing plan is to evaluate the usability, user flow efficiency, task completion rate, and feature clarity of **Lemon - Smart Campus Lost-and-Found System (LostLink)** prior to the final Lab 14 presentation. Specifically, testing aims to verify whether students and campus staff can seamlessly report lost items, search the catalog, verify item details, protect personal data privacy, and manage administrative claim statuses without confusion.

## 2. Test User Profile

| User Type | Number of Testers | Why This User Type Matters |
| --- | --- | --- |
| Target User (Students) | 15 Testers | Undergraduate university students who frequently commute across high-density facilities (libraries, computer labs, lecture halls) and experience lost/found item friction. |
| Admin / Manager Role (Campus Staff) | 5 Testers | Campus security officers and facility desk clerks responsible for logging physical inventory items, verifying ownership claims, and updating case statuses. |

## 3. Testing Tasks

| Task ID | User Task | Related Requirement | Success Criteria | Observation Focus |
| --- | --- | --- | --- | --- |
| **T01** | Open the landing page (`index.html`) and explain the system purpose. | FR-01, FR-02 | User correctly identifies the central lost-and-found portal value message within 10 seconds. | Hero headline clarity, call-to-action button visibility, and problem context comprehension. |
| **T02** | Submit a new lost/found item report via `form.html`. | FR-03, FR-10, FR-11 | User completes mandatory fields (category, campus building, date) and submits report without external help. | Form label clarity, required vs. optional indicators (photo upload), and validation error feedback. |
| **T03** | Search catalog and filter items by category and campus building (`records.html`). | FR-05, FR-06, FR-14 | User successfully locates a target item (e.g., ID card or calculator at Main Library) using filter dropdowns. | Multi-criteria search speed, filter accordion behavior on mobile screens, and card grid clarity. |
| **T04** | Inspect item detail view and verify contact masking & claim button (`detail.html`). | FR-07, FR-08, FR-15 | User understands item metadata, notices privacy masking (`65XXXXX@au.edu`), and clicks claim item button. | Visual status badge comprehension (`Pending Review`, `Available`, `Claimed`), contact masking clarity, and claim flow. |
| **T05** | Access admin portal (`admin.html`) and update item status to "Claimed". | FR-08, FR-09, FR-14 | Staff tester locates admin management view, verifies ownership claim, and updates report status. | Administrative navigation accessibility, mobile sidebar drawer usability, and status update confirmation. |
| **T06** | Review analytics dashboard summary (`dashboard.html`). | FR-12 | User correctly interprets key metrics (Total Reports, Pending Queue, Resolution Rate %). | Dashboard navigation access from header, card clarity, and metric usefulness. |

## 4. Testing Procedure

1. **Orientation & Context Setup:** Welcome the participant, explain that we are testing the application prototype interface (not the participant), and briefly explain the campus lost-and-found scenario.
2. **Scenario-Based Execution:** Present tasks T01 through T06 sequentially. Instruct the tester to think aloud while navigating.
3. **Non-Intrusive Observation:** Observe user interactions silently without offering assistance unless the tester is blocked for over 2 minutes.
4. **Data & Issue Recording:** Log task completion status (Completed / Partial / Failed), completion time, exact confusion points, and visual UI bugs.
5. **Post-Test Exit Interview:** Administer standardized feedback scoring (1–5 scale for ease of use and usefulness) and gather open-ended improvement suggestions.

## 5. Ethical & Responsible Data Protection

- **Data Minimization:** No actual personal passwords, national ID numbers, or real contact numbers will be collected during testing.
- **Privacy Disclosure:** All student email addresses shown in test cases are masked (`65XXXXX@au.edu`).
- **Consent & Usage:** Participants are informed that testing data is collected strictly for ICT105 coursework evaluation and prototype refinement.
