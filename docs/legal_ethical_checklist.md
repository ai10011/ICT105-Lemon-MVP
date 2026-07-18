# Legal and Ethical Checklist

## Project Title
**Lemon** - Smart Campus Lost-and-Found System

## Ethical Review
| Check Item | Yes/No | Evidence / Notes | Mitigation Action | Owner | GitHub Issue/Commit |
|---|---|---|---|---|---|
| Users are informed about the purpose of the prototype. | **Yes** | Clear notice banner displayed on landing page and report forms stating that this is an educational MVP prototype. | None required; maintain disclaimer visibility. | Lemon MVP Team | `#issue-01` |
| The prototype avoids misleading claims. | **Yes** | UI explicitly states the system facilitates lost item searching and reporting, but does not guarantee recovery. | Ensure landing messaging explicitly states recovery is not guaranteed. | Lemon MVP Team | `#issue-12` |
| The prototype does not collect unnecessary sensitive data. | **Yes** | Privacy review completed; national IDs, passwords, and home addresses removed from submission forms. | Enforce minimal form schema (nickname, masked Student ID, general location). | Lemon MVP Team | `#commit-8f2a10` |
| Users can understand what happens after submission. | **No** | Item reporting form currently lacks immediate visual confirmation after saving to localStorage. | Add clear success modal and redirect user to item status tracking page. | Lemon MVP Team | `#issue-16` |
| Admin or manager actions are clearly separated from user actions. | **Yes** | Campus staff/admin inventory functions are isolated in a dedicated admin interface (`admin.html`). | Enforce simulated role-based authorization check in `components.js`. | Lemon MVP Team | `#issue-10` |
| The prototype avoids unfair or harmful treatment of users. | **Yes** | Lost/found item listings and claim verification queues are sorted chronologically without bias. | Maintain transparent, first-reported first-listed sorting order. | Lemon MVP Team | `#commit-3b7c9d` |

## Summary Decision
- **Safe to continue**: **With revision**
- **Required revision before implementation**: 
  1. Add post-submission confirmation feedback and status redirect (`#issue-16`).
  2. Implement simulated role-based authorization checks for admin functions (`#issue-10`).
