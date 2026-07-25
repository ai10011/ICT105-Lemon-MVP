# Startup / Product Metrics

> Define metrics that show useful product activity. Metrics should not be random numbers. Each metric should help the team understand usage, value, status, validation, or operational performance.

## 1. Metrics Summary

| Metric ID | Metric Name | Metric Type | Why This Metric Matters | Formula / How to Calculate | Data Source | Prototype Screen |
|---|---|---|---|---|---|---|
| M-01 | Total Item Reports | Usage | Measures user engagement, activity volume, and overall platform adoption across campus. | Count of all items in database (`Lost` + `Found` records) | `localStorage` (`lemon_records`) / Express REST API (`/api/records`) | [index.html](../prototype/project/index.html), [dashboard.html](../prototype/project/dashboard.html), [admin.html](../prototype/project/admin.html) |
| M-02 | Pending / Unresolved Cases | Status | Tracks active workload and lost item reports awaiting claim verification or matching. | Count of records where `status = "Pending"` or `claimStatus = "Pending"` | [record-data.json](../prototype/project/data/record-data.json) / `localStorage` | [dashboard.html](../prototype/project/dashboard.html), [admin.html](../prototype/project/admin.html) |
| M-03 | Completed / Recovered Cases | Status & Value | Demonstrates core value proposition fulfillment (successfully returning items to owners). | Count of records where `status = "Claimed"` or `status = "Resolved"` | [record-data.json](../prototype/project/data/record-data.json) / `localStorage` | [dashboard.html](../prototype/project/dashboard.html), [admin.html](../prototype/project/admin.html) |
| M-04 | Item Resolution Rate (%) | Operational Performance | Evaluates overall system success in matching lost property with reported found items. | `(Completed & Claimed Items / Total Item Reports) × 100` | Dynamic calculation in [dashboard.js](../prototype/project/js/dashboard.js) & [admin.js](../prototype/project/js/admin.js) | [dashboard.html](../prototype/project/dashboard.html), [admin.html](../prototype/project/admin.html) |
| M-05 | Category Distribution | Category & Insights | Identifies high-risk item types (Electronics, Personal Items) to optimize search indexing and form tags. | Count of items grouped by category (`Electronics`, `Personal`, `Stationery`, etc.) | [status-category-reference.csv](../data/status-category-reference.csv) / `localStorage` | [dashboard.html](../prototype/project/dashboard.html), [records.html](../prototype/project/records.html) |
| M-06 | Task Completion Rate | Validation | Validates end-to-end user flow feasibility during customer usability testing (Target: ≥ 70%). | `(Successfully Completed User Tasks / Total Validation Tasks) × 100` | [validation-results.csv](../data/validation-results.csv) (20 Testers) | [analytics-insights.md](analytics-insights.md) |
| M-07 | Average Ease of Use & Usefulness | Validation | Measures user perception, interface satisfaction, and subjective UX quality (Scale 1–5). | `Sum of Ease of Use (or Usefulness) Scores / Total Respondents` | [validation-results.csv](../data/validation-results.csv) / [feedback-form.csv](../data/feedback-form.csv) | [customer-validation-summary.md](customer-validation-summary.md) |
| M-08 | Search & Filter Success Rate | Validation & Usability | Measures student ability to locate target records using keyword text, status, and location filters. | `(Successful Search Tasks / Total Search Tests) × 100` | [validation-results.csv](../data/validation-results.csv) (Tasks T002, T007, T012, T017) | [records.html](../prototype/project/records.html) |
| M-09 | Average Resolution Time | Operational Efficiency | Tracks how rapidly lost items are matched, verified, and returned to their legitimate owners. | `Sum of (Resolved Timestamp - Reported Timestamp) / Total Resolved Items` | `localStorage` / REST API timestamp data | [admin.html](../prototype/project/admin.html), [dashboard.html](../prototype/project/dashboard.html) |
| M-10 | Location Density Distribution | Campus Insights | Pinpoints campus hotspots (e.g., Library, Student Union) where lost items are most frequently reported. | Count of items grouped by building location tag (`Library`, `Canteen`, `Sports Complex`) | `localStorage` (`lemon_records`) | [dashboard.html](../prototype/project/dashboard.html), [records.html](../prototype/project/records.html) |
| M-11 | User Return / Claim Rate | Retention & Trust | Demonstrates whether users return to the platform to track claim updates or register new reports. | `(Users with ≥ 2 sessions or interactions / Total Unique Users) × 100` | Analytics summary logs | [dashboard.html](../prototype/project/dashboard.html) |

---

## 2. Metrics Interpretation

