# Lab 02 Opportunity Scanning

## Ideas Reviewed from Lab 1

| Idea | Problem Area | Target User | Current Alternative | Initial Technology Direction |
| :--- | :--- | :--- | :--- | :--- |
| **Idea 1: Smart Campus Lost-and-Found System** | Students lose items on campus and do not know where to report or search for them. | University students, security staff, and administrative staff. | Posting in chat groups or asking security manually. | HTML/CSS/JS frontend, database or Google Sheets backend, image upload, and search/filter functions. |
| **Idea 2: Digital Notice Board** | Scattered event information across the university. | University students. | Line Chats in the university. | Web or mobile app with a simple catalog display and an SMS alerting API. |
| **Idea 3: Student Skill-Share & Project Matchmaker** | Students struggle to find peers outside their friend circles with complementary skills for startup teams or assignments. | University students looking for project collaborators. | Random assignments by professors or posting on massive, unstructured social media forums. | Web dashboard with data search filtering components and a simple match notification system. |
| **Idea 4: Campus Navigation** | New and current students or visitors struggle to navigate the large Rangsit University campus efficiently. | Rangsit University students, staff, lecturers, visitors, and parents. | Static campus maps or asking for directions from others. | Web application (HTML/CSS/JS or React), Google Maps API (or custom map system), and a Firebase/MySQL backend. |

## Opportunity Discovery Table

| No. | Observed Problem | Target User | Current Alternative | Possible IT Solution | Feasible Technology |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1** | Items lost on campus take days to find due to lack of a centralized reporting system. | Students, security guards, admin staff. | Posting pictures in unorganized chat groups or physical lost boxes. | A web-based submission form with an item status dashboard (Lost / Found / Claimed). | Frontend: HTML/CSS/JS or Flutter Web.<br>Backend: Firebase Storage (for images) & Firestore. |
| **2** | Students miss deadlines or campus events because announcements are scattered across different group chats. | Active students, club organizers, university faculty. | Scrolling through noisy Line group chats or looking at physical posters. | A unified digital billboard app where organizers post events and students can filter by category or register. | Web/Mobile Application, Node.js backend, or integration with a third-party SMS/Notification API. |
| **3** | Finding teammates with specific technical or design skills outside of existing friend groups is difficult. | Group project leaders, startup-minded students. | Random assignment by professors or unorganized posts on broad social media groups. | A skills matchmaking profile catalog with advanced query filtering based on tags. | React or Flutter frontend, relational database (MySQL/PostgreSQL) or simple mock JSON filtering. |
| **4** | New students and visitors get lost looking for specific classrooms, labs, or available parking zones on a large campus. | RSU freshmen, visitors, guest lecturers. | Relying on static image maps or stopping strangers to ask for directions. | An interactive map web dashboard with searchable room numbers, building indexes, and parking filters. | Leaflet.js, Google Maps API, Flutter with Map coordinates, and Firebase for saving location data points. |

## Technology Feasibility Mapping

| Idea | Prototype Type | Tools Needed | Data Needed | Difficulty | Feasible? |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Idea 1: Lost & Found** | Functional Web Prototype | HTML/JS or Flutter Web, Firebase Auth, Firestore. | Mock list of items (description, category, date, image URL, contact info). | **Medium** (requires handling file uploads for photos). | **Yes** — Very practical for a semester project framework. |
| **Idea 2: Digital Board** | Frontend-focused Dashboard | Web app or Flutter, basic database, notification services. | Event details (title, organizer, date, venue, registration links). | **Low to Medium** (SMS APIs require configuration, but core catalog is easy). | **Yes** — Highly achievable using simple card layouts. |
| **Idea 3: Matchmaker** | Data-driven Web UI | React/Vue or Flutter, MySQL/Firebase, Skill tag libraries. | Student profiles (name, skills, interests) and project listings (roles needed). | **Medium** (requires dynamic data filtering and relational structures). | **Yes** — Can be built perfectly using simple query parameters. |
| **Idea 4: Campus Nav** | Interactive Map App | Web App, Google Maps API / Leaflet.js, Firebase. | Geolocation coordinates of RSU buildings, room indexes, and building photos. | **High** (mapping coordinate logic and routing requires precision engineering). | **Yes** — Highly feasible if using established map APIs. |
