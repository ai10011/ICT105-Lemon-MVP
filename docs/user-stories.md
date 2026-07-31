# Lab 04 - User Stories and Acceptance Criteria

## User Story Format Used in This File
`As a [user role], I want to [goal/action], so that [benefit/value].`

---

## User Stories Traceability Matrix

| Story ID | Role | User Story | Related Requirement ID | Related Feature ID | Priority | Acceptance Criteria | Demo Evidence |
|---|---|---|---|---|---|---|---|
| **US-01** | Student | As a student, I want to report a lost item, so that other users and staff can help me recover it. | `FR-03`, `FR-04`, `FR-10`, `FR-15` | **F01** | Must | **Given** I am on the report page (`form.html`), **when** I submit the required item information and consent, **then** the lost-item report is successfully created and displayed in the system. | Screenshot of submitted lost-item report (`screenshots/input-form.png`) |
| **US-02** | Student | As a student, I want to report a found item, so that the owner has a better chance of recovering it. | `FR-03`, `FR-04`, `FR-10`, `FR-15` | **F02** | Must | **Given** I found an item, **when** I submit the found-item details and location, **then** the report is saved to data storage and visible in the directory. | Screenshot of submitted found-item report (`screenshots/input-form.png`) |
| **US-03** | Student | As a student, I want to search and filter lost or found items, so that I can quickly locate items matching my description. | `FR-05`, `FR-06`, `FR-14` | **F03** | Must | **Given** there are item reports in the system, **when** I search by keyword or filter by category/building, **then** only matching results are displayed in real-time. | Screenshot of search/filter results (`screenshots/record-list.png`) |
| **US-04** | Student | As a student, I want to upload a photo of the item, so that it is easier to identify. | `FR-03`, `FR-07`, `FR-15` | **F05** | Should | **Given** I am creating a report, **when** I attach an image preview adhering to privacy guidelines (no faces), **then** the photo is rendered on the item detail view. | Screenshot showing uploaded photo (`screenshots/detail-view.png`) |
| **US-05** | Student | As a student, I want to view the status of my reported item, so that I know whether it has been found, claimed, or returned. | `FR-07`, `FR-08`, `FR-12` | **F04** | Must | **Given** I have submitted a report, **when** I view its detail page or dashboard, **then** the current color-coded status badge is displayed. | Screenshot showing item status badge (`screenshots/detail-view.png`) |
| **US-06** | Security / Admin Staff | As a security/admin staff member, I want to update the status of reported items, so that students receive accurate information. | `FR-08`, `FR-09`, `FR-11` | **F04** | Must | **Given** I have administrative access, **when** I update an item's status on the admin page, **then** the new status is saved and toast feedback confirms the update. | Screenshot of admin status update (`screenshots/admin-view.png`) |

---

## Acceptance Criteria Checklist Guidelines
Each acceptance criterion in this project must be:
- **Testable:** Can be verified empirically through interactive user actions.
- **Observable:** Visually verifiable on final prototype screens (`prototype/project/`).
- **Traceable:** Explicitly connected to a System Requirement (`FR-01` to `FR-16`) and Feature ID (`F01` to `F10`).
- **Evidenced:** Backed by user discovery findings and validation feedback.

---

## Postponed / Future Scope User Stories

| Story ID | User Story Description | Related Requirement | Priority | Reason for Postponing | Future Condition |
|---|---|---|---|---|---|
| **US-07** | As a user, I want to receive automated notifications when a matching item is found. | `FR-08` | Could | In-app push/email notifications require additional backend infrastructure beyond MVP scope. | Implement after core search and reporting workflows are validated in production. |
| **US-08** | As a finder/owner, I want to send anonymous messages to arrange item return. | `FR-15` | Could | Direct messaging requires end-to-end encryption and user authentication privacy design. | Implement after secure user account authentication (`F06`) is deployed. |
