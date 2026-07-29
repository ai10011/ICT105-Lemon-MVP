# Sales Scenario

## 1. Project Title

**Lemon - Smart Campus Lost-and-Found System (LostLink)**

## 2. Target User / Customer

- **Primary User:** University undergraduate students who commute across high-density facilities (main library, computer labs, lecture halls) and frequently lose or find everyday essentials (Student IDs, calculators, access cards, USB drives).
- **Secondary User:** Campus security staff and facility processing clerks responsible for managing physical lost-and-found inventory.
- **Decision-Maker / Admin Role:** Campus security director, student affairs facility manager, or campus IT administrator evaluating software solutions to reduce operational friction.

## 3. Situation / Context

A student loses a critical personal item (e.g., an ID card, graphics calculator, or USB drive containing coursework) while moving between lectures. Because there is no single official portal, the student spends hours searching through unstructured LINE groups, Discord channels, and Facebook posts, or walking across campus to check multiple physical security desks.

## 4. Pain Points

- **Fragmented Channels:** Information is scattered across dozens of unindexed chat groups and paper logbooks.
- **High Search Abandonment:** 65% of students abandon their search within 24 hours due to search fatigue and lack of central visibility.
- **Privacy & Safety Risks:** Students frequently post personal phone numbers, full names, and sensitive student IDs publicly online when seeking lost property.
- **Operational Burden on Staff:** Campus security officers receive repetitive manual inquiries for items that may not even have been turned in yet.

## 5. Product Introduction

**Lemon (LostLink)** is a responsive, web-based Smart Campus Lost-and-Found System that unifies lost and found reporting into one official platform. It provides rapid report filing, multi-criteria location and category filters, PII contact masking (`65XXXXX@au.edu`), ownership verification workflows, and an administrative desk staff portal.

## 6. Value Message

**For university students and campus security staff who experience friction and lost property due to fragmented communication channels, Lemon provides a single centralized platform that accelerates item recovery, safeguards student privacy, and streamlines campus lost-and-found logistics.**

## 7. Sales Conversation / Pitch Moment

> *"Our campus currently relies on informal chat groups and physical logbooks to handle lost property, causing 65% of students to give up searching within 24 hours. **Lemon** changes this by providing one official web portal for the entire university. Finders submit item reports in under 2 minutes with campus building tags, losers search the live catalog with location filters, and student contact details are safely masked (`65XXXXX@au.edu`) to protect user privacy. Security staff use an administrative portal to verify ownership claims and update item status to 'Claimed'. This cuts item recovery times from days to hours while reducing administrative inquiries for campus staff."*

## 8. Expected User Action

- Access the live prototype landing page (`index.html`) and test the search bar.
- File a lost or found report (`form.html`) with mandatory field validations.
- Search and filter records by campus building and category (`records.html`).
- Inspect item details and test the privacy-masked contact claim flow (`detail.html`).
- Experience administrative claim verification and status updates (`admin.html`).
- Review real-time analytics and resolution metrics (`dashboard.html`).

## 9. Related System Requirements

- **FR-01:** Landing page and project value proposition display.
- **FR-02:** Primary user pathways (Report vs. Search).
- **FR-03:** Item data submission form.
- **FR-04:** Data storage and JSON/`localStorage` persistence.
- **FR-05:** Viewable records list.
- **FR-06:** Multi-criteria keyword search and campus building filters.
- **FR-07:** Detailed record view.
- **FR-08:** Visual status tracking (`Pending Review`, `Available`, `Claimed`, `Closed`).
- **FR-09:** Admin manager function for status updates.
- **FR-10:** Basic field validation and error prevention.
- **FR-11:** Confirmation toasts and feedback messages.
- **FR-12:** Summary dashboard and analytics.
- **FR-13:** Basic UI/UX consistency across screens.
- **FR-14:** Mobile-friendly responsive design.
- **FR-15:** Responsible privacy and PII masking (`65XXXXX@au.edu`).
- **FR-16:** End-to-end prototype traceability.
