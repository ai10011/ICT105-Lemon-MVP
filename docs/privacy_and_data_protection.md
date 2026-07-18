# Privacy and Data Protection

## Data Collection Summary
| Data Field | Why It Is Needed | Personal Data? | Sensitive Data? | Keep / Remove / Replace | Notes |
|---|---|---|---|---|---|
| **Student Full Name** | Identification for grading | Yes | No | **Replace** with Student ID Number | Prevents accidental bias during grading and limits exposure. |
| **Student Email** | Automated notifications for grades | Yes | No | **Keep** | Essential for system loops, but must be encrypted at rest. |
| **Assignment File** | Core artifact required for evaluation | Maybe (depends on content) | No | **Keep** | Students will be instructed not to include personal phone numbers or addresses inside the document body. |
| **Teacher Feedback** | Academic evaluation and guidance | No | No | **Keep** | Purely professional/academic data. |
| **Student Date of Birth** | Originally planned for age verification | Yes | No | **Remove** | Unnecessary for the scope of an assignment tracker application. |

## Privacy Rule for Prototype
This prototype collects only the minimum data required to facilitate assignment submission and grading: a unique Student ID, an institutional email address for notifications, and the assignment file itself. Data is only visible to the submitting student and assigned faculty members. The prototype avoids collecting unnecessary identifiers (like dates of birth or phone numbers) and stores all uploads in a secure, non-public environment.

## Data Minimization Decision
- **Removed**: `Student Date of Birth` and `Home Address` fields have been completely stripped from the database schema.
- **Changed**: `Student Full Name` has been replaced across the user interface and backend queries with a pseudonymous `StudentID` string.
