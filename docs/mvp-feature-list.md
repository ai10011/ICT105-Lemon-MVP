# Lab 04 - MVP Feature List

### **MVP Decision Rule**
The Minimum Viable Product (MVP) will only include features strictly necessary to allow users to report, find, and update the status of lost or found items on campus. 

---

### **MoSCoW Prioritization**

| Feature ID | Feature Name | Description | Priority |
| :--- | :--- | :--- | :--- |
| **F01** | Report Lost Item | Users can submit a detailed form (item name, description, date, location) for an item they have lost. | Must-Have |
| **F02** | Report Found Item | Users can submit a detailed form for an item they have found. | Must-Have |
| **F03** | Search and Filter | Users can search the database by keywords, categories (e.g., electronics, clothing), or specific campus buildings. | Must-Have |
| **F04** | Item Status Updates | Creators can update the status of their post (e.g., Open, Claimed, Resolved). | Must-Have |
| **F05** | Image Uploads | Users can attach a photo of the lost or found item to their report. | Should-Have |
| **F06** | User Authentication | A login system ensuring only verified students and staff can post or claim items. | Should-Have |
| **F07** | In-App Messaging | Secure, direct communication between the person who found the item and the person claiming it. | Could-Have |
| **F08** | Automated Notifications | Email or push notifications when a newly found item matches a user's lost item report. | Could-Have |
| **F09** | AI Image Matching | Using image recognition to automatically pair lost and found posts. | Not in MVP |
| **F10** | Reward System | A gamified system or monetary reward integration for returning items. | Not in MVP |

---

### **Must-Have (Core MVP)**
These are the critical features required to demonstrate problem-solution fit. Without these, the application cannot function as a lost-and-found platform.
*   **F01 & F02 (Reporting):** The primary database inputs. 
*   **F03 (Search):** The primary way users will navigate the data to find matches.
*   **F04 (Status Updates):** Essential for keeping the database clean and preventing users from pursuing items that are already resolved.

### **Should-Have (High Priority)**
These features add significant value and security but are not strictly required for the very first functional test. 
*   **F05 (Image Uploads):** Highly recommended to reduce miscommunication and false claims, but text descriptions can suffice for a bare-bones test.
*   **F06 (Authentication):** Important for accountability, though the MVP could technically launch as an open, anonymous board for initial validation.

### **Could-Have (Future Enhancements)**
These are "nice-to-have" features that improve the user experience but require additional development time (like setting up WebSockets for chat).
*   **F07 (In-App Messaging):** Users can temporarily rely on sharing external contact info (like line IDs or emails) in the item descriptions until this is built.
*   **F08 (Notifications):** Users will need to manually check the app for updates in the initial release.

### **Not in MVP (Out of Scope)**
These features are too complex or outside the immediate scope of validating the core problem.
*   **F09 (AI Matching) & F10 (Rewards):** These introduce unnecessary technical overhead and scope creep for this stage of the project.
