# Data Structure

## Project Title

**Smart Campus Lost-and-Found System**

---

## 1. Main Data Entities / Tables

| Entity / Table | Purpose | Example Records |
|---|---|---|
| Users | Store information about students, staff, and administrators | U001 (Student), U002 (Staff), A001 (Admin) |
| Reports | Store lost and found item reports | R001, R002, R003 |
| Items | Store item details | Laptop, Wallet, Student ID Card |
| Claims | Record ownership claims for found items | C001, C002 |
| Feedback | Store user feedback and suggestions | F001, F002 |

---

## 2. Field Definition

| Entity | Field Name | Data Type | Required? | Example Value | Validation Rule | Used For Search/Filter? |
|---|---|---|---|---|---|---|
| Users | user_id | Text/ID | Yes | U001 | Unique value | Yes |
| Users | full_name | Text | Yes | John Smith | 2–100 characters | Yes |
| Users | email | Email | Yes | student@university.edu | Valid email format | Yes |
| Users | role | List | Yes | Student | Student / Staff / Admin | Yes |
| Reports | report_id | Text/ID | Yes | R001 | Unique value | Yes |
| Reports | report_type | List | Yes | Lost | Lost / Found | Yes |
| Reports | item_name | Text | Yes | Black Backpack | 2–100 characters | Yes |
| Reports | category | List | Yes | Electronics | Predefined categories | Yes |
| Reports | description | Text | No | Black Lenovo backpack | Maximum 500 characters | No |
| Reports | location | Text | Yes | Library Building | Cannot be empty | Yes |
| Reports | report_date | Date | Yes | 2026-07-08 | Valid date | Yes |
| Reports | status | List | Yes | Pending | Pending / In Progress / Completed / Closed | Yes |
| Claims | claim_id | Text/ID | Yes | C001 | Unique value | Yes |
| Claims | report_id | Text/ID | Yes | R001 | Must exist in Reports | Yes |
| Claims | claimant_id | Text/ID | Yes | U005 | Must exist in Users | Yes |
| Claims | verification_status | List | Yes | Verified | Pending / Verified / Rejected | Yes |
| Feedback | feedback_id | Text/ID | Yes | F001 | Unique value | Yes |
| Feedback | user_id | Text/ID | Yes | U001 | Must exist in Users | Yes |
| Feedback | rating | Number | Yes | 5 | 1–5 | Yes |
| Feedback | comments | Text | No | Easy to use | Maximum 500 characters | No |

---

## 3. Status Values

| Status | Meaning | Who Can Update? |
|---|---|---|
| Pending | Report has been submitted and is waiting for review | User, Admin |
| In Progress | Admin is verifying or processing the report | Admin |
| Completed | Item has been successfully returned to its owner | Admin |
| Closed | Report is closed because the issue has been resolved or cancelled | Admin |

---

## 4. Sample Records

Sample dataset location:

```
/data/lost_found_sample_records.csv
```

Example records:

| Report ID | Type | Item Name | Location | Status |
|---|---|---|---|---|
| R001 | Lost | Student ID Card | Library | Pending |
| R002 | Found | Black Wallet | Cafeteria | In Progress |
| R003 | Lost | Laptop | Engineering Building | Completed |

---

## 5. Data Privacy Note

The system does **not collect sensitive personal information** such as passwords, financial information, national ID numbers, or medical records.

Sample data uses **fictional names, randomly generated IDs, and anonymized email addresses** to protect privacy.

Only the minimum information required to report, search, and claim lost items is stored. Administrative functions are restricted to authorized administrators.
