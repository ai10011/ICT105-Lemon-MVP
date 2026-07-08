# Data Structure

## Project Title

**Smart Campus Lost-and-Found System**

---

## 1. Main Data Entities / Tables

| Entity / Table | Purpose | Example Records |
|---|---|---|
| Lost and Found Records | Store information about lost and found items reported on campus. | LF-001, LF-002, LF-003 |

---

## 2. Field Definition

| Field Name | Data Type | Required? | Example Value | Validation Rule | Used For Search/Filter? |
|---|---|---|---|---|---|
| ItemID | Text | Yes | LF-001 | Unique value | Yes |
| ReportType | List | Yes | Lost | Lost / Found | Yes |
| ItemCategory | Text | Yes | Student ID | Cannot be empty | Yes |
| ItemName | Text | Yes | Blue RSU Student ID | Cannot be empty | Yes |
| Location | Text | Yes | Library | Cannot be empty | Yes |
| DateReported | Date | Yes | 6/1/2026 | Valid date | Yes |
| ReporterRole | List | Yes | Student | Student / Staff / Security | Yes |
| Status | List | Yes | Pending | Pending / Available / In Review / Claimed / Closed | Yes |
| Description | Text | No | Card lost after group study session. | Maximum 500 characters | Yes |

---

## 3. Status Values

| Status | Meaning | Who Can Update? |
|---|---|---|
| Pending | Lost item report has been submitted. | Student, Staff |
| Available | Found item is available for collection. | Staff, Security |
| In Review | Item report is being verified. | Staff |
| Claimed | Item has been returned to its owner. | Staff |
| Closed | Report is finished or no further action is required. | Staff |

---

## 4. Sample Records

Dataset location:

```
data/lost-and-found-sample-records.csv
```

Example records:

| ItemID | ReportType | ItemName | Location | Status |
|---|---|---|---|---|
| LF-001 | Lost | Blue RSU Student ID | Library | Pending |
| LF-002 | Found | Black Phone Charger | ICT Lab | Available |
| LF-003 | Lost | Silver Water Bottle | Cafeteria | In Review |
| LF-004 | Found | Green Notebook | Building 6 | Claimed |
| LF-005 | Lost | Small Black Umbrella | Bus Stop | Pending |
| LF-006 | Found | Brown Wallet | Sports Area | Available |
| LF-007 | Lost | Wireless Earbuds | Classroom | Closed |
| LF-008 | Found | Room Key | Parking Area | Available |

---

## 5. Data Privacy Note

This prototype only stores information needed to report and search for lost and found items. No passwords, financial information, national identification numbers, or other sensitive personal data are collected. Sample records are fictional and are used only for demonstration purposes.
