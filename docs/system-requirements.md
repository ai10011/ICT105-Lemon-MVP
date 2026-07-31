# System Requirements

## Minimum Final Prototype Functionalities

These requirements define the minimum prototype functionalities that each ICT105 student group must address in the final prototype.

| Req ID | Minimum Prototype Functionality | What Students Must Show in Final Prototype | Implemented Prototype Module / Screen | Related Feature & User Story |
| --- | --- | --- | --- | --- |
| **FR-01** | **Clear problem-specific homepage or landing screen** | The prototype must clearly show the project title, target user, problem being solved, and main action the user can take. | [index.html](../prototype/project/index.html) | `US-01`, `US-03` / **F01**, **F03** |
| **FR-02** | **Primary user pathway** | The prototype must show how the main user moves through the system from start to finish (Landing → Submit → Directory → Detail → Admin). | `Shared/components.js` | `US-01`–`US-06` / **F01**–**F06** |
| **FR-03** | **User input or data submission feature** | The system must allow users to submit information related to lost/found cases (category, location, date, photo, consent). | [form.html](../prototype/project/form.html) | `US-01`, `US-02`, `US-04` / **F01**, **F02**, **F05** |
| **FR-04** | **Data storage or record management** | Submitted data must be stored, displayed, or simulated through JSON storage and client-side `localStorage`. | [server.js](../prototype/project/server.js) | `US-01`, `US-02` / **F01**, **F02** |
| **FR-05** | **View records / information list** | The prototype must allow users or admins to view existing reported records in a grid. | [records.html](../prototype/project/records.html) | `US-03` / **F03** |
| **FR-06** | **Search, filter, or category function** | The prototype must include real-time keyword search, report type pills, category filters, building dropdowns, and mobile filter accordions. | [records.html](../prototype/project/records.html) | `US-03` / **F03** |
| **FR-07** | **Detail view for each record** | Users must be able to open or view more details about a selected item report via URL parameters (`?id=`). | [detail.html](../prototype/project/detail.html) | `US-05` / **F04**, **F05** |
| **FR-08** | **Status or progress tracking** | The system must show visual color-coded badges (`Pending Review`, `Available`, `Claimed`, `Closed`). | `detail.html`, `admin.html` | `US-05`, `US-06` / **F04** |
| **FR-09** | **Admin or manager function** | The prototype must include an administrative view to update item status, view resolution rate, and manage records. | [admin.html](../prototype/project/admin.html) | `US-06` / **F04**, **F06** |
| **FR-10** | **Basic validation and error prevention** | The system must prevent incomplete input through required HTML5 fields, building checks, date limits, and visual error rings. | `form.html`, `js/form.js` | `US-01`, `US-02` / **F01**, **F02** |
| **FR-11** | **Confirmation or feedback message** | System displays toast notification feedback after submitting reports or updating item statuses. | `Shared/components.js` (`showToast`) | `US-01`, `US-06` / **F01**, **F04** |
| **FR-12** | **Dashboard, summary, or simple analytics view** | Summary view tracking total reports, recovery rate %, pending claims, and category distribution. | [dashboard.html](../prototype/project/dashboard.html) | `US-05` / **F04** |
| **FR-13** | **Basic user interface consistency** | Standardized layout, Tailwind design system tokens, Plus Jakarta Sans typography, and shared header/footer components. | `Shared/header.html`, `styles.css` | All Stories / All Features |
| **FR-14** | **Mobile-friendly or responsive design consideration** | Responsive breakpoint grid, mobile touch menu drawer, stacked hero search, and slide-out admin drawer overlay. | `Shared/components.js`, `styles.css` | All Stories / All Features |
| **FR-15** | **Basic privacy and responsible data handling** | Masked student ID (`65XXXXX`), photo upload guidelines (no human faces), stripped sensitive personal fields, user consent check. | `form.html`, `detail.html` | `US-01`, `US-04`, `US-05` / **F05** |
| **FR-16** | **Final prototype traceability** | Complete traceability mapping connecting system requirements, user stories, feature list, and functional prototype screens. | [feature-implementation-status.md](feature-implementation-status.md) | All Stories / All Features |

---

## Minimum Technical Requirement Fulfillment

The **Lemon MVP** is deployed as an interactive, data-driven web prototype fulfilling all minimum technical criteria:
- **Platform Type:** Interactive Web Application (HTML5, Tailwind CSS, Vanilla JavaScript, Node.js Express REST API server).
- **Interactive Capabilities:** Clickable navigation, report form submissions, real-time catalog search & filtering, administrative status updates, masked student ID displays, and live dashboard analytics counters.
