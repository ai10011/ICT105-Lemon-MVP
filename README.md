# ICT105-Lemon-MVP
Semester-long IT startup MVP project for ICT105 Fundamental Technology Entrepreneurship.
# Project Venture Workspace

## Course Information
- **Course Code:** ICT105
- **Course Name:** Fundamental Technology Entrepreneurship
- **Instructor:** Dr. Herison Surbakti
- **Project Type:** 14-Labs Continuous IT Startup MVP Development

## Team Name
[Lemon]

## Team Members and Roles
| Name | Role | Responsibility |
|---|---|---|
| Crystal | Product Lead | Define problem, target users, and value proposition |
| Phollapat Rodchue | Technical Lead | Manage repository and prototype feasibility |
| Tin May Lin | UX/UI Lead  | Design interface |
| Phoochit Jantakam | Documentation Lead | Maintain documentation |

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

## Lab 07: MVP Experiment Design

### Experiment Objective
Briefly explain what the team wants to test before deeper implementation.

### Critical Assumptions
List the top 3 assumptions.

### MVP Experiment Type
**Selected Experiment Type:** Simple Web Prototype

**Reason for selection:** We have built a frontend-only web application utilizing `localStorage`. This allows us to rapidly simulate the core logic and real user interactions for reporting and tracking items without deploying a full backend database.

### Success Metrics
List measurable success metrics.

### Files Added in Lab 07
- `/docs/mvp-experiment-plan.md`
- `/docs/critical-assumptions.md`
- `/docs/experiment-script.md`
- `/docs/success-metrics.md`
- `/docs/feedback-form.md`
- `/docs/weekly-logbook.md`

### Connection to Final Prototype
Explain how this experiment will guide the final prototype.
