# ICT105-Lemon-MVP
Semester-long IT startup MVP project for ICT105 Fundamental Technology Entrepreneurship.
# Project Venture Workspace

## Course Information
- **Course Code:** ICT105
- **Course Name:** Fundamental Technology Entrepreneurship
- **Instructor:** Dr. Herison Surbakti
- **Project Type:** 14-Labs Continuous IT Startup MVP Development

## Team Name
Lemon

## Team Members and Roles
| Name | Role | Responsibility |
|---|---|---|
| Kyaw Ye LIn | Product Lead | Define problem, target users, and value proposition |
| Phollapat Rodchue | Technical Lead | Manage repository and prototype feasibility |
| Tin May Lin | UX/UI Lead  | Design interface |
| Phoochit Jantakam | Documentation Lead | Maintain documentation |

> [!NOTE]
> **Prototype Data Disclaimer:**  
> All data provided in this project (including item catalog records, user accounts, analytics metrics, acquisition numbers, and testing data) is **mock-up data** created strictly for demonstration, visual presentation, and prototype evaluation.

## Initial Problem Area
Our team is focusing on resolving operational friction points within student logistics and campus tracking infrastructure. We are specifically targeting the fragmented nature of lost item reporting within high-density student facilities.

## Target Users
- Undergraduate university students who frequently lose baseline items.
- Campus security staff and facility processing clerks managing incoming inventory items.

## Selected IT Venture Direction
Our team selected a campus lost-and-found reporting system. The target users are university students who lose personal items and currently search through unstructured chat groups or ask security staff manually. We selected this idea because it is highly useful, structurally feasible, and can be prototyped as an automated web-based indexing and discovery portal completely without physical IoT hardware, sensors, or complex infrastructure protection networks.

## Technology Possibility
- Web application interface
- Responsive interactive data dashboard
- Local spreadsheet backend data integrations