### Core Validation Signals & Product-Market Fit
Customer validation testing (Lab 08) conducted with **20 campus users** (Testers T001–T020) demonstrated strong early adoption signals for the Lemon MVP core concept:
* **Task Completion Rate (M-06)** reached **80.00%** (16 out of 20 completed tasks), outperforming our baseline success threshold of 70.00%.
* **Product Usefulness Score (M-07)** averaged **4.35 / 5.0**, accompanied by an **Interest Level of 3.80 / 5.0 (76.00%)**. 
* These results confirm that students, faculty, and administrative staff strongly prefer a dedicated, searchable lost-and-found portal over fragmented social media groups or physical notice boards.

### Usability Bottlenecks & Friction Points
Despite positive core demand, the **Average Ease of Use Score (M-07)** stood at **3.55 / 5.0**, impacted by 4 notable task failures during testing (Tasks T003, T008, T012, and T016):
* **Status Terminology Ambiguity**: Testers experienced confusion distinguishing between `"Pending"`, `"Under Review"`, and `"Claimed"` states, leading to status update errors in the administrative portal.
* **Navigation Friction**: Dashboard analytics links were nested inside non-intuitive header sub-menus, delaying user access to claim progress summaries.
* **Form Submission Drops**: Excessive required input fields on `form.html` increased form completion time.
* **Filter Discoverability**: The search panel on mobile viewports occupied full vertical height, hiding initial item result cards below the fold.

### Operational Telemetry Insights
Live telemetry data across current sample records indicates that high-value categories—specifically **Electronics (28.5%)** and **Personal Items/Wallets (18.2%)**—comprise nearly half of all submissions. Furthermore, **Location Density (M-10)** reveals that over **62%** of items are lost in two specific campus zones: the *Main Library* and the *Student Union Complex*.

### Sprint 2 Action Plan Based on Metrics
To solve these validated friction points, the development team executed the following targeted improvements:
1. **Color-Coded Status System (FR-08)**: Replaced generic text tags with high-visibility, color-coded badges (`Pending` [Amber], `Available` [Blue], `Claimed` [Green], `Closed` [Gray]) across all viewports.
2. **Prominent Dashboard Navigation (FR-12)**: Elevated the `Dashboard` link directly into the primary navigation bar in `Shared/components.js`.
3. **Optimized Form & Mobile Accordion (FR-06, FR-10)**: Simplified `form.html` required inputs and introduced a collapsible mobile filter accordion (`#mobile-filter-toggle`) on `records.html`.
4. **Enhanced Administrative Workflow (FR-09)**: Streamlined status management controls on `admin.html` to accelerate resolution speeds (**M-09**) for security staff.

---

## 3. Link to Final Prototype

These product metrics are dynamically rendered, updated, and verified across the working prototype via client-side storage and API endpoints:

| Metric ID & Name | Prototype View | Source Code & Data Logic | Interactive UI Demonstration |
|---|---|---|---|
| **M-01: Total Item Reports** | `index.html`<br>`dashboard.html`<br>`admin.html` | `LemonData.getRecords()` in `js/main.js` | Dynamic stat counter cards update immediately upon page load or record submission. |
| **M-02: Pending Cases** | `dashboard.html`<br>`admin.html` | `records.filter(r => r.status === 'Pending')` in `js/dashboard.js` | Highlighted metric badge in user and admin command widgets. |
| **M-03: Recovered Cases** | `dashboard.html`<br>`admin.html` | `records.filter(r => r.status === 'Claimed')` in `js/admin.js` | Real-time resolved counter linked directly to success notification banners. |
| **M-04: Item Resolution Rate (%)** | `dashboard.html`<br>`admin.html` | Computed dynamically: `(Claimed / Total) * 100` in `js/dashboard.js` | Visual percentage badge and progress bar indicator showing platform efficiency. |
| **M-05: Category Distribution** | `dashboard.html`<br>`records.html` | `js/records.js` category aggregator | Category breakdown progress bars and interactive dropdown filters. |
| **M-09: Average Resolution Time** | `admin.html` | Admin analytics helper function in `js/admin.js` | Calculated operational widget showing average hours to resolve lost item claims. |
| **M-10: Location Density** | `records.html`<br>`dashboard.html` | Filter logic in `js/records.js` | Location badge tag cloud and filter option counts for campus buildings. |

### Data Storage & API Synchronization
- **Client-Side Persistence**: Metrics automatically recalculate from `localStorage` (`lemon_records`).
- **REST API Endpoint**: Server integration routes (`GET /api/records`, `POST /api/records`, `PATCH /api/records/:id`) allow real-time cross-tab metric updates (`server.js`).
- **Empirical Validation Artifacts**: All validation benchmarks are stored in `validation-results.csv` and documented in `analytics-insights.md` and `customer-validation-summary.md`.
