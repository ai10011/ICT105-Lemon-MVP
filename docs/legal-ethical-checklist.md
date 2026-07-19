# Legal and Ethical Checklist

## Project Title
**Lemon** - Smart Campus Lost-and-Found System

## Ethical Review
| Check Item | Yes/No | Evidence / Notes | Mitigation Action | Owner | GitHub Issue/Commit |
|---|---|---|---|---|---|
| Users are informed about the purpose of the prototype. | **Yes** | Clear notice banner displayed on landing page and report forms stating that this is an educational MVP prototype. | None required; maintain disclaimer visibility. | Kyaw Ye Lin (Product Lead) | `#65` |
| The prototype avoids misleading claims. | **Yes** | UI explicitly states the system facilitates lost item searching and reporting, but does not guarantee recovery. | Ensure landing messaging explicitly states recovery is not guaranteed. | Kyaw Ye Lin (Product Lead) | `#65` |
| The prototype does not collect unnecessary sensitive data. | **Yes** | Privacy review completed; national IDs, passwords, and home addresses removed from submission forms. | Enforce minimal form schema (nickname, masked Student ID, general location). | Tin May Lin (UX Lead) | `#62` |
| Users can understand what happens after submission. | **No** | Item reporting form currently lacks immediate visual confirmation after saving to localStorage. | Add clear success modal and redirect user to item status tracking page. | Tin May Lin (UX Lead) | `#62` |
| Admin or manager actions are clearly separated from user actions. | **Yes** | Campus staff/admin inventory functions are isolated in a dedicated admin interface (`admin.html`). | Enforce simulated role-based authorization check in `components.js`. | Tin May Lin (UX Lead) / Phoochit Jantakam | `#62` / `#64` |
| The prototype avoids unfair or harmful treatment of users. | **Yes** | Lost/found item listings and claim verification queues are sorted chronologically without bias. | Maintain transparent, first-reported first-listed sorting order. | Tin May Lin (UX Lead) | `#62` |

## Summary Decision
- **Safe to continue**: **With revision**
- **Required revision before implementation**: 
  1. Add post-submission confirmation feedback and status redirect (`#62`).
  2. Implement simulated role-based authorization checks for admin functions (`#62`, `#64`).
