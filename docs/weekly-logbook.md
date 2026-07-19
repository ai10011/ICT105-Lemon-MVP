# Weekly Venture Logbook

## Lab 1: Lab Setup and IT Venture Repository

### What We Completed
1. Formed our startup team and defined primary tracking roles.
2. Initialized our GitHub repository using the standardized course format.
3. Formulated and structured the placeholder directories and technical documentation logs.

### What We Learned
1. Found out how to configure custom folders within GitHub via virtual file paths.
2. Understood how Markdown builds clear engineering documentation tables.
3. Grasped the significance of running an agile, 14-week single continuous project model.

### Problems or Difficulties
1. Encountered initial confusion on creating nested folders without a terminal terminal, resolved via the file path naming trick.
2. Sorting out individual roles took continuous negotiation over varying student skill capabilities.

### Evidence of Work
- GitHub repository link: `https://github.com/ai10011/ICT105-Lemon-MVP`
- File created: docs/team-profile.md, docs/idea-log.md, docs/weekly-logbook.md

### Decision Made This Week
We decided to prioritize local campus and student problems for our preliminary three venture ideas to ensure easy customer feedback loops.

### Plan for Next Week
Conduct opportunity scanning, evaluate our initial three ideas, and pin down the exact problem space for Lab 2.

## Lab 02: IT Opportunity Scanning

### What We Completed
1. Reviewed our initial business definitions from Lab 1 to ensure zero integration with prohibited tech (IoT sensors, advanced cyber setups).
2. Analyzed 6 real-world software opportunities using the structural Problem-User-Solution matrix.
3. Implemented a NUF scoring spreadsheet to systematically isolate our semester project path.
4. Update and add a new collaborater in our team.

### Selected Opportunity
SmartCampus Centralized Lost-and-Found Tracking System

### Why We Selected It
The system scored a 15/15 on our NUF matrix. It targets a clear, repetitive user pain point easily verified by a student cohort, and can be built completely using scalable web forms and relational database components.

### What We Rejected
We explicitly rejected the *Clinic Queue Booking Portal Prototype*. While highly useful, simulating live dynamic queue synchronization and real-time algorithmic delays presented elevated engineering risks that fell outside our baseline frontend scope.

### What We Learned
1. Understood that entrepreneurial engineering relies on solving real user pain points, not deploying advanced technology hype.
2. Learned how to utilize the NUF framework to scientifically rank different business hypotheses.
3. Realized that constraints on physical hardware force a team to maximize UI design efficiency and data logic.

### Evidence of Work
- Opportunity scan file: `/docs/opportunity-scan.md`
- NUF scoring file: Documented within `/data/opportunity-scoring.xlsx`
- Selected opportunity file: `/docs/selected-opportunity.md`
- GitHub issue tracking profile: Under my Issues

### Plan for Lab 03
Our team will build and format 15 targeted customer interviews inside `/docs/customer-discovery-questions.md` to run empirical validation checks with students on-campus.

## Lab 03: Customer Problem Discovery

### What We Completed
1. **Defined Target Respondents:** Identified specific user segments relevant to our project to ensure we gather insights from individuals experiencing the core problem.
2. **Formulated Non-Leading Discovery Questions:** Created a set of 8–10 customer discovery questions focused heavily on current user behavior, pain points, existing workarounds, and negative consequences rather than pitching our solution prematurely.
3. **Structured Repository Evidence Files:** Formatted and pushed the foundational documentation templates to GitHub, including `/docs/customer-questions.md`, `/docs/problem-notes.md`, and the analytical `/docs/assumption-evidence-table.md`.

### What We Learned About the Problem
1. **Opinion vs. Fact Split:** We discovered that several features we initially assumed were critical were actually just team biases; users prioritize immediate visibility and reliable notifications over complex configuration dashboards.
2. **Inefficiency of Current Alternatives:** Users are relying on highly fragmented workarounds (e.g., decentralized chat groups, physical boards, or word-of-mouth) which frequently lead to missed notifications, lost records, and unresolved issues.
3. **Severe Friction Points:** The primary pain point is not a lack of effort by users, but the high time-to-resolution and fragmentation of existing manual methods, which cause significant anxiety or disruption.

### What Evidence We Collected
- **Number of respondents/interviews:** 15 (Data collection phase active/Target planning complete)
- **Evidence file:** `/data/raw-responses.xlsx` (Placeholder spreadsheet matrix initialized for incoming interview metrics)
- **Key repeated pattern:** Initial baseline assessments highlight that users experience critical communication delays and data fragmentation across existing communication workarounds.

