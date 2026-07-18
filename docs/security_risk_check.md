# Basic Security Risk Check

| Area | Risk Question | Current Status | Risk Level | Mitigation | Owner |
|---|---|---|---|---|---|
| **Form input** | Can incomplete or invalid data be submitted? | Yes, front-end validation is currently missing on the text areas. | **Medium** | Implement standard HTML5 required attributes and backend validation rules using a validation library (e.g., Zod or Joi). | Frontend Dev |
| **Admin function** | Can normal users access admin actions? | Currently, API routes for grading lack role-based checks; anyone with the URL can call them. | **High** | Implement a middleware check (`isAdmin` / `isTeacher`) on all grading and management API endpoints before execution. | Backend Dev |
| **Data display** | Is private information visible to everyone? | Student grades are currently visible on a public dashboard view. | **High** | Restrict the dashboard query to filter records by the logged-in user's unique `student_id`. | Backend Dev / Database Eng |
| **Status update** | Can records be edited without control? | Yes, an assignment status can be manually overwritten via raw API requests without a timestamp or log. | **Medium** | Implement an audit log table to track state changes and enforce state-machine logic (e.g., cannot change from "Graded" back to "Draft"). | Backend Dev |
| **Public links** | Does a public link expose data that should be private? | Yes, uploaded assignment files are currently stored in a public S3 bucket with guessable sequential URLs. | **High** | Move files to a private bucket and generate time-limited, pre-signed URLs for authorized teachers/students only. | Cloud Architect |
| **File upload** | If used, can unsafe or unrelated files be uploaded? | The upload input accepts any file extension up to 50MB. | **High** | Restrict allowed MIME types to `.pdf`, `.docx`, and `.zip`. Enforce a strict 5MB file size limit and run basic malware scanning if possible. | DevOps / Frontend Dev |

## Security Decision
- **Redesign required** (Due to high risks identified in Admin functions, Data display, and File uploads, implementation is paused until mitigations are actively in development).
