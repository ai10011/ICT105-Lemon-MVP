# MVP Experiment Plan

## 1. Group and Project Information
- Group name: Lemon
- Project title: Campus Lost-and-Found System
- Repository link: https://github.com/ICT105-Lemon-MVP
- Main target user: Undergraduate university students and Campus staff
- Prototype platform: Simple web prototype (Frontend with localStorage)

## 2. Experiment Objective
We want to test whether students can independently complete the main lost-item reporting and found-item search workflows, and whether campus staff can effectively use the admin and dashboard views to manage reported inventory without confusion.

## 3. Requirement Scope for the Experiment
| Requirement ID | Requirement Summary | Related Screen/Feature | Tested in This Experiment? |
|---|---|---|---|
| FR-01, FR-02 | Homepage / Landing | `index.html` | Yes |
| FR-03, FR-10, FR-11 | Input / Submission Form | `form.html` | Yes |
| FR-05, FR-06 | Records / Information List | `records.html` | Yes |
| FR-07, FR-08 | Record Detail View | `detail.html` | Yes |
| FR-12 | Dashboard / Summary | `dashboard.html` | Yes |
| FR-09, FR-08 | Admin / Manager View | `admin.html` | Yes |

## 4. MVP Experiment Type
Selected experiment type: Simple web prototype

Reason for selection: We have built a frontend-only web application utilizing `localStorage`. This allows us to rapidly simulate the core logic and real user interactions for reporting and tracking items without deploying a full backend database.

## 5. Test Users
| Test User Group | Number of Testers | Why They Are Relevant |
|---|---:|---|
| Students | 4 | They are the primary target users who frequently lose or find items on campus. |
| Campus Staff | 1 | They act as the administrative users handling inventory management via the dashboard and admin views. |

## 6. Experiment Procedure Summary
1. Give testers a link to the prototype environment.
2. Ask student testers to perform specific operational tasks: identify the app's purpose on the homepage, submit a lost item report, search for an item, and check its details.
3. Ask the staff tester to use the dashboard and admin view to manage reported items and update statuses.
4. Observe if they can complete the tasks without help, measuring confusion points and task completion times.
5. Have testers fill out a post-experiment feedback form regarding clarity, usefulness, and suggested improvements.

## 7. Expected Learning
We will learn if the current user interface for the reporting form, search functionality, and administrative tools are intuitive enough. Based on the findings, our team will decide whether to adjust specific form elements, search filters, or admin controls before finalizing the prototype design.