### What We Changed Based on Evidence
*   **Pivot from Pitching to Listening:** Shifted our customer inquiry script away from solution-oriented prompts (e.g., *"Would you use our application?"*) toward discovery-oriented anchors (e.g., *"Walk me through the last time you ran into this specific bottleneck"*), ensuring we validate real-world user struggles.
*   **Database Schema Adjustments:** Scaled back anticipated baseline assumptions regarding features to focus heavily on capturing chronological logs, category classification, and status mapping requested during preliminary problem mapping.

### Problems or Difficulties
1. **Formulating Neutral Questions:** It was initially challenging to draft questions that did not lead the respondent into validating our solution or implicitly asking for approval.
2. **Scheduling Coordination:** Aligning target respondent schedules with team availability within the strict constraints of the lab timeline required tight logistics and task re-assignments.

### Evidence of Work
- **GitHub repository link:** `https://github.com/ai10011/ICT105-Lemon-MVP`
- **Customer questions file:** `/docs/customer-questions.md`
- **Raw responses file:** `/data/raw-responses.xlsx`
- **Assumption-evidence table:** `/docs/assumption-evidence-table.md`
- **Commit link:** `https://github.com/ai10011/ICT105-Lemon-MVP/commits/main/`

### Plan for Lab 04
In Lab 04, the team will synthesize the collected empirical evidence to systematically define our target customer segment. We will narrow down broad demographics into an analytical user persona reflecting genuine user behaviors, constraints, and pain points uncovered during discovery. Following this, we will write agile user stories mapped directly to these verified user struggles, anchoring our forthcoming MVP development entirely around validated evidence rather than personal assumptions.

## Lab 04 - User Persona, Requirements, and User Stories

### Group Information
* **Course:** ICT105 Fundamental Technology Entrepreneurship
* **Lab:** Lab 04 - User Persona, Requirements, and User Stories
* **Group Name:** Lemon
* **Repository Link:** `https://github.com/ai10011/ICT105-Lemon-MVP`
* **Date:** 24/06/2026

### 1. Work Completed Today
| Member Name | Contribution | GitHub Evidence (Commit/Issue/PR Link) |
| :--- | :--- | :--- |
| **Kyaw Ye Lin** | Created the user persona and wrote the user stories. | `https://github.com/ai10011/ICT105-Lemon-MVP/commits/main/` |
| **Phollapat Rodchue** | Prioritized the MVP feature list, defined system requirements, updated the weekly logbook, and updated the README. | `https://github.com/ai10011/ICT105-Lemon-MVP/commits/main/` |
| **Tin May Lin** | Designed the user flow and use case diagrams based on the system requirements. | `https://github.com/ai10011/ICT105-Lemon-MVP/commits/main/` |
| **Phoochit Jantakam** |  |  |

### 2. Main Decisions
* **Primary target user:** University students who frequently lose or find personal items on campus.
* **Main persona:** Justin, First-Year University Student.
* **Most important problem:** Lost-and-found information is highly fragmented across disconnected channels (LINE, Facebook, etc.), causing a time-consuming search process and high abandonment rates.
* **Must-have requirements:** F01 (Report Lost Item), F02 (Report Found Item), F03 (Search and Filter), F04 (Item Status Updates).
* **Features included in MVP:** Core reporting forms (lost/found), database search and filtering, and item status tracking.
* **Features postponed:** In-App Messaging (US-08), Automated Notifications (US-07), AI Image Matching, and Reward Systems.

### 3. Requirement Changes / Clarifications
* We decided to prioritize high-frequency, high-impact campus essentials (Student IDs, access cards, USB drives, calculators) over low-value items.
* Based on privacy concerns found in Lab 03, we clarified that users will not share personal phone numbers publicly; the communication approach will rely on secure methods like anonymized in-app messaging (postponed to a later phase).

### 4. Problems Encountered
* **Technical problem:** Initially lacked proper visual mapping of user interactions, but this was resolved once Tin May Lin successfully drafted the user flow and use case diagrams. 
* **Team coordination problem:** Managing evenly distributed workloads required some real-time adjustments during this week's lab tasks.
* **Evidence/requirement problem:** Needed to make sure that our user stories (US-01 to US-06) were strictly traceable back to the pain points discovered in our Lab 03 interviews without feature-creep.

