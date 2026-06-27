# Lab 04 - User Stories and Acceptance Criteria

## User Story Format Using in This File
As a [user role], I want to [goal/action], so that [benefit/value].

## User Stories

| Story ID | Role | User Story | Related Requirement | Priority | Acceptance Criteria | Demo Evidence |
|---|---|---|---|---|---|---|
| US-01 | Student | As a student, I want to report a lost item, so that other users and staff can help me recover it. | FR-01 | Must | **Given** I am on the report page, **when** I submit the required information, **then** the lost-item report is successfully created and displayed in the system. | Screenshot of submitted lost-item report |
| US-02 | Student | As a student, I want to report a found item, so that the owner has a better chance of recovering it. | FR-02 | Must | **Given** I found an item, **when** I submit the found-item details, **then** the report is saved and visible to users. | Screenshot of submitted found-item report |
| US-03 | Student | As a student, I want to search and filter lost or found items, so that I can quickly locate items matching my description. | FR-03 | Must | **Given** there are item reports, **when** I search or apply filters, **then** only matching results are displayed. | Screenshot of search/filter results |
| US-04 | Student | As a student, I want to upload a photo of the item, so that it is easier to identify. | FR-04 | Should | **Given** I am creating a report, **when** I upload an image, **then** the image is displayed with the report. | Screenshot showing uploaded photo |
| US-05 | Student | As a student, I want to view the status of my reported item, so that I know whether it has been found, claimed, or returned. | FR-05 | Must | **Given** I have submitted a report, **when** I view its details, **then** the current item status is displayed. | Screenshot showing item status |
| US-06 | Security/Admin Staff | As a security/admin staff member, I want to update the status of reported items, so that students receive accurate information. | FR-06 | Must | **Given** I have staff access, **when** I update an item's status, **then** the new status is saved and visible to users. | Screenshot of status update |

## Our Acceptance Criteria Checklist
The acceptance criterion should be:
- testable;
- observable in the final prototype;
- connected to a requirement;
- connected to user evidence;
- not too vague.

## Rejected / Future User Stories

| Story ID | Reason for Postponing | Future Condition |
|---|---|---|
| US-07 | In-app notifications require additional development beyond the MVP scope. | Implement after the core reporting and search features are completed. |
| US-08 | Anonymous messaging between finder and owner requires additional privacy and security design. | Implement after secure user authentication and communication features are available. |
