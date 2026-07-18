# Updated Requirements Note

## Purpose
Use this file only if Lab 09 review requires a change to system-requirements.md.

| Requirement ID | Original Requirement | Proposed Update | Reason for Change | Supporting Evidence | GitHub Issue/Commit | Approved by Team? |
|---|---|---|---|---|---|---|
| FR-03 | Users can submit a lost or found item report. | Users must provide all required information and accept the privacy consent statement before submitting a report. | Lab 09 privacy review identified the need for explicit user consent before collecting personal data. | User Consent Statement; Privacy Review | Issue #12 / Commit `abc1234` | Yes |
| FR-05 | Users can upload images of lost or found items. | The system only accepts image files (JPG, PNG, JPEG) up to 5 MB and displays a validation message for invalid uploads. | Improve usability and prevent unsupported file uploads. | Usability Testing Results | Issue #13 / Commit `def5678` | Yes |
| FR-07 | Users can contact the owner or finder. | The system hides users' personal contact information and provides communication through the platform only. | Reduce privacy risks and protect users' personal information. | Privacy Risk Assessment | Issue #14 / Commit `ghi9012` | Yes |

## Rule
Do not silently change system requirements. Every change must be justified, documented, and traceable.