### 5. Next Actions Before Lab 05
| Task | Owner | Deadline | GitHub Issue |
| :--- | :--- | :--- | :--- |
| Finish up MVP feature list and review system requirements | Phollapat Rodchue | 05/07/2026 | [Issues Board](https://github.com/ai10011/ICT105-Lemon-MVP/issues) |
| Finish up user stories and user persona | Kyaw Ye Lin | 05/07/2026 | [Issues Board](https://github.com/ai10011/ICT105-Lemon-MVP/issues) |
| Finish up use case diagram and flowchart | Tin May Lin | 05/07/2026 | [Issues Board](https://github.com/ai10011/ICT105-Lemon-MVP/issues) |
| Finish up weekly logbook and README | Phoochit Jantakam | 05/07/2026 | [Issues Board](https://github.com/ai10011/ICT105-Lemon-MVP/issues) |

# Weekly Logbook - Lab 5 Reflection

## What We Completed Today
- [x] Reviewed Lab 04 requirements
- [x] Defined product concept
- [x] Mapped features to requirements
- [x] Created required wireframe screens
- [x] Created user flow diagram
- [x] Built clickable prototype draft or screen navigation plan
- [x] Updated GitHub repository

## Member Contributions
| Member Name | Contribution | Evidence / Commit Link |
|---|---|---|
| **Kyaw Ye Lin** | Worked on `/docs/product-concept.md` and `/docs/feature-requirement-mapping.md` | [product-concept.md Link](../docs/product-concept.md) |
| **Phollapat Rodchue** | Worked on Wireframes and dataset mapping structures | [wireframes/ Link](../wireframes/) |
| **Tin May Lin** | Worked on `/docs/weekly-logbook.md` and primary root `README.md` updates | [weekly-logbook.md Link](../docs/weekly-logbook.md) |
| **Phoochit Jantakam** | Worked on `/docs/wireframe-specification.md` and `/docs/wireframe-usability-checklist.md` | [wireframe-specification.md Link](../docs/wireframe-specification.md) |

## Decisions Made
| Decision | Reason | Related Requirement |
|---|---|---|
| Built the clickable prototype using clean HTML structure (`index.html`, `form.html`, `admin.html`, etc.) | To provide a more realistic interaction experience, ensure cross-device consistency, and allow seamless transition into front-end build pipelines. | Clickable Prototype Draft |
| Included distinct wireframe views for `admin`, `dashboard`, `record-list`, `detail`, and `input-form` | To ensure the user interface covers 100% of the mandatory functional steps required to safely report and claim records without manual bottlenecks. | Wireframe Screens |
| Utilized a structured data layer via `lost-and-found-sample-records.csv` to format view parameters | To guarantee that the placeholders and user text fields present on the interface precisely represent real-world data shapes we track. | Product Concept |

## Problems Found
* **Field Alignment Discrepancies:** Aligning the exact input tags in the `input-form` wireframe logic with the storage columns outlined inside our sample records CSV caused initial inconsistencies. We solved this by standardizing the forms to match the CSV's explicit key parameters.
* **Navigation Flow Optimization:** Ensuring transparent routing states between the `index`, `dashboard`, and item `detail` views in the HTML layout so that users never get stuck in dead-end loops.

## Next Steps Before Lab 06
* Review the `wireframe-usability-checklist.md` to guarantee every template strictly adheres to established human-interface guidelines.
* Finalize item attributes in `lost-and-found-sample-records.csv` to establish a clean relational mockup baseline.
* Begin mapping our Business Model Canvas (BMC) and documenting core infrastructure plans to prepare for the Lab 06 architectural review.
  
# Weekly Logbook - Lab 06

## Group Name

Lemon

## Project Title

Smart Campus Lost-and-Found System

## Date

08/07/2026

## Member Contributions

| Member Name | Contribution | Evidence / Commit Link |
|---|---|---|
| **Kyaw Ye Lin** | Worked on `/docs/business-model-canvas.md` and `/docs/feature-value-mapping.md` | `https://github.com/ai10011/ICT105-Lemon-MVP/commits/main/` |
| **Phollapat Rodchue** | Worked on `/docs/weekly-logbook.md` and `README.md` | `https://github.com/ai10011/ICT105-Lemon-MVP/commits/main/` |
| **Tin May Lin** | Worked on `/diagrams/system-architecture.png` (and/or `.mmd`) and `/diagrams/data-flow.png` (and/or `.mmd`) | `https://github.com/ai10011/ICT105-Lemon-MVP/commits/main/` |
| **Phoochit Jantakam** | Worked on `/docs/technical-architecture.md` and `/docs/data-structure.md` | `https://github.com/ai10011/ICT105-Lemon-MVP/commits/main/` |

## Decisions Made Today

1. Business model decision: `docs/business-model-canvas.md`
2. Technical architecture decision: `docs/technical-architecture.md`
3. Data structure decision: `docs/data-structure.md`
4. Diagram decision: `diagrams/data-flow.mmd` and `diagrams/system-architecture.mmd`

## Problems or Risks Found

- The technical stack choice presents a risk as the team is still learning HTML coding fundamentals, which might slow down the initial implementation of the frontend data flow.
- Managing git merge conflicts is a risk this week since multiple members are simultaneously uploading separate documentation and diagram files to the repository.

## Next Actions Before Lab 07

*   Discuss and finalize the UX/UI design.
*   Discuss and clarify the core features to be included on the website.
*   Learn HTML coding fundamentals to prepare for front-end development.

## Lecturer / TA Notes

# Weekly Logbook - Lab 07

## Group Information
- Group name: Lemon
- Project title: Lost and found app
- Date: 13 Jul 2026
- Repository link: https://github.com/ai10011/ICT105-Lemon-MVP

## What We Completed Today
- [x] Reviewed requirements, user stories, MVP features, architecture, and wireframes
- [x] Identified critical assumptions
- [x] Selected MVP experiment type
- [x] Defined test users and success metrics
- [x] Prepared experiment script and feedback form
- [x] Updated GitHub repository and README

## Member Contributions
| Member Name | Contribution | Evidence/Commit/Issue Link |
|---|---|---|
| **Tin May Lin** | Added initial MVP experiment plan files and updated `mvp-demo-link.md` | `https://github.com/ai10011/ICT105-Lemon-MVP/commits/main/` |
| **Phollapat Rodchue** | Updated `docs/success-metrics.md` and `docs/critical-assumptions.md` with staff/admin metrics | `https://github.com/ai10011/ICT105-Lemon-MVP/commits/main/` |
| **Kyaw Ye Lin** | Completed `docs/experiment-script.md` with observations and feedback data | `https://github.com/ai10011/ICT105-Lemon-MVP/commits/main/` |
| **Phoochit Jantakam** | Linked HTML prototype navigation pages and updated `mvp-demo-link.md` instructions | `https://github.com/ai10011/ICT105-Lemon-MVP/commits/main/` |

## Key Decisions
| Decision | Reason | Evidence/Requirement Link |
|---|---|---|
| Selected Simple Web Prototype for MVP Experiment | Allows rapid testing of core user flows (report, search, admin dashboard) using static HTML pages linked together. | `docs/mvp-experiment-plan.md` |
| Expanded Experiment Scope to Include Campus Staff Persona | Critical to validate admin inventory management (FR-08, FR-09, FR-12) alongside student reporting flows. | `docs/success-metrics.md`, `docs/critical-assumptions.md` |
| Structured Quantitative & Qualitative Feedback Form | Enables measuring task completion rate, form accuracy, and usability scores against defined decision rules. | `docs/feedback-form.md`, `data/feedback-form.csv` |

## Problems and Next Action
| Problem | Next Action | Responsible Member |
|---|---|---|
| Prototype currently consists of static HTML pages without `localStorage` state updates across page navigations. | Implement `localStorage` JavaScript logic to dynamically save, display, and update item statuses. | Phollapat Rodchue |
| Testers reported minor confusion with location dropdown choices and item status labels during usability testing. | Refine location input options, add explanatory tooltips for status labels, and add additional search filters. | Crystal (Kyaw Ye Lin) / Phoochit Jantakam / Tin May Lin |

# Weekly Logbook - Lab 08

## Group Information
- Group name: Lemon
- Project title: Smart Campus Lost-and-Found System
- Repository link: https://github.com/ai10011/ICT105-Lemon-MVP
- Lab date: 15 Jul 2026

## Work Completed Today
- [x] Reviewed Lab 07 MVP experiment plan
- [x] Prepared validation dataset structure
- [x] Created or updated analytics sheet
- [x] Wrote customer validation summary
- [x] Wrote analytics insights
- [x] Wrote MVP decision
- [x] Updated README
- [x] Created GitHub issues for prototype improvements

## Member Contributions
| Member Name | Contribution | GitHub Evidence |
|---|---|---|
| **Tin May Lin** | Prepared validation dataset (`data/validation-results.csv`) and created GitHub issues for prototype improvements | `https://github.com/ai10011/ICT105-Lemon-MVP/commits/main/` |
| **Phollapat Rodchue** | Calculated usability metrics and authored `docs/analytics-insights.md` | `https://github.com/ai10011/ICT105-Lemon-MVP/commits/main/` |
| **Kyaw Ye Lin** | Authored `docs/customer-validation-summary.md` and synthesized qualitative user feedback | `https://github.com/ai10011/ICT105-Lemon-MVP/commits/main/` |
| **Phoochit Jantakam** | Formulated decision rationale in `docs/mvp-decision.md` and updated `README.md` | `https://github.com/ai10011/ICT105-Lemon-MVP/commits/main/` |

## Problems Found
- **Dashboard Navigation**: Testers struggled to locate the summary dashboard link (`FR-12`) during tasks.
- **Status Clarity**: Text-only status labels caused confusion regarding whether an item was pending or claimed (`FR-08`).
- **Form Input Overhead**: Excessive mandatory required fields led to completion delays during lost item report submissions (`FR-10`).
- **Filter Precision**: Search location filters lacked building-specific dropdown options (`FR-06`).

## Next Actions
- Reposition the summary dashboard link directly into the main top header navigation bar (`FR-12`).
- Deploy visual color-coded badges for item claim tracking (`FR-08`).
- Reduce mandatory input fields on lost/found report forms and add helper tooltip guidance (`FR-10`).
- Add campus building names to search location filter options (`FR-06`).

# Weekly Logbook - Lab 09

## Group Name

Lemon

## Date

20/07/2026

## Members Present

- Kyaw Ye Lin
- Phollapat Rodchue
- Tin May Lin
- Phoochit Jantakam

## Work Completed Today

- Data inventory: Completed the project data inventory and classified collected data according to personal data, sensitive data, visibility, and responsible handling.
- Privacy review: Reviewed data collection, storage, access control, data minimization, and responsible data handling practices.
- Ethical review: Completed the legal and ethical checklist and reviewed responsible use of user data.
- IP review: Documented original work and third-party assets used in the prototype, including licenses and permissions.
- Security review: Conducted a basic security risk assessment covering form validation, data visibility, admin access, status updates, and file uploads.
- Risk register: Identified privacy, security, operational, and data quality risks together with mitigation actions.
- Requirements update note: Reviewed system requirements and updated documentation to improve privacy, security, and responsible data handling.

## Member Contributions

| Member Name | Contribution | GitHub Evidence |
|---|---|---|
| **Tin May Lin** | Authored `docs/legal-ethical-checklist.md`, `docs/privacy-and-data-protection.md`, and `docs/security-risk-check.md`. | `https://github.com/ai10011/ICT105-Lemon-MVP/commits/main/` |
| **Phollapat Rodchue** | Prepared `data/data-inventory.csv`, `data/risk-register.csv`, `data/third-party-assets-register.csv`, and created `diagrams/privacy-security-review.png` and `screenshots/privacy-security-review.png`. | `https://github.com/ai10011/ICT105-Lemon-MVP/commits/main/` |
| **Kyaw Ye Lin** | Authored `docs/data-handling-policy.md`, `docs/ip-and-third-party-assets.md`, updated `docs/weekly-logbook.md`, and `README.md`. | `https://github.com/ai10011/ICT105-Lemon-MVP/commits/main/` |
| **Phoochit Jantakam** | Authored `docs/risk-register.md`, `docs/updated-requirements-note.md`, and `docs/user-consent-statement.md`. | `https://github.com/ai10011/ICT105-Lemon-MVP/commits/main/` |

## Decisions Made

| Decision | Reason | Evidence / Requirement |
|---|---|---|
| Completed a project data inventory. | To identify what information is collected and how it should be handled responsibly. | `data/data-inventory.csv` |
| Implemented a data handling policy. | To support privacy awareness and satisfy **FR-15: Basic privacy and responsible data handling**. | `docs/data-handling-policy.md` |
| Reviewed intellectual property and third-party assets. | To ensure external resources are properly documented and licensed. | `docs/ip-and-third-party-assets.md` |
| Performed a security and risk review. | To identify potential risks and define mitigation strategies before the final prototype. | `docs/security-risk-check.md`, `docs/risk-register.md` |
| Updated project documentation. | To keep privacy, security, and project documentation consistent across the repository. | `docs/updated-requirements-note.md`, `README.md` |

## Issues / Blockers


## Next Action Before Lab 10

