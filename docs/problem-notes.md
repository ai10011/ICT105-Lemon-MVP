# Problem Notes

## Selected Case
**SmartCampus Centralized Lost-and-Found Tracking System** (A web-based database directory designed to centralize lost-and-found items, replacing disjointed social media channels with structured category sorting, location filters, and image logs).

## Target Respondents
| Respondent Type | Why This Respondent Matters | Planned Number | Actual Number |
|---|---|---:|---:|
| **Undergraduate Students** | The primary end-users who experience item loss and represent the main source of both "finders" and "losers" on campus. | 15 | |
| **University Facility / Security Staff** | The gatekeepers who manage physical holding bins, log incoming items, and understand the administrative bottlenecks of the current system. | 2 | |
| **Student Club Administrative Leads** | Secondary administrators who often handle localized lost-and-found items within specific buildings or student centers. | 0 | |

## Observed / Reported Problem
University students frequently lose vital personal belongings (such as keys, student IDs, and tablets) on campus. Because tracking alerts and notifications are scattered across highly disjointed, unstructured social media channels, students experience significant time delays and friction trying to locate their items. Consequently, found items often sit completely uncollected in physical security lockups.

## Current Alternatives or Workarounds
| Workaround | Who Uses It? | Weakness / Pain | Evidence Source |
|---|---|---|---|
| **Unstructured Chat Groups** (LINE / Discord) | Students & Club Leads | Messages quickly get buried in the chat stream; no search or filtering features; layout is chaotic and lacks image structures. | Initial Project Proposal & Lab 03 Plan |
| **Manual Physical Hub Searches** | Students | Requires physically walking to multiple campus security desks; highly time-consuming; dependent entirely on staff operating hours. | Initial Project Proposal & Lab 03 Plan |
| **Physical Notice Boards** | Students & Staff | Low visibility; text descriptions can be vague; zero real-time updates when an item is successfully claimed. | Initial Project Proposal & Lab 03 Plan |

## Repeated Pain Points
| Pain Point | Number of Mentions | Example Evidence | Severity |
|---|---:|---|---|
| **Information Fragmentation** | | Alerts are scattered across multiple LINE groups, Discord channels, and bulletin boards. | **High** |
| **Excessive Search Friction** | | Students waste hours manually bouncing between physical security offices and scrolling chat histories. | **Medium** |
| **Unclaimed Inventory Pileup** | | Security staff reporting that found items sit in storage bins indefinitely because owners don't know where to look. | **High** |

## Consequences
| Consequence | Example | Evidence Strength |
|---|---|---|
| **Academic & Daily Disruption** | A student loses an ID card or tablet, preventing them from entering classrooms, taking exams, or accessing critical study materials. | **Strong** (Logical operational risk) |
| **Financial Loss** | Valuable electronics or wallets are never reclaimed, forcing students into expensive, unnecessary replacements. | **Strong** (Direct financial impact) |
| **Administrative Waste** | Campus security staff spend valuable time sorting, logging, and storing items that accumulate dust in storage closets. | **Medium** (To be validated by staff interviews) |

## Notes for MVP Direction
What should the team consider when designing the MVP later?

* **The Core Habit Challenge:** The primary hurdle is behavioral. The MVP must answer: *Will users open a dedicated web platform when their muscle memory tells them to use LINE or Discord?* The user interface must be significantly faster and less painful than typing a message in a chat group.
* **Low-Code Feasibility:** Keep the initial validation lightweight. Use a **Landing Page Form-Based MVP** (e.g., Typeform, Google Forms, or Softr) mapped directly to an **Airtable item search directory**. This allows structured sorting (Electronics, Wallets) by time and location without writing a complex backend early on.
* **No-IoT Scope Creep:** Ensure the team resists adding physical proximity sensors, Bluetooth tags, or RFID tracking. Keep the scope strictly bound to manual user-driven data inputs and relational tables to fit comfortably within the 14-week timeline for a 3-member team.
* **Authentication Friction:** Keep security minimal but functional. Rely on a simple web form data schema for authentication rather than investing heavy development time into advanced cryptography or penetration testing scopes.
