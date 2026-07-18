# Basic Security Risk Check

## Project Title
**Lemon** - Smart Campus Lost-and-Found System

| Area | Risk Question | Current Status | Risk Level | Mitigation | Owner |
|---|---|---|---|---|---|
| **Form input** | Can incomplete or invalid data be submitted? | Yes, client-side validation is missing on some text inputs in form.html. | **Medium** | Implement standard HTML5 required attributes, category dropdown validation, and character limits. | Lemon MVP Team |
| **Admin function** | Can normal users access admin actions? | Prototype demo relies on client-side JS; admin functions require role segregation. | **High** | Isolate admin features in `admin.html` and simulate role-based authorization check in `components.js`. | Lemon MVP Team |
| **Data display** | Is private information visible to everyone? | Reporter contact details could be exposed on public item listings. | **High** | Restrict public records view (`records.html`) to item category, location, and status badges; keep email in admin view. | Lemon MVP Team |
| **Status update** | Can records be edited without control? | Item status updates could be triggered without administrative audit tracking. | **Medium** | Enforce status updates only through `admin.html` forms and log status changes with timestamps in localStorage. | Lemon MVP Team |
| **Public links** | Does a public link expose data that should be private? | Item detail URLs (`detail.html?id=LF-001`) might render unmasked data if parameters are tampered with. | **Medium** | Sanitize URL query parameters and ensure `detail.html` only renders public non-sensitive attributes. | Lemon MVP Team |
| **File upload** | If used, can unsafe or unrelated files be uploaded? | Image uploads currently accept any file type or large file sizes. | **High** | Restrict allowed MIME types to `.jpg`, `.png`, `.jpeg`, enforce a strict 5MB file size limit, and provide upload preview. | Lemon MVP Team |

## Security Decision
- **Safe to continue with revision** (Mitigations actively implemented for form validation, public data masking, and admin role separation).
