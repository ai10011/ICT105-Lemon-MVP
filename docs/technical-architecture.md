# Technical Architecture

## Project Title
Lemon - Smart Campus Lost-and-Found System

## 1. Selected Prototype Platform
- Frontend + localStorage or JSON

## 2. Architecture Decision
This platform is highly suitable for our current scope and skills because it allows for rapid, iterative development of the user interface and core application logic without the overhead of configuring a live backend server or relational database. By utilizing HTML, CSS, and JavaScript, we can focus on building a robust frontend experience. Leveraging JSON serialized into the browser's `localStorage` perfectly satisfies the MVP requirements for data persistence, allowing us to immediately test critical features like the auto-match engine and claim workflows in a controlled environment.

## 3. Main Components

| Component | Description | Tool / Technology | Related Requirement |
|---|---|---|---|
| User Interface | The overall layout, navigation, and distinct views for Finder, Loser, and Admin roles. | HTML5, CSS3, JavaScript | Role-based UI access and responsive design |
| Data Input Form | Forms capturing detailed information (category, location, description) for lost or found items. | HTML Forms, JS DOM Manipulation | 1.0 Submit Item Report |
| Data Storage | Local persistence of item records and simulated user sessions. | JSON, browser `localStorage` | Data persistence and state management |
| Record List | A searchable and filterable display of all unresolved lost and found records. | JavaScript (Array methods, DOM rendering) | 3.0 Query & Search Index |
| Detail View | An expanded view showing comprehensive details of a specific item for verification purposes. | HTML, JavaScript | View Item Information |
| Admin Function | A portal for desk staff to verify claims and update record statuses (e.g., to "Claimed" or "Returned"). | JavaScript (State updates) | 4.0 Manage Claim Verification |
| Dashboard / Summary | A high-level overview showing system statistics and recent activity for administrators. | HTML, CSS, JavaScript | Admin Portal Dashboard |

## 4. What Will Be Fully Implemented?
*   Complete frontend user interfaces for all three distinct user roles (Student Finder, Student Loser, Admin Desk Staff).
*   Client-side CRUD (Create, Read, Update, Delete) operations for lost and found records.
*   Data persistence using JSON strings saved to `localStorage`.
*   Search and filtering functionality to query matching records.
*   The "Auto-Match Engine" logic (executed locally) to highlight potential matches between lost and found items.

## 5. What Will Be Simulated?
*   **Authentication & Authorization:** Real login mechanisms will be simulated; users will likely select a role (Admin/Student) from a dropdown or landing page to bypass real authentication.
*   **Backend Server/Database:** All server routing, API endpoints, and relational database management are simulated via frontend JavaScript and local JSON files.
*   **Push/Email Notifications:** The "Trigger Potential Match Notification" will be simulated using in-app UI alerts or console logs rather than actual emails/SMS.

## 6. Final Prototype Risk
**Biggest Technical Risk:** 
The primary risk is data volatility and isolation. Because `localStorage` is tied to a specific browser on a single device, collaborative testing (e.g., one person submitting a "lost" item on their phone while an admin views it on a desktop) is impossible. Furthermore, complex fuzzy-matching logic can become resource-heavy if executed entirely on the client-side with a large dataset.

**Mitigation Strategy:**
We will mitigate the testing limitation by pre-loading a robust JSON file (`data.json`) containing diverse sample records into the application on initialization. This ensures every tester has a populated system to evaluate. To mitigate future scalability risks, the code will be written modularly, separating the "Data Layer" from the "Presentation Layer" so that `localStorage` calls can easily be replaced with actual API `fetch()` requests when migrating to a real backend later.
