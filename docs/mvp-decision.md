# Lab 08 - MVP Decision

## 1. Decision

- [ ] Continue with the current MVP direction
- [x] Continue with minor revisions
- [ ] Revise major workflow or feature
- [ ] Collect more evidence before implementation
- [ ] Pivot or change the solution direction

## 2. Evidence Supporting the Decision
The validation data (20 test runs: T001 to T020) provides strong empirical justification for **continuing with minor revisions**:
- **High Core Validation**: 55% of tests resulted in a full "Validated" signal and 25% "Partial" signal (80% positive directional alignment combined).
- **Solid Task Completion**: Achieved an 80.00% task completion rate (16/20 overall tests).
- **Strong User Ratings**: Average usefulness rating of 4.35 out of 5.0 and ease of use score of 3.55 out of 5.0 (76.00% Interest Rate).
- **Targeted Minor Failures**: The 20% "Revise" signal and 4 failed tasks (T003, T008, T012, T016) are confined to specific UI polish areas (unclear status wording, hidden dashboard link, form input friction, category filter options) rather than core architectural flaws.

## 3. Requirements to Keep
| Requirement ID | Reason |
|---|---|
| FR-03 | Reporting lost/found items achieved high completion speeds (110s - 118s) with unanimous positive feedback (TU-01, TU-08). |
| FR-10 | Required-field warnings and inline validation were explicitly praised by users for clarity (TU-11). |
| FR-11 | Post-submission confirmation messages provided reassuring user feedback (TU-08). |
| FR-06 (Core Search) | Search by keyword function allows instant discovery without relying on external chat groups (TU-05). |

## 4. Requirements to Improve
| Requirement ID | Problem Found | Improvement Needed |
|---|---|---|
| FR-02 | Claim process is hard to find within item details (TU-07 failed task). | Insert clear call-to-action "Claim Item" button with modal confirmation flow. |
| FR-06 | Search category labels and location filters lack building details (TU-02, TU-09). | Clarify filter category naming and add campus building names to dropdown options. |
| FR-07 | Item detail view does not guide next steps effectively (TU-07). | Reorganize detail view visual hierarchy to highlight status and action buttons. |
| FR-08 | Users cannot easily tell if claim status is approved or pending (TU-03 failed task). | Replace vague text with standardized visual status indicators (badges). |
| FR-09 | Admin dashboard lacks pending report filter toggles (TU-06). | Add quick filter buttons (Pending / Approved / Closed) to admin table. |
| FR-15 | Student personal phone numbers displayed publicly on found item details (TU-12). | Hide phone numbers from public view to protect privacy. |

## 5. Prototype Changes Before Next Lab
1. **PII Masking & Privacy Guardrail**: Hide sensitive user contact details on public pages.
2. **UI Action Clarity**: Update `item-detail` template to feature a primary "Claim Item" button.
3. **Status Indicator Refresh**: Apply standardized, color-coded badges to status tracking views.
4. **Enhanced Search Filters**: Integrate campus building dropdowns into search/filter inputs.
5. **Admin Filter Bar**: Incorporate status tab toggles on the administrative dashboard view.

## 6. GitHub Issues Created
| Issue Title | Assigned Member | Requirement ID |
|---|---|---|
| Fix PII Privacy Leakage on Item Detail Page | Security / UX Lead | FR-15, FR-07 |
| Add Prominent Claim Call-To-Action Button | Frontend Developer | FR-02, FR-07 |
| Standardize Claim Status Badges and Tracking Page | UX / Frontend Developer | FR-08 |
| Expand Location Search Filters to Include Building Names | Search Developer | FR-06 |
| Implement Admin Pending/Resolved Quick Filters | Admin Dashboard Dev | FR-09, FR-12 |

