# Lab 08 - Analytics Insights

## 1. Analytics Question
What did users do, say, and prove when testing the MVP direction?

## 2. Metrics Calculated
| Metric | Formula / Method | Result |
|---|---|---|
| Total test users | Count testers (T001 - T020 dataset) | 20 Testers (T001 - T020) |
| Completed tasks | Count Task_Completed = Yes | 16 / 20 (80.00%) |
| Task success rate | Completed tasks / total testers | 80.00% |
| Average ease of use score | Average of EaseOfUseScore (1-5) | 3.55 / 5.0 (3.5 benchmark) |
| Average usefulness score | Average of UsefulnessScore (1-5) | 4.35 / 5.0 |
| Average interest level | Average of InterestLevel (1-5) | 3.80 / 5.0 (76.00%) |
| Confusion points | Count repeated confusion categories | None (10), Dashboard location (2), Required fields (2), Status wording (2) |

## 3. Findings

1. **High Core Task Efficiency and Overall Satisfaction**: Basic workflows like submitting lost item reports and viewing item details achieved high completion rates (80.00%), with strong usefulness ratings (4.35/5.0). Testers noted that detail screens were clear (T004, T009, T018) and search worked fast on mobile (T007, T017).
2. **Issues in Status Tracking & Finding the Dashboard**: Testers encountered confusion when tracking item status (T003 failed at 150s with status wording confusion; T013 requested clearer status explanations) and locating the dashboard summary widget (T008 failed at 180s; T014 required instruction).
3. **Too Many Required Fields and Category Filters**: Users flagged friction with mandatory form inputs (T016 failed at 200s due to excessive required fields; T005 noted required fields need stronger hints). Additionally, category filtering issues were reported during search tasks (T002, T012).

## 4. Interpretation
The validation metrics strongly confirm that the core value proposition (reporting, searching, and viewing lost/found items on campus) is sound and validated (55% fully validated, 25% partial signal). However, the prototype requires minor improvements before full rollout. The 4 failure cases (T003, T008, T012, T016) highlight specific pain points: unclear status words ("Pending" vs "Claimed"), hidden dashboard locations, strict input field requirements, and missing search category filter options. Streamlining these elements will improve completion times and push the task success rate past 90%.

## 5. Requirements Affected
| Requirement ID | Evidence | Action Needed |
|---|---|---|
| FR-03 | T001, T011 passed (95s, 88s); confirmation feedback appreciated | Retain core lost item report workflow while streamlining submission steps. |
| FR-06 | T002 & T012 feedback; search label unclear and missing category filters | Clarify search labels and implement explicit category multi-select filtering options. |
| FR-07 | T004, T009, T018 passed with top scores (5/5); photos and descriptions helped | Retain item detail layout structure and visual card design. |
| FR-08 | T003 failed (150s) & T013/T020 feedback; status wording confusion | Replace text status labels with standardized, color-coded badges ("Pending Review", "Approved", "Collected"). |
| FR-09 | T006 & T010 feedback; admin button hard to find on staff workflow | Increase visual prominence of admin status update action buttons. |
| FR-10 | T005 & T016 failed/partial (200s); required fields feel overwhelming | Reduce non-essential required fields and provide inline input guidance tooltips. |
| FR-12 | T008 failed (180s) & T014/T019 feedback; dashboard summary hard to find | Move dashboard summary overview widget to the main navigation menu. |

## 6. Next Prototype Improvement

1. **Streamline Mandatory Form Inputs (FR-10)**: Reduce required input fields and add helper tooltips to prevent form abandonment (T016).
2. **Clarify Status Indicators (FR-08)**: Deploy visual color-coded badges for status tracking views to eliminate confusion between pending and claimed items.
3. **Reposition Dashboard Access (FR-12)**: Add a direct navigation link for the summary dashboard in the main header bar.
4. **Refine Search Filters (FR-06)**: Upgrade search UI with explicit category filter pills and clearer category labels.
5. **Promote Admin Action CTA (FR-09)**: Enhance button visibility for staff members performing item status updates.

