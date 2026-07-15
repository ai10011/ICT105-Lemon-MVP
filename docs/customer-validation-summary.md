# Lab 08 - Customer Validation Summary

## 1. Project Title
Smart Campus Lost-and-Found System (Lemon MVP)

## 2. Prototype Tested

- **Prototype version:** v1
- **Prototype link or screenshot location:** `prototype/project/` (`index.html`, `dashboard.html`, `form.html`, `detail.html`, `admin.html`) & `screenshots/project-dashboard.png`
- **Main task tested:** Submitting lost item reports, searching found items, viewing item details, checking claim status, updating item status, and reviewing dashboard summaries.
- **Related requirements from `system-requirements.md`:** FR-03, FR-06, FR-07, FR-08, FR-09, FR-10, FR-12

## 3. Test Users
| Test User ID | User Role | Why this user is relevant |
|---|---|---|
| U001 - U005, U007 - U009, U011 - U014, U016 - U020 | Student | Primary target users who lose, search for, or report items on campus. |
| U006, U010, U015 | Staff | Administrative users who process pending reports, update item statuses, and oversee operations. |

## 4. Validation Method

- **Testing method:** Scenario-based usability testing across mobile, laptop, and desktop devices.
- **Date/time:** July 20 – 24, 2026
- **Location or online platform:** Campus usability testing sessions and mobile web prototype environment.
- **Number of testers:** 20 Test Users (T001 to T020)
- **Data collected:** Task completion status, completion time (seconds), ease of use score (1-5), usefulness score (1-5), confusion points, interest level (1-5), and qualitative feedback notes.

## 5. Summary of Results
| Metric | Result | Interpretation |
|---|---:|---|
| Total test users | 20 | Complete sample size evaluating core MVP user flows. |
| Task success rate | 80.00% | 16 of 20 tasks successfully completed, confirming strong core usability. |
| Average feedback score | 3.55 / 5.0 | Solid ease of use rating with specific minor UI friction areas identified. |
| Average interest level | 3.80 / 5.0 | 76.00% positive interest rate, showing clear demand for the solution. |
| Most common confusion point | Dashboard location & Status wording | Highlights primary screens requiring visual badge and navigation updates. |

## 6. Key User Comments

- **Report Submission (FR-03, FR-10)**: *"Could submit report easily"* and *"Submission confirmation was helpful"*, though testers noted *"Too many required fields"* and requested stronger input hints.
- **Search & Detail View (FR-06, FR-07)**: *"Search worked fast on mobile"* and *"Photo and description helped"*, but testers expressed that they *"Expected category filter"* options.
- **Status Tracking (FR-08)**: *"Could not understand Pending vs Claimed"* and *"Status exists but needs clearer explanation"*.
- **Dashboard Access (FR-12)**: *"Did not know where to find dashboard"* initially, though it was *"Useful after instruction"*.
- **Admin Workflow (FR-09)**: *"Admin page was useful but button was hard to find"*.

## 7. Affected Requirements
| Requirement ID | Evidence Found | Required Prototype Improvement |
|---|---|---|
| FR-03 | T001 & T011 passed quickly (95s, 88s) with positive submission feedback. | Keep lost item submission flow while streamlining form fields. |
| FR-06 | T002 & T012 feedback; search label unclear and category filter missing (160s). | Clarify search labels and add multi-select category filter pills. |
| FR-07 | T004, T009, T018 passed with top ratings (5/5); photos and details praised. | Maintain clear item detail layout and card visual hierarchy. |
| FR-08 | T003 failed (150s) & T013/T020 requested clearer status explanations. | Add standardized visual status badges ("Pending Review", "Approved", "Collected"). |
| FR-09 | T006 & T010 feedback; staff noted update button was hard to find. | Increase visual prominence of admin status update buttons. |
| FR-10 | T016 failed (200s) & T005 noted required fields feel overwhelming. | Reduce mandatory form fields and add helper tooltip hints. |
| FR-12 | T008 failed (180s) & T014/T019 noted dashboard summary location was unclear. | Add direct navigation link for dashboard summary in main top header bar. |

## 8. Conclusion

The current MVP direction is **mostly validated** (55% fully validated, 25% partially validated). The team will **move forward with minor revisions** to simplify the form fields, add visual status badges, improve search filters, and enhance the visibility of admin action buttons before the full campus rollout.