## Repository Structure
- **docs/**: Project profiles, structural logs, opportunity assessments.
- **prototype/**: Modular source code packages and asset collections.
- **data/**: Collected metrics, interviews, forms, and user discovery findings.
- **finance/**: Operational models, break-even plans, and growth projections.
- **diagrams/**: System architecture wireframes and user interaction flows.
- **screenshots/**: Visual validation records of the working application.
- **pitch/**: The final slide presentations and investment pitch documents.

## Weekly Progress Log
| Lab | Main Activity | Output | Status |
|---|---|---|---|
| Lab 1 | Lab setup and idea log | Repository setup, team profile tracking, initial three-idea logbook | Completed |
| Lab 2 | Opportunity scanning & selection | Evaluated 6 diverse opportunity pipelines, executed NUF scoring matrix, and selected Campus Lost-and-Found System | Completed |
| Lab 3 | Customer Discovery Workflows | Conducted user problem interviews/surveys, built assumption-evidence table | Completed |

## Current Status
We have just completed our formal customer discovery workflows. We conducted structured user problem interviews and surveys, collecting foundational user evidence. 
* We validated that current chat-group workarounds are failing.
* We revised our physical drop-off assumption to a digital-pinning feature.
* We revised our communication assumption to protect respondent privacy.

## Customer Problem Discovery Summary
In Lab 03, our team collected early problem evidence from target users. The purpose was to confirm whether our selected problem from Lab 02 is real and important. 

Through this workflow, we successfully validated key problem signals, identified the breaking points of current student workarounds, and actively used the evidence to adjust our product design—shifting from physical drop-off mechanics to digital location pinning, and introducing privacy-first communication features.

## Target Respondents
Our team gathered customer discovery evidence from a structured sample size of campus respondents, specifically focusing on:
* **Undergraduate university students** who frequently commute across high-density campus facilities (such as the main library or lecture halls) and have recently lost or found personal baseline items.
* **Campus security staff and facility processing clerks** who are responsible for managing incoming inventory items and handling manual inquiries.

## Main Evidence Found
Through our structured problem interviews and surveys, we uncovered several critical insights:
* **Lost information is too spread out:** Students confirmed they have to look in too many places. They check group chats, ask friends, visit the security office, or look at paper notebooks.
* **Students want one central tool:** Many people said they want one official website. They want to search by item types, look at dates, see photos, and prove they own the item.
* **Some items are more important than others:** Our idea that all lost items are the same was wrong. Small things like water bottles are not urgent. Important things like ID cards, calculators, and USB drives are a big deal.
* **People will not use it for everything:** Students will not log every tiny item they lose. They also noted that the app will only work effectively if both finders and losers actively use the platform.

## Updated Problem Statement
University students who lose personal items on campus currently have to search through disorganized, unstructured Line/Discord groups or manually visit the campus security office. Because these existing workarounds are scattered and inefficient, 65% of students abandon their search for lost items within 24 hours, leading to a high rate of permanently unrecovered personal property in high-density student facilities.

## Decision for Next Step
The team has decided to **Proceed with an Evidenced-Based Pivot (Problem-Solution Fit)**. 

## Lab 04: User Persona, Requirements, and User Stories

### Primary Target User
The primary target users are university students who frequently lose or find personal items on campus and need a centralized way to report and track them.

### Persona Summary
- **Persona name:** Justin
- **User type:** First-Year University Student
- **Main goal:** To easily report, search for, and track the status of lost and found items in one place.
- **Main pain point:** Lost-and-found information is highly fragmented across disconnected channels, causing a time-consuming search process and high abandonment rates.
- **Current workaround:** Searching manually through disconnected social media channels like LINE and Facebook.

### Key Requirements
| Req ID | Requirement | Priority | Related Evidence |
|---|---|---|---|
| FR-01 | The system must provide core reporting forms for users to log lost or found items. | Must | Lab 03 user interviews highlighting the difficulty of fragmented reporting channels. |
| NFR-01 | The system must protect user privacy by not publicly displaying personal phone numbers. | Must | Lab 03 privacy concerns regarding public data sharing. |

### MVP Feature Scope
| Feature | Priority | Included in Final Prototype? |
|---|---|---|
| Core reporting forms (lost/found) | Must | Yes |
| Database search and filtering | Must | Yes |
| Item status tracking | Must | Yes |
| In-App Messaging (US-08) | Postponed | No |
| Automated Notifications (US-07) | Postponed | No |

### Diagram Links
- **User flow diagram:** `diagrams/user-flow.png`
- **Use case diagram:** `diagrams/use-case-diagram.png`

### GitHub Contribution Evidence
All members contributed to this repository through commits, issues, or pull requests.

## Lab 05: Product Concept and UI/UX Wireframe

### Product Concept
Briefly explain what your product is, who it is for, and what problem it solves.

### Requirement-Driven Screens
List your required screens and related requirement IDs.

| Screen | Related Requirement IDs | Wireframe File |
|---|---|---|
| Homepage / Landing | FR-01, FR-02 | `/wireframes/homepage.png`|
| Input / Submission Form | FR-03, FR-10, FR-11 | `/wireframes/input-form.png` |
| Records / Information List | FR-05, FR-06 | `/wireframes/record-list.png` |
| Record Detail View | FR-07, FR-08 | `/wireframes/detail-view.png` |
| Dashboard / Summary | FR-12 | `/wireframes/dashboard.png` |
| Admin / Manager View | FR-09, FR-08 | `/wireframes/admin-view.png` |

### User Flow
Add a short explanation and link to `/diagrams/user-flow.png`.

### Team Contribution
All members contributed to the same GitHub repository.

# Lab 06 Update - Business Model Canvas and Technical Architecture

## Lab 06 Summary
In Lab 06, our group connected our product concept, requirements, user stories, and wireframes into business logic and technical structure.

## Files Added or Updated

- [Business Model Canvas](docs/business-model-canvas.md)
- [Feature-Value Mapping](docs/feature-value-mapping.md)
- [Technical Architecture](docs/technical-architecture.md)
- [Data Structure](docs/data-structure.md)
- [System Architecture Diagram](diagrams/system-architecture.mmd)
- [Data Flow Diagram](diagrams/data-flow.mmd)
- [Weekly Logbook](docs/weekly-logbook.md)

## Technical Direction
For this prototype, we will use a frontend-only architecture combined with localStorage and JSON.

We will not be using a live backend server or a traditional relational database. Instead, the application will handle all logic (authentication simulation, CRUD operations, and the matching engine) on the client side. Data persistence will be managed by serializing Javascript objects into JSON format and saving them directly to the browser's localStorage. This approach allows us to rapidly test the user interface and core system logic without the overhead of backend deployment.

## Final Prototype Connection

The artifacts and planning completed in this Lab 06 repository serve as the direct blueprint for the final prototype development. By establishing the core requirements, system diagrams, and visual guidelines now, the transition to a functional application will be significantly streamlined.

Here is how this lab's work guides the final development:

*   **UI/UX Translation:** The comprehensive wireframes (including the dashboard, input form, and admin views) provide exact visual specifications. These image files dictate the layout and CSS requirements for the final frontend interfaces, ensuring a consistent user experience.
*   **Structural Scaffolding:** The base HTML files already established in the `prototype/` directory (such as `index.html`, `form.html`, and `admin.html`) act as the structural foundation. The next development phase will simply involve injecting JavaScript logic into these existing files to enable dynamic rendering.
*   **Architectural Blueprint:** The system architecture and data flow diagrams (`.mmd` files) map out the specific data pathways for the application. This ensures clarity on exactly where frontend JavaScript needs to intercept user inputs, run the matching engine, and interact with the JSON/`localStorage` data store. 
*   **Feature Prioritization:** The extensive documentation (including the MVP feature list, user stories, and system requirements) dictates exactly which functionalities must be built first. This keeps the coding phase focused strictly on the core lost-and-found matching and claim operations, preventing scope creep.

# Lab 07: MVP Experiment Design

## Lab 07 Summary

In Lab 07, our team planned an MVP experiment to test whether the Campus Lost-and-Found System is easy to use. Before continuing development, we wanted to collect feedback from real users and identify areas that need improvement.

## Experiment Objective

The goal of this experiment is to test whether:

- Students can report lost and found items easily.
- Students can search for reported items successfully.
- Campus staff can use the dashboard and admin page without difficulty.
- The prototype is simple and easy to understand.

## MVP Experiment Type

**Selected Experiment Type:** Simple Web Prototype

**Reason:**  
Our prototype is a frontend-only web application using HTML, CSS, JavaScript, and `localStorage`. This allows us to test the main features without building a backend server.

## Critical Assumptions

During the experiment, we will validate the following assumptions:

- Students prefer one centralized platform instead of chat groups.
- Users can report and search for items without additional instructions.
- The item status is easy to understand.
- Campus staff can manage reports using the dashboard and admin page.

## Success Metrics

The experiment will be considered successful if:

- Most users complete the assigned tasks successfully.
- Users can submit reports without errors.
- Users can find items using the search feature.
- Users rate the prototype as useful and easy to use.
- Feedback helps us identify improvements for the next version.

## Files Added in Lab 07

- `docs/mvp-experiment-plan.md`
- `docs/critical-assumptions.md`
- `docs/experiment-script.md`
- `docs/success-metrics.md`
- `docs/feedback-form.md`
- `docs/weekly-logbook.md`

## Connection to the Final Prototype

The results from this experiment will help us improve the prototype before implementation. User feedback will be used to fix usability issues, improve the interface, and make sure the final prototype meets user needs.

## Lab 08: Customer Validation and Analytics Sheet

### Validation Objective
Evaluated core usability, task completion, and interest for key user flows (reporting lost items, searching found items, viewing item details, checking claim status, and administrative status updates) across student and staff user personas.

### Prototype Version Tested
- **Version:** v1
- **Link:** [prototype/project/](prototype/project/) (`index.html`, `dashboard.html`, `form.html`, `detail.html`, `admin.html`)
- **Screenshots:** [screenshots/project-dashboard.png](screenshots/project-dashboard.png)

### Analytics Summary
| Metric | Result |
|---|---:|
| Total test users | 20 Testers (T001 - T020) |
| Task success rate | 80.00% (16 / 20) |
| Average feedback score | 3.55 / 5.0 |
| Average interest level | 3.80 / 5.0 (76.00%) |
| Main confusion point | Dashboard location & Status wording |

### MVP Decision
**Continue with minor revisions**. The MVP direction is validated by 80% positive directional signal (55% fully validated, 25% partial). The team will implement targeted usability improvements:
1. **Form Input Streamlining (FR-10)**: Reduce mandatory required fields and provide inline tooltip guidance.
2. **Visual Status Badges (FR-08)**: Replace text status labels with color-coded badges (Pending Review, Approved, Collected).
3. **Reposition Dashboard Access (FR-12)**: Place a direct navigation link for the summary dashboard in the main header bar.
4. **Enhanced Search Filters (FR-06)**: Add campus building dropdown options to location search filters.
5. **Promote Admin CTA (FR-09)**: Make staff status update buttons easier to find on the administrative view.

### Files Added / Updated
- `data/validation-results.csv`
- `data/test-users.csv`
- `docs/customer-validation-summary.md`
- `docs/analytics-insights.md`
- `docs/mvp-decision.md`
- `docs/test-user-notes.md`
- `docs/weekly-logbook.md`
- `screenshots/project-dashboard.png`

## Lab 09 - Responsible IT Check

### Responsible Design Summary
In Lab 09, our group conducted a comprehensive responsible IT design evaluation for **Lemon - Smart Campus Lost-and-Found System**. We evaluated data privacy, ethical communication, intellectual property compliance, and basic web security:
* **Privacy & Data Minimization**: Stripped unnecessary sensitive fields (Home Address, Phone Number, National ID). Personal contact details (email) and Student IDs are masked on public views (`65XXXXX`) and restricted to the admin dashboard (`admin.html`).
* **Ethical Transparency**: Ensured clear educational MVP disclaimers and recovery expectations on the landing page so users understand that reporting does not guarantee recovery.
* **IP & Licensing**: Verified all third-party UI assets (Tailwind CSS, Plus Jakarta Sans, Google Material Symbols, Mermaid.js, Express.js) under open-source licenses (MIT, SIL OFL, Apache 2.0).
* **Basic Security**: Implemented client-side input validation, isolated administrative status updates behind role checks, and restricted file upload types (`.jpg`, `.png`, `< 5MB`).

### Files Added / Updated
- `docs/legal-ethical-checklist.md`
- `docs/privacy-and-data-protection.md`
- `docs/ip-and-third-party-assets.md`
- `docs/security-risk-check.md`
- `docs/risk-register.md`
- `docs/updated-requirements-note.md`
- `docs/user-consent-statement.md`
- `docs/data-handling-policy.md`
- `docs/weekly-logbook.md`
- `data/data-inventory.csv`
- `data/risk-register.csv`
- `data/third-party-assets-register.csv`
- `diagrams/privacy-security-review.png`
- `screenshots/privacy-security-review.png`

### Requirement Update
Core system requirements (`FR-01` through `FR-16` in `docs/system-requirements.md`) remain active. Responsible design updates were formally documented in `docs/updated-requirements-note.md`:
- **FR-03**: Added photo guidelines (no human faces) and mandatory user consent check before submission (Issue `#62` & Issue `#64`).
- **FR-06**: Added specific campus building dropdowns and visual status badges to prevent high search abandonment (Issue `#64`).
- **FR-09**: Isolated administrative status updates to `admin.html` with simulated role authentication (Issue `#62` & Issue `#64`).
- **FR-10**: Enforced mandatory field validation (category, location, date) with visual inline feedback (Issue `#62` & Issue `#64`).

### Team Contributions
| Member Name | Role | Contribution | GitHub Evidence |
|---|---|---|---|
| **Tin May Lin** (`meirosemary`) | UX/UI Lead | Authored `docs/legal-ethical-checklist.md`, `docs/privacy-and-data-protection.md`, and `docs/security-risk-check.md` | Issue `#62` ([#62](https://github.com/ai10011/ICT105-Lemon-MVP/issues/62)) |
| **Phollapat Rodchue** (`ai10011`) | Technical Lead | Prepared `data/data-inventory.csv`, `data/risk-register.csv`, `data/third-party-assets-register.csv`, and diagrams | Issue `#63` ([#63](https://github.com/ai10011/ICT105-Lemon-MVP/issues/63)) |
| **Phoochit Jantakam** (`Bilal112344`) | Documentation Lead | Authored `docs/risk-register.md`, `docs/updated-requirements-note.md`, and `docs/user-consent-statement.md` | Issue `#64` ([#64](https://github.com/ai10011/ICT105-Lemon-MVP/issues/64)) |
| **Kyaw Ye Lin** (`kyawyel68-Crystal`) | Product Lead | Authored `docs/data-handling-policy.md`, `docs/ip-and-third-party-assets.md`, updated `docs/weekly-logbook.md`, and `README.md` | Issue `#65` ([#65](https://github.com/ai10011/ICT105-Lemon-MVP/issues/65)) |

## Lab 10 - MVP Implementation Sprint 1

### Sprint Goal
Lab 10 focused on developing the first functional version of the MVP prototype using the approved requirements, wireframes, technical architecture, and responsible design guidelines as the foundation.

### Implementation Approach
- **Development Stack:** HTML5, Tailwind CSS, Vanilla JavaScript, Node.js Express REST API
- **Backend Implementation:** Node.js Express REST API server with JSON file storage and `localStorage` fallback.
- **Data Source:** `prototype/project/data/record-data.json` and `data/lost-found-sample-records.csv`
- **Prototype Location:** `prototype/project/` (`index.html`, `form.html`, `records.html`, `detail.html`, `admin.html`, `dashboard.html`)

### Features Completed in Sprint 1

| Feature | Requirement ID | Status | Evidence |
|---|---|---|---|
| Homepage | FR-01 | Completed | `prototype/project/index.html` |
| Report Form | FR-03 | Completed | `prototype/project/form.html` |
| REST API and Data Storage | FR-04 | Completed | `prototype/project/server.js` |
| Records List | FR-05 | Completed | `prototype/project/records.html` |
| Search and Filter | FR-06 | Completed | `prototype/project/records.html` |
| Record Detail View | FR-07 | Completed | `prototype/project/detail.html` |
| Status Tracking | FR-08 | Completed | `prototype/project/detail.html`, `admin.html` |
| Admin Management | FR-09 | Completed | `prototype/project/admin.html` |
| Analytics Dashboard | FR-12 | Completed | `prototype/project/dashboard.html` |

### Prototype Screenshots
- Homepage – `screenshots/homepage.png`
- Login Page – `screenshots/login.png`
- Registration Page – `screenshots/registration.png`
- Report Form – `screenshots/input-form.png`
- Records List – `screenshots/record-list.png`
- Detail View – `screenshots/detail-view.png`
- Admin / Status View – `screenshots/admin-view.png`
- Dashboard – `screenshots/dashboard.png`

### Team Contribution

| Member | Role | Evidence |
|---|---|---|
| **Kyaw Ye Lin** | Product Lead | Standardized the sample datasets and category files (`data/lost-found-sample-records.csv`, `data/lost-found-status-categories.csv`) |
| **Tin May Lin** | UX/UI Lead | Prepared the feature implementation status, implementation plan, and implementation flow diagram (`docs/feature-implementation-status.md`, `docs/implementation-plan.md`, `diagrams/implementation-flow.mmd`) |
| **Phollapat Rodchue** | Technical Lead | Developed and integrated the complete web prototype under `prototype/project/` |
| **Phoochit Jantakam** | Documentation Lead | Maintained the project documentation and weekly logbook (`docs/weekly-logbook.md`, `README.md`) |

## Lab 11: MVP Implementation Sprint 2 and Startup Metrics

### Prototype Progress
The core prototype UI design remained consistent from Lab 10 to Lab 11, with Sprint 2 focused specifically on **adding mobile responsiveness** and refining platform usability across mobile viewports:
- **Responsive Navigation Drawer (`Shared/components.js`):** Implemented a touch-friendly mobile menu drawer for header navigation.
- **Mobile Search & Hero Optimization (`index.html`):** Stacked hero search inputs vertically on screens `< 768px` to eliminate horizontal layout overflow.
- **Collapsible Mobile Filter Accordion (`records.html` & `js/records.js`):** Created a toggleable filter accordion (`#mobile-filter-toggle`) so search results stay visible on mobile screens.
- **Admin Mobile Drawer (`admin.html` & `js/admin.js`):** Created a slide-out mobile sidebar drawer with backdrop overlay (`#admin-sidebar-overlay`).

### Implemented / Improved Features
| Requirement ID | Feature | Status | Evidence |
|---|---|---|---|
| FR-03 | Report Form Mobile Optimization | Completed | [form.html](prototype/project/form.html) (Responsive radio card layouts `flex-col sm:flex-row` and mobile touch padding) |
| FR-06 | Mobile Search & Filter Accordion | Completed | [records.html](prototype/project/records.html) & [records.js](prototype/project/js/records.js) (Collapsible `#mobile-filter-toggle` and campus location filter) |
| FR-08 | Visual Color-Coded Status Badges | Completed | [detail.html](prototype/project/detail.html), [admin.html](prototype/project/admin.html) (Standardized badges `Pending Review`, `Available`, `Claimed`, `Closed`) |
| FR-12 | Analytics Dashboard & Header Access | Completed | [dashboard.html](prototype/project/dashboard.html) & [header.html](prototype/project/Shared/header.html) (User stats cards, resolution rate %, direct header navigation) |
| FR-14 | Mobile-Friendly Navigation Drawer | Completed | [components.js](prototype/project/Shared/components.js) & [admin.js](prototype/project/js/admin.js) (Slide-down header drawer & slide-out admin sidebar drawer) |

### Startup/Product Metrics
Documented 8 core startup & product metrics in [docs/startup-metrics.md](docs/startup-metrics.md) (`M-01` to `M-08`), mapping platform activity, case status, resolution rate %, category distribution, and customer validation metrics (80.00% task completion rate across 20 test users).

### Prototype Screenshots
- Baseline UI screenshots registered in [screenshots/README.md](screenshots/README.md) (`homepage.png`, `input-form.png`, `record-list.png`, `detail-view.png`, `admin-view.png`, `dashboard.png`).

### Member Contributions
| Member | Role | Sprint 2 Contribution |
|---|---|---|
| **Kyaw Ye Lin** | Product Lead | Integrated Power BI dashboard analytics and business metrics model. |
| **Tin May Lin** | UX/UI Lead | Authored Lab 11 documentation artifacts ([feature-implementation-status.md](docs/feature-implementation-status.md), [startup-metrics.md](docs/startup-metrics.md), and [prototype-testing-notes.md](docs/prototype-testing-notes.md)). |
| **Phollapat Rodchue** | Technical Lead | Updated web prototype application and added mobile responsiveness across all screens (`prototype/project/`). |
| **Phoochit Jantakam** | Documentation Lead | Maintained weekly logbook ([docs/weekly-logbook.md](docs/weekly-logbook.md)) and root repository overview ([README.md](README.md)). |

### Remaining Work
- Final backend relational database integration.
- Dynamic Chart.js category distribution rendering.
- Final pitch deck presentation and demo video recording.

## Lab 12 - Landing Page and Digital Go-to-Market

### Landing Page
- **Landing page folder/link**: [`prototype/project/index.html`](prototype/project/index.html) (`https://ai10011.github.io/ICT105-Lemon-MVP/prototype/project/index.html`)
- **Main CTA**: **Try Demo / Search Lost Items** (Primary) & **Submit Test Report** (Secondary)
- **Prototype/demo link**: [`prototype/project/index.html`](prototype/project/index.html)

### Go-to-Market Plan
- **Target early users**: University undergraduate students who frequently lose or find everyday items across campus, together with campus security staff and processing clerks.
- **Selected channels**: Class LINE/Discord chat groups, campus QR-code posters, student community Facebook/IG posts, and direct emails to staff.
- **Main marketing message**: *"Recover lost campus items faster with one central platform. Stop searching through scattered group chats."*

### Acquisition Metrics
- **Landing Page Views (M-01)**: Recorded 365 total page views across all channels (`Target >= 100`).
- **CTA Click Rate (M-02)**: Achieved a 41.37% click-through rate (151 clicks / 365 views).
- **Demo Attempts & Active Testers (M-03 / M-05)**: Logged 99 demo task attempts and 48 active testers, resulting in a 13.15% conversion rate.

### Screenshots
- Landing page screenshot: [`screenshots/homepage.png`](screenshots/homepage.png)
- CTA & Form screenshot: [`screenshots/input-form.png`](screenshots/input-form.png)

### Requirement Alignment
The landing page directly supports **FR-01** (Homepage displaying platform value proposition, hero quick search, and reporting action button). The CTAs lead users directly to **FR-03** (Lost/Found Item Reporting Form) and **FR-06** (Campus catalog search and filtering), ensuring alignment with the core system requirements in [`docs/system-requirements.md`](docs/system-requirements.md).

### Member Contributions
| Member Name | Role | Contribution | File / Feature Evidence |
| --- | --- | --- | --- |
| **Phollapat Rodchue** | Technical Lead | Developed the landing page gateway, CSS styling, JavaScript functionality, linkage notes, and content specifications | `prototype/project/index.html`, `css/styles.css`, `js/main.js`, `prototype/landing-page-link.md`, `docs/landing-page-content.md` |
| **Kyaw Ye Lin** | Product Lead | Prepared the Digital Go-to-Market strategy and channel-specific marketing messages | `docs/go-to-market-plan.md`, `docs/marketing-message.md` |
| **Tin May Lin (Mei)** | UX/UI Lead | Designed the acquisition metrics framework and completed the GTM dataset | `docs/acquisition-metrics.md`, `data/acquisition-metrics.csv` |
| **Phoochit Jantakam** | Documentation Lead | Updated the Lab 12 weekly logbook and maintained the root repository documentation | `docs/weekly-logbook.md`, `README.md` |

## Lab 13: Sales Scenario, Demo Script, and User Testing

### Lab 13 Objective
We prepared the final demo scenario, demo script, user testing plan, testing results, and final improvement list before Lab 14.

### Files Completed
- [x] [/docs/sales-scenario.md](docs/sales-scenario.md)
- [x] [/docs/demo-script.md](docs/demo-script.md)
- [x] [/docs/user-testing-plan.md](docs/user-testing-plan.md)
- [x] [/docs/user-testing-results.md](docs/user-testing-results.md)
- [x] [/docs/final-improvement-list.md](docs/final-improvement-list.md)
- [x] [/docs/weekly-logbook.md](docs/weekly-logbook.md)
- [x] [/screenshots/demo-flow.png](screenshots/demo-flow.png)
- [ ] `/screenshots/user-testing-evidence.png` *(N/A – Formal user testing sessions and testing forms were not conducted for this prototype)*

### Prototype / Demo Link
[Lemon MVP Live Prototype](https://ai10011.github.io/ICT105-Lemon-MVP/prototype/project/) (`prototype/project/`)

### Final Preparation Status
**Ready for Lab 14 Final Presentation.** Visual interface flows, responsive styling, and feature requirements (`FR-01` through `FR-16`) are fully implemented in `prototype/project/`. Note that formal user testing sessions and user testing feedback forms were not conducted for this prototype phase.

# Lab 14: Final Prototype Submission & Presentation

## Project Title
**Lemon - Smart Campus Lost-and-Found System**

## Group Members
| Name | Role | Main Contribution | GitHub Evidence |
|---|---|---|---|
| **Kyaw Ye Lin** (`kyawyel68-Crystal`) | Product Lead | Co-authored pitch slides, uploaded final pitch presentation slides (`/pitch/`), GTM strategy, Business Model Canvas, and metrics model. | [Commits](https://github.com/ai10011/ICT105-Lemon-MVP/commits?author=kyawyel68-Crystal) |
| **Phollapat Rodchue** (`ai10011`) | Technical Lead | Co-authored pitch slides, uploaded final prototype screenshots (`/screenshots/`), developed web prototype (`prototype/project/`), and authored `docs/feature-implementation-status.md` and `docs/final-prototype-report.md`. | [Commits](https://github.com/ai10011/ICT105-Lemon-MVP/commits?author=ai10011) |
| **Tin May Lin** (`meirosemary`) | UX/UI Lead | Co-authored pitch slides, designed UI wireframes, authored `docs/final-reflection.md` and `docs/final-submission-checklist.md`, acquisition metrics framework, and responsible IT privacy guidelines. | [Commits](https://github.com/ai10011/ICT105-Lemon-MVP/commits?author=meirosemary) |
| **Phoochit Jantakam** (`Bilal112344`) | Documentation Lead | Co-authored pitch slides, maintained weekly logbook (`docs/weekly-logbook.md`), root repository `README.md` maintenance, risk registers, and system requirements notes. | [Commits](https://github.com/ai10011/ICT105-Lemon-MVP/commits?author=Bilal112344) |

## Project Overview
Lemon is an automated web-based indexing and discovery portal for campus lost-and-found items. It replaces fragmented LINE/Discord chat groups and manual security desk logs with a single search catalog featuring location tagging, visual status tracking, and privacy-masked student contact details.

## Target Users
- **Undergraduate University Students:** Quickly report lost/found items and search catalog by category, campus building, and date.
- **Campus Security & Facility Staff:** Manage reported items, verify claims, update item status (`Pending Review`, `Available`, `Claimed`, `Closed`), and view campus resolution analytics.

## Problem Solved
Over 65% of students abandon their search for lost belongings within 24 hours because current methods are scattered across unindexed chat groups. Lemon provides a centralized digital index that reduces recovery time from days to minutes without physical IoT hardware complexity.

## Final Prototype Links
- **Prototype folder/link:** [`prototype/project/`](prototype/project/) (`index.html`, `form.html`, `records.html`, `detail.html`, `admin.html`, `dashboard.html`)
- **Landing page link:** [`prototype/project/index.html`](prototype/project/index.html)
- **Live Demo Link:** [Lemon MVP Live Prototype](https://ai10011.github.io/ICT105-Lemon-MVP/prototype/project/)

## Final Documentation
- System requirements: [`/docs/system-requirements.md`](docs/system-requirements.md)
- User stories: [`/docs/user-stories.md`](docs/user-stories.md)
- MVP feature list: [`/docs/mvp-feature-list.md`](docs/mvp-feature-list.md)
- Feature implementation status: [`/docs/feature-implementation-status.md`](docs/feature-implementation-status.md)
- Final prototype report: [`/docs/final-prototype-report.md`](docs/final-prototype-report.md)
- Final demo script: [`/docs/final-demo-script.md`](docs/final-demo-script.md)
- Final reflection: [`/docs/final-reflection.md`](docs/final-reflection.md)
- Final submission checklist: [`/docs/final-submission-checklist.md`](docs/final-submission-checklist.md)

## Screenshots
- Landing Page – [`screenshots/homepage.png`](screenshots/homepage.png)
- Report Input Form – [`screenshots/input-form.png`](screenshots/input-form.png)
- Records List – [`screenshots/record-list.png`](screenshots/record-list.png)
- Detail View – [`screenshots/detail-view.png`](screenshots/detail-view.png)
- Admin Management View – [`screenshots/admin-view.png`](screenshots/admin-view.png)
- Dashboard View – [`screenshots/dashboard.png`](screenshots/dashboard.png)
- Power BI Dashboard – [`screenshots/lab11-powerbi-dashboard.png`](screenshots/lab11-powerbi-dashboard.png)

## Pitch
- Final pitch slides & outline: [`/pitch/final-pitch-outline.md`](pitch/final-pitch-outline.md)
- Demo outline: [`/pitch/demo-outline.md`](pitch/demo-outline.md)

## Data and Diagrams
- Final sample data: [`/data/lost_found_sample_records.csv`](data/lost_found_sample_records.csv), [`/data/validation-results.csv`](data/validation-results.csv)
- Final diagrams: [`/diagrams/system-architecture.mmd`](diagrams/system-architecture.mmd), [`/diagrams/data-flow.mmd`](diagrams/data-flow.mmd), [`/diagrams/implementation-flow.mmd`](diagrams/implementation-flow.mmd)

## Final Submission Notes
The final prototype has achieved 100% implementation status across all 16 minimum system requirements (`FR-01` to `FR-16`). All code, documentation, analytics metrics, and pitch materials are finalized and ready for Lab 14 evaluation.