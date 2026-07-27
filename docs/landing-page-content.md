# Landing Page Content

## Project Title
**Lemon — Smart Campus Lost-and-Found System**

## Target User
* **Primary**: University undergraduate students who lost or found personal baseline items (such as student IDs, calculators, keys, USB drives, or bags) in high-density campus facilities.
* **Secondary**: Campus security staff and facility processing clerks responsible for managing lost item inventories and verifying owner claims.

## Headline
**Recover lost campus items faster with one central platform.**

## Subheadline
Stop searching through scattered LINE and Discord group chats. Lemon brings all campus lost-and-found reports into one searchable, privacy-first portal.

## Problem Statement
According to our Lab 03 discovery and Lab 08 customer validation (conducted with 20 campus testers), **65% of students abandon their search for lost items within 24 hours** because lost-and-found information is fragmented across disconnected chat groups, social media posts, and physical security notebooks. Current workarounds lack status visibility, expose personal contact details publicly, and result in low item recovery rates.

## Solution Description
Lemon provides a centralized web-based platform that allows students to easily submit lost/found item reports, search items by campus building and category, and track verification status in real time. The system protects user privacy by masking contact details on public pages and streamlining administrative verification for campus security staff.

## Key Features

| Feature | Requirement ID | User Value | Prototype Screen/Module |
| --- | --- | --- | --- |
| **Landing Homepage & Hero Search** | FR-01 | Instantly search missing items or start a new report from the hero section | [`index.html`](../prototype/project/index.html) |
| **Lost/Found Report Submission** | FR-03, FR-10 | Submit item reports with required category, building location, date, and photo URL with mandatory privacy consent | [`form.html`](../prototype/project/form.html) |
| **Search & Building Filtering** | FR-05, FR-06 | Filter item catalog by campus building dropdowns, category, date, and status | [`records.html`](../prototype/project/records.html) |
| **Item Detail & Status Badges** | FR-07, FR-08 | View complete item details with color-coded status badges (`Pending Review`, `Available`, `Claimed`, `Closed`) | [`detail.html`](../prototype/project/detail.html) |
| **Admin Verification & Metrics** | FR-09, FR-12 | Admin status updates and system-wide recovery analytics dashboard | [`admin.html`](../prototype/project/admin.html) & [`dashboard.html`](../prototype/project/dashboard.html) |

## Benefits
* **Single Central Hub**: Eliminates the need to search through multiple disorganized Line, Discord, or Facebook channels.
* **Privacy-First Design**: Personal phone numbers and student IDs are masked (`65XXXXX`) to protect user privacy.
* **Location-Based Discovery**: Search by specific campus buildings (e.g., Main Library, Science Building, Student Union) to locate items quickly.
* **Real-Time Status Visibility**: Transparent color-coded badges show exactly whether an item is pending review, available for pickup, or already claimed.

## Call-to-Action
* **Primary CTA**: **Try Demo / Explore Prototype** (Directs visitors to [`index.html`](../prototype/project/index.html) and item search catalog)
* **Secondary CTA**: **Submit Test Report** (Directs visitors to [`form.html`](../prototype/project/form.html) to test reporting functionality)

## Responsible Data Message
* **Data Minimization**: We only collect necessary item details (category, building location, description, date). Sensitive details like home address, phone numbers, or national IDs are strictly prohibited.
* **Privacy Controls**: Student contact emails and IDs are masked on all public listings and restricted to verified campus admin staff.
* **Photo Policy**: Uploaded photos must focus strictly on the object and must not contain human faces or personal identification documents.

