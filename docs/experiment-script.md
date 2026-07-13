# Experiment Script

## 1. Opening Script

Thank you for participating in our usability test. This is **not a test of you**—we are testing whether our prototype is easy to understand and use.

As you complete each task, please **think aloud** by telling us what you are thinking, what you expect to happen, and anything that seems confusing or difficult.

---

## 2. Test Scenarios

### Scenario A: Student
Imagine you are a university student who has **lost an item on campus**. You want to either:

- Report the lost item, or
- Search the system to check whether someone has already found it.

### Scenario B: Campus Staff
Imagine you are campus staff managing the lost-and-found inventory. You want to:

- Check the dashboard for an overview of current items.
- Use the admin panel to find and update the status of an item.

Use the prototype as you normally would.

---

## 3. Tasks for Tester

### Tasks for Student Tester
| Task No. | Task Instruction | Related Requirement | Expected Result |
|----------|------------------|---------------------|-----------------|
| **T1** | Open the homepage and explain what this system is for. | FR-01, FR-02 | User understands the system's purpose. |
| **T2** | Submit a lost-item report. | FR-03, FR-10, FR-11 | User successfully completes the form and receives a confirmation message. |
| **T3** | Search or filter the list of found items. | FR-05, FR-06 | User finds the relevant item using search or filters. |
| **T4** | Open an item's detail page. | FR-07 | User understands the information shown about the item. |
| **T5** | Check the item's status or learn how to claim it. | FR-08 | User understands the claim process and current status. |

### Tasks for Campus Staff Tester
| Task No. | Task Instruction | Related Requirement | Expected Result |
|----------|------------------|---------------------|-----------------|
| **T6** | Open the dashboard and summarize the current inventory metrics. | FR-12 | Staff understands the summary stats. |
| **T7** | Go to the admin panel and locate a specific reported item. | FR-09 | Staff can easily find the item in the list. |
| **T8** | Update the status of that item (e.g., from Found to Claimed). | FR-08 | Staff successfully updates the status. |

---

## 4. Observation Notes

Record any observations while the tester performs the tasks.

### General Observations Table
| Observation | Task No. | Notes |
|--------------|----------|-------|
| Hesitation or long pauses | T2 | Tester T01 hesitated while filling out the location field. |
| Clicked the wrong button/page | T5 | Tester T04 struggled to navigate to check the item status. |
| Asked questions about the interface | T4 | Tester T03 asked if it was possible to zoom in on the item photo. |
| Confused by labels or navigation | T2, T5 | T01 was unsure about location options; T04 found status labels unclear. |
| Made mistakes during task completion | T5 | Tester T04 misinterpreted what the current item status meant (low task completion score). |
| Positive comments | T1, T3 | Homepage title is very clear (T01); Search functionality was easy to use (T02). |
| Suggestions for improvement | T3, T4, T5 | Add more search filters (T02); Add photo zoom (T03); Explain status meaning better (T04). |

### Task-Specific Notes

#### Student Tasks
- **T1 (Homepage)**: All testers quickly understood the system. T01 praised the "Clear title and main button."
- **T2 (Submit report)**: T01 was "unsure which location option to select" and suggested making the location field clearer.
- **T3 (Search/filter)**: T02 found the search easy but suggested adding more specific search filters.
- **T4 (Detail page)**: T03 appreciated the "clean item layout" but couldn't see details clearly and wanted a photo zoom option.
- **T5 (Check status)**: T04 found the status labels unclear and suggested adding a better explanation of what each status means.

#### Staff Tasks
- **T6 (Dashboard)**: *(No data yet - pending Staff testing)*
- **T7 (Admin location)**: *(No data yet - pending Staff testing)*
- **T8 (Update status)**: *(No data yet - pending Staff testing)*

---
## 5. Closing Questions
- **What was easy to understand?**: The homepage title, main buttons, search function, and overall clean design layout.
- **What was confusing?**: The location field options when submitting a report (T01), and the meaning of the status labels on the detail page (T04).
- **Which feature was most useful?**: The search bar was highlighted as the easiest and most useful feature (T02).
- **What should be improved before the final prototype?**: Add clearer location field options, add more search filters, include a photo zoom feature, and better explain the item statuses.
