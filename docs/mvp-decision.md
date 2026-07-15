# Lab 08 - MVP Decision

## 1. Decision

- [ ] Continue with the current MVP direction
- [x] Continue with minor revisions
- [ ] Revise major workflow or feature
- [ ] Collect more evidence before implementation
- [ ] Pivot or change the solution direction

## 2. Evidence Supporting the Decision

The validation data from **20 test runs (T001–T020)** provides strong evidence for **continuing with minor revisions**:

- **High Core Validation:** 55% of the tests resulted in a full **"Validated"** signal, while 25% received a **"Partial"** signal, resulting in **80% overall positive validation**.
- **Solid Task Completion:** Achieved an **80.00%** task completion rate (16 out of 20 tests).
- **Strong User Ratings:** Average usefulness score of **4.35/5.0** and an average ease-of-use score of **3.55/5.0** (76.00% interest rate).
- **Targeted Minor Issues:** The remaining **20% "Revise"** signal and four failed tasks (T003, T008, T012, T016) were related to specific UI improvements, including unclear status wording, hidden dashboard navigation, form input friction, and category filter options, rather than fundamental architectural issues.

## 3. Requirements to Keep

| Requirement ID | Reason |
|---|---|
| FR-03 | Reporting lost and found items achieved fast completion times (110–118 seconds) with consistently positive feedback (TU-01, TU-08). |
| FR-10 | Required-field warnings and inline validation were praised by users for their clarity (TU-11). |
| FR-11 | Post-submission confirmation messages provided reassuring feedback after successful submissions (TU-08). |
| FR-06 (Core Search) | The keyword search function enabled users to quickly locate items without relying on external chat groups (TU-05). |

## 4. Requirements to Improve

| Requirement ID | Problem Found | Improvement Needed |
|---|---|---|
| FR-02 | The claim process is difficult to find within the item details page (TU-07 failed task). | Add a clear **"Claim Item"** call-to-action button with a confirmation dialog. |
| FR-06 | Search category labels and location filters lack campus building details (TU-02, TU-09). | Clarify category labels and include campus building names in the dropdown options. |
| FR-07 | The item detail page does not clearly guide users to the next step (TU-07). | Improve the visual hierarchy by highlighting the status and action buttons. |
| FR-08 | Users cannot easily distinguish between approved and pending claim statuses (TU-03 failed task). | Replace vague text with standardized color-coded status badges. |
| FR-09 | The admin dashboard lacks quick filters for report status (TU-06). | Add quick filter buttons for **Pending**, **Approved**, and **Closed** reports. |
| FR-15 | Student phone numbers are displayed publicly on found item details (TU-12). | Hide personal phone numbers from public pages to improve privacy protection. |

## 5. Prototype Changes Before the Next Lab

1. **PII Masking & Privacy Protection:** Hide sensitive user contact information on public pages.
2. **Improve Action Visibility:** Update the `item-detail` template to feature a prominent **"Claim Item"** button.
3. **Refresh Status Indicators:** Apply standardized color-coded badges to status tracking views.
4. **Enhance Search Filters:** Add campus building names to the search and filter dropdown options.
5. **Improve Admin Dashboard:** Add status filter tabs to the administrative dashboard.

## 6. GitHub Issues Created

| Issue Title | Assigned Member | Requirement ID |
|---|---|---|
| Fix PII Privacy Leakage on Item Detail Page | Security / UX Lead | FR-15, FR-07 |
| Add Prominent Claim Item Button | Frontend Developer | FR-02, FR-07 |
| Standardize Claim Status Badges and Tracking Page | UX / Frontend Developer | FR-08 |
| Expand Location Search Filters to Include Building Names | Search Developer | FR-06 |
| Implement Admin Pending/Resolved Quick Filters | Admin Dashboard Developer | FR-09, FR-12 |