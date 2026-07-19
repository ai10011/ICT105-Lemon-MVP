# Updated Requirements Note

## Purpose
Document requirement updates resulting from security, privacy, and usability reviews for the **Lemon - Smart Campus Lost-and-Found System**.

| Requirement ID | Original Requirement | Proposed Update | Reason for Change | Supporting Evidence | GitHub Issue/Commit | Approved by Team? |
|---|---|---|---|---|---|---|
| FR-03 | User input or data submission feature. | Users must provide required item details, follow photo guidelines (no human faces), and accept the user consent notice before submitting. | Privacy review identified potential exposure of personal background info in photos and contact details. | `docs/user-consent-statement.md`, `docs/privacy-and-data-protection.md` | Issue #62 / Issue #64 | Yes |
| FR-06 | Search, filter, or category function. | Search filters must include specific campus building dropdowns and visual status badges. | Usability testing showed users struggled with vague location filters, risking search abandonment. | Usability feedback in Lab 08, `data/validation-results.csv` | Issue #64 | Yes |
| FR-09 | Admin or manager function. | Admin status updates (Available, Claimed, In Review) are restricted to `admin.html` with simulated role authentication. | Security risk assessment identified unauthorized status modification as a high vulnerability. | `docs/security-risk-check.md`, `data/security-review-checklist.csv` | Issue #62 / Issue #64 | Yes |
| FR-10 | Basic validation and error prevention. | Reporting form must validate mandatory inputs (category, location, date) and display visual feedback before saving. | Lab 08 feedback indicated completion delays caused by ambiguous required fields. | `docs/legal-ethical-checklist.md` | Issue #62 / Issue #64 | Yes |

## Rule
Do not silently change system requirements. Every change must be justified, documented, and traceable.
