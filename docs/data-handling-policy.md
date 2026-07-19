# Data Handling Policy

## Data Collection

The prototype collects only the information necessary to support the campus lost-and-found process.

| Data Field | Required | Purpose |
|-------------|:--------:|---------|
| Item Name | Yes | Identify the lost or found item |
| Item Category | Yes | Organize items into categories |
| Item Description | Yes | Provide details to help identify the item |
| Lost/Found Location | Yes | Record where the item was lost or found |
| Lost/Found Date | Yes | Record when the item was lost or found |
| Item Image | Optional | Help users recognize the item |
| Contact Email or Phone | Yes | Allow communication between users |
| Report Status | Yes | Track the report status (Open, Claimed, Resolved) |

---

## Data Storage

Submitted reports are stored using a simulated data source suitable for the prototype.

| Storage Method | Usage |
|----------------|-------|
| JSON Sample Dataset | Stores sample lost and found reports for demonstration |
| Browser `localStorage` | Saves data locally during testing (if implemented) |
| Firebase / Google Sheets | Optional storage if connected in future development |

> **Note:** The prototype is intended for academic demonstration only. Stored data is simulated and not designed for production use.

---

## Data Access

| User Role | Permissions |
|-----------|-------------|
| Student | Create reports, view reports, and update the status of their own reports |
| Administrator | View all reports, update report status, edit records, and remove invalid reports |
| Visitor (if allowed) | View publicly available lost and found reports only |

---

## Data Minimization

To protect user privacy, the prototype minimizes personal data collection by:

- Using a masked Student ID (e.g., 65XXXXX) instead of displaying the full ID.
- Keeping contact email visible only to administrators when required.
- Using a nickname or anonymous identifier instead of a full legal name where possible.
- Not collecting unnecessary sensitive information such as:
  - National ID or Passport Number
  - Home Address
  - Date of Birth
  - Financial or Payment Information

---

## Responsible Data Rule

The prototype follows responsible data handling practices by:

- Collecting only data necessary for the lost-and-found process.
- Using sample or masked data during demonstrations whenever possible.
- Avoiding unnecessary sensitive personal information.
- Restricting data modification to authorized users (e.g., report owners and administrators).
- Explaining how collected data is used within the prototype.
- Using data only for academic purposes as part of the ICT105 project.
