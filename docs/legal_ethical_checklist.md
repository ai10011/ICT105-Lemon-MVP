# Legal and Ethical Checklist

## Project Title
**EduSubmit** - Prototype Student Assignment & Feedback Portal

## Ethical Review
| Check Item | Yes/No | Evidence / Notes | Mitigation Action | Owner | GitHub Issue/Commit |
|---|---|---|---|---|---|
| Users are informed about the purpose of the prototype. | **Yes** | A clear notice banner is displayed on the login page explaining that this is a testing prototype. | None required; maintain visibility. | Product Owner | `#issue-102` |
| The prototype avoids misleading claims. | **Yes** | The UI explicitly states that grades generated in this prototype are for system testing and do not impact GPA. | Ensure text remains unambiguous during iterations. | QA Tester | `#commit-8a3b2c` |
| The prototype does not collect unnecessary sensitive data. | **Yes** | Privacy review completed; removed DOB and address fields successfully. | Enforce strict schema validation to reject unapproved fields. | Data Engineer | `#commit-4f9e1a` |
| Users can understand what happens after submission. | **No** | Currently, clicking "Submit" leaves the user on a blank screen without confirmation. | Add a success confirmation modal and send an automated receipt email. | Frontend Dev | `#issue-115` |
| Admin or manager actions are clearly separated from user actions. | **Yes** | Teachers use a completely separate portal dashboard (`/teacher/dashboard`) requiring distinct credentials. | Ensure routing middleware strictly segregates these zones. | Fullstack Dev | `#issue-108` |
| The prototype avoids unfair or harmful treatment of users. | **Yes** | Grading queues are sorted strictly chronologically to avoid favoritism or bias. | Maintain a first-in, first-out (FIFO) sorting mechanism for submissions. | Backend Dev | `#commit-9d2e7f` |

## Summary Decision
- **Safe to continue**: **With revision**
- **Required revision before implementation**: 
  1. Fix the submission user experience to include a clear confirmation message (`#issue-115`).
  2. Implement backend role validation to secure teacher grading actions against unauthorized user access (`#issue-108`).
