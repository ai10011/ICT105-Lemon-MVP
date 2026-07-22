# Lab 10 - Implementation Plan

## 1. Project Information
- Group name: Lemon
- Project title: Lemon - Smart Campus Lost-and-Found System
- Repository link: https://github.com/ai10011/ICT105-Lemon-MVP
- Selected platform/tools: HTML5, Tailwind CSS, Vanilla JavaScript, Node.js Express REST API
- Backend status: Real backend / Simulated backend (Node.js Express REST API server with JSON file storage & localStorage fallback)

## 2. Prototype Scope for Sprint 1
List the features your group will implement in Lab 10.

| Feature | Requirement ID | User Story ID | Screen/Module | Sprint 1 Status |
|---|---|---|---|---|
| Homepage / landing screen | FR-01 | US-01, US-02 | [index.html](../prototype/project/index.html) | Completed |
| Input/submission form | FR-03 | US-01, US-02, US-04 | [form.html](../prototype/project/form.html) | Completed |
| Data storage / backend | FR-04 | US-01, US-02 | [server.js](../prototype/project/server.js), [record-data.json](../prototype/project/data/record-data.json) | Completed |
| Record list | FR-05 | US-03, US-05 | [records.html](../prototype/project/records.html) | Completed |
| Search/filter | FR-06 | US-03 | [records.html](../prototype/project/records.html) | Completed |
| Detail view | FR-07 | US-05 | [detail.html](../prototype/project/detail.html) | Completed |
| Status tracking | FR-08 | US-05, US-06 | [detail.html](../prototype/project/detail.html), [admin.html](../prototype/project/admin.html) | Completed |
| Admin function | FR-09 | US-06 | [admin.html](../prototype/project/admin.html) | Completed |
| Validation & feedback | FR-10, FR-11 | US-01, US-02 | [form.html](../prototype/project/form.html), [components.js](../prototype/project/Shared/components.js) | Completed |
| Dashboard/summary | FR-12 | US-03, US-06 | [dashboard.html](../prototype/project/dashboard.html) | Completed |

## 3. Implementation Approach
Explain how your prototype will be built.

- Frontend: Built using responsive HTML5 pages, Tailwind CSS for consistent design system tokens, and Vanilla JavaScript for dynamic rendering, client-side filtering, and modular UI components.
- Data source/storage: Powered by a lightweight Node.js Express REST API server (`server.js`) that persists reports into structured JSON (`prototype/project/data/record-data.json`), complemented by `localStorage` fallback and standardized CSV datasets (`data/lost-found-sample-records.csv`).
- Admin/status handling: Administrative view (`admin.html`) enabling staff to review submissions, verify claims, and update status badges (`Open`, `Pending Verification`, `Available`, `Claimed`, `Closed`).
- Search/filter approach: Real-time search by keyword query, report type (`Lost` / `Found`), and 5 standardized categories (`Electronics`, `Stationery`, `Personal`, `Clothing`, `Other`).
- Validation approach: Client-side validation enforcing HTML5 `required` fields, email pattern checking, date selection constraints, category dropdown selection, and toast notifications.
- Screenshots/evidence approach: Visual proof documented via screenshot captures in `screenshots/`, git commit history, and functional web prototype under `prototype/project/`.

## 4. Member Responsibilities

| Member | Responsibility | Evidence of Contribution |
|---|---|---|
| Kyaw Ye Lin | Product Lead - Data schema & sample records | [lost-found-sample-records.csv](../data/lost-found-sample-records.csv), [lost-found-status-categories.csv](../data/lost-found-status-categories.csv) |
| Tin May Lin | UX/UI Lead - Feature status tracking, implementation plan, & system flow diagrams | [feature-implementation-status.md](feature-implementation-status.md), [implementation-plan.md](implementation-plan.md), [implementation-flow.mmd](../diagrams/implementation-flow.mmd) |
| Phollapat Rodchue | Technical Lead - Project web prototype development | [prototype/project/](../prototype/project/) |
| Phoochit Jantakam | Documentation Lead - Weekly logbook & project documentation | [weekly-logbook.md](weekly-logbook.md), [README.md](../README.md) |

## 5. Risks or Blockers
Write technical problems your team faced and how you plan to solve them.

1. **Category Mismatch across CSV Datasets and UI Dropdowns:** Initial datasets contained conflicting category names (`Personal Item`, `Document`, `Card`).  
   - *Solution:* Standardized all CSV data files and HTML `<select>` forms across the project to 5 core categories: `Electronics`, `Stationery`, `Personal`, `Clothing`, `Other`.
2. **UI Component Duplication across Pages:** Navigation bars and footers were duplicated across multiple HTML files, creating maintenance friction.  
   - *Solution:* Implemented a shared JavaScript component loader (`Shared/components.js`) that dynamically loads `header.html` and `footer.html`.
3. **Data Persistence without Database Overhead:** Needed a fast, zero-configuration method to persist test submissions during user testing.  
   - *Solution:* Built a Node.js Express server (`server.js`) with JSON file-based storage backed up by browser `localStorage`.
