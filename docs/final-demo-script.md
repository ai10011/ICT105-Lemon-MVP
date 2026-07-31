# Final Demo Script

## 1. Opening
- **Presenter:** Technical Lead / Product Lead
- **Script:** *"Good morning/afternoon everyone. We are Team Lemon, presenting our IT venture MVP: **Lemon – Smart Campus Lost-and-Found System**. Over 65% of students abandon their search for lost belongings within 24 hours because current methods are scattered across LINE groups, Discord chats, and physical security desks. Today, we demonstrate how Lemon centralizes campus lost-and-found reporting into a fast, privacy-first web portal."*

---

## 2. User Scenario
- **Scenario:** *"Meet Justin, a 1st-year student who lost his scientific calculator in the Main Library yesterday. Concurrently, campus security received a found calculator dropped off at the front desk. Watch how Justin uses Lemon to locate his item in under two minutes."*

---

## 3. Prototype Walkthrough

| Step | Screen / Feature | What to Demonstrate | Requirement ID |
|---|---|---|---|
| **1** | **Homepage Landing** ([index.html](../prototype/project/index.html)) | Point out the clear value proposition, hero quick-search bar, active campus counters, and responsive navigation header. | `FR-01`, `FR-13`, `FR-14` |
| **2** | **Report Input Form** ([form.html](../prototype/project/form.html)) | Click *"Report Lost Item"*. Demonstrate input validation (`FR-10`), selecting category (*Electronics*), building dropdown (*Main Library*), uploading photo preview, and checking privacy consent. Submit form and highlight toast notification (`FR-11`). | `FR-03`, `FR-04`, `FR-10`, `FR-11`, `FR-15` |
| **3** | **Catalog Directory** ([records.html](../prototype/project/records.html)) | Show stored item records. Demonstrate real-time keyword search (`"calculator"`), report type pills, category filters, and mobile collapsible filter accordion. | `FR-05`, `FR-06`, `FR-14` |
| **4** | **Item Detail View** ([detail.html](../prototype/project/detail.html)) | Click a result card to open detail view. Point out high-res photo, building map location, masked student ID (`65XXXXX`), and visual color-coded status badge (`Available`). | `FR-07`, `FR-08`, `FR-15` |
| **5** | **Admin Management** ([admin.html](../prototype/project/admin.html)) | Switch to admin view. Demonstrate updating item status from `Available` to `Claimed`. Show total secured counter updating live and mobile admin sidebar overlay. | `FR-08`, `FR-09`, `FR-11` |
| **6** | **Analytics Dashboard** ([dashboard.html](../prototype/project/dashboard.html)) | Open dashboard from header. Show total reports, resolution rate %, user report history, and category progress bars. | `FR-12` |

---

## 4. Evidence and Validation
- **Script:** *"Our design is thoroughly validated. In Lab 08 usability testing with 20 campus testers, we achieved an **80.00% task completion success rate** and a **4.35/5.0 usefulness rating**. Furthermore, our Lab 12 digital landing page test recorded **365 page views** with a **41.37% CTA click-through rate**, proving strong demand among students."*

---

## 5. Closing
- **Script:** *"Lemon transforms campus lost-and-found from a frustrating manual search into a streamlined digital experience—without requiring expensive hardware or IoT sensors. Thank you, and we welcome your questions!"*
