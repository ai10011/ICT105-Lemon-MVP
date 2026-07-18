# Risk Register

| Risk ID | Category | Risk Description | Affected Feature / Requirement | Severity | Likelihood | Mitigation Action | Owner | GitHub Evidence | Status |
|---|---|---|---|---|---|---|---|---|---|
| R-01 | Privacy | Users may enter personal information when submitting lost item reports. | Lost Item Report Form (FR-03) | High | Medium | Display a privacy notice, request user consent, and collect only necessary information. | Lemon MVP Team | `/docs/consent.md` | Open |
| R-02 | Ethical | Users may submit fake or misleading lost/found reports. | Report Submission (FR-02, FR-03) | Medium | Medium | Add report guidelines and allow administrators to review suspicious reports. | Lemon MVP Team | `/docs/risk-register.md` | Open |
| R-03 | IP | Users may upload copyrighted images or content that they do not own. | Image Upload (FR-04) | Medium | Low | Inform users to upload only original or authorized images. | Lemon MVP Team | `/README.md` | Open |
| R-04 | Security | Unauthorized users may access or modify report information. | Login and Report Management (FR-01, FR-09) | High | Medium | Implement authentication, input validation, and secure access control. | Lemon MVP Team | `/docs/security.md` | In Progress |
| R-05 | Legal | Collecting user information without consent may violate privacy regulations. | User Registration and Feedback Collection | High | Low | Obtain user consent before collecting personal information and explain data usage. | Lemon MVP Team | `/docs/consent.md` | Open |
| R-06 | Data Quality | Reports may contain incomplete, inaccurate, or duplicate information. | Report Form Validation (FR-03, FR-10) | Medium | High | Validate required fields and check for duplicate submissions before saving. | Lemon MVP Team | `/docs/validation.md` | In Progress |

---

# Overall Risk Decision

The Lemon MVP prototype is **safe to continue developing** because the identified risks are manageable and do not prevent further usability testing or prototype evaluation.

Before implementation, the project team should:

1. Add a clear privacy notice and user consent statement.
2. Validate all required form fields to improve data quality.
3. Implement user authentication and access control.
4. Review reports to reduce fake or inappropriate submissions.
5. Ensure users upload only content they own.
6. Follow applicable privacy regulations when collecting and storing user data.

Once these mitigation measures are implemented, the prototype will be more secure, reliable, and suitable for deployment.
