# Risk Register

## Project Title
**Lemon** - Smart Campus Lost-and-Found System

| Risk ID | Category | Risk Description | Affected Feature / Requirement | Severity | Likelihood | Mitigation Action | Owner | GitHub Evidence | Status |
|---|---|---|---|---|---|---|---|---|---|
| R-01 | Privacy | Reporter email or contact info may be visible in public item list. | FR-05 View records | High | Medium | Show only item category and status publicly; restrict contact details to admin view. | Tin May Lin (UX Lead) | Issue `#62` (`docs/privacy-and-data-protection.md`) | Open |
| R-02 | Security | Unauthenticated users may change item status in prototype demo. | FR-09 Admin function | High | Medium | Separate admin dashboard and simulate role-based authorization check in localStorage. | Phoochit Jantakam (Doc Lead) | Issue `#64` (`docs/security-risk-check.md`) | Open |
| R-03 | IP | Third-party icons or font assets used without clear licensing records. | UI consistency (FR-13) | Medium | Medium | Establish third-party asset register and verify open-source licenses. | Kyaw Ye Lin (Product Lead) | Issue `#65` (`docs/ip-and-third-party-assets.md`) | In Progress |
| R-04 | Ethical | Prototype landing page messaging may imply guaranteed item recovery rate. | FR-01 Homepage | Medium | Low | Rephrase messaging to emphasize centralized search/reporting rather than guaranteed recovery. | Kyaw Ye Lin (Product Lead) | Issue `#65` (`docs/legal-ethical-checklist.md`) | Closed |
| R-05 | Data Quality | Duplicate item reports for the same lost item may confuse users and staff. | FR-06 Search & Filter | Medium | Medium | Add category/location filters and allow admin users to merge or flag duplicate entries. | Phollapat Rodchue (Tech Lead) | Issue `#63` (`data/data-inventory.csv`) | Open |
| R-06 | Privacy | Uploaded item photos may accidentally reveal student faces or background personal info. | FR-03 Data Submission | High | Low | Provide photo upload guidelines (item-only closeups) and sanitize sample demo images. | Tin May Lin (UX Lead) | Issue `#62` (`docs/privacy-and-data-protection.md`) | Open |
| R-07 | Operational | High search time leading students to abandon search within 24 hours if location is too vague. | FR-06 Search & Filter | High | Medium | Include specific campus building dropdowns and visual status badges to accelerate search. | Phoochit Jantakam (Doc Lead) | Issue `#64` (`docs/updated-requirements-note.md`) | In Progress |

---

## Overall Risk Decision

The Lemon MVP prototype is **safe to continue developing** because identified risks are manageable and actively mitigated through frontend data masking, role isolation, and clear user disclaimers.

Before final prototype evaluation, the project team will:

1. Display the explicit user consent statement (`docs/user-consent-statement.md`) on report submission forms.
2. Validate required form fields (`FR-10`) to ensure data accuracy.
3. Restrict item status modifications (`FR-08`, `FR-09`) to administrative views (`admin.html`).
4. Maintain third-party asset licensing tracking (`data/third-party-assets-register.csv`).
