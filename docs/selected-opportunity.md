# Selected Semester Project Opportunity

## Selected Project Title
**RSU Smart Campus Navigator Dashboard**

## Target User
*   **Primary Users:** New undergraduate students (freshmen) and transferring students at Rangsit University who are unfamiliar with the large campus layout.
*   **Secondary Users:** Campus visitors, parents coming for events, guest lecturers, and students looking for specific, less-frequently visited university facilities (e.g., specific administrative offices, cafeterias, or designated student parking zones).

## Problem Statement
New students and campus visitors at Rangsit University frequently get lost or waste time trying to locate specific buildings, classrooms, academic offices, and amenities. Because the campus is large and contains numerous multi-purpose structures, navigating via memory or physical exploration is stressful—especially during the first few weeks of a semester when students are rushing to find their classes on time.

## Current Alternative
*   **Static Campus Maps:** Relying on flat, non-interactive PDF maps or physical billboard maps near the campus entrance, which do not show specific classroom room numbers or real-time location contexts.
*   **Word-of-Mouth:** Stopping passing students, security guards, or university staff to ask for directions, which is inefficient and depends entirely on finding someone available who knows the exact location.
*   **Standard Commercial Maps:** Using general tools like Google Maps, which can guide a user to a building entrance but completely fail to map inside facilities, specific room numbers, floors, or campus-specific walkways.

---

## Proposed IT Solution
The team will develop a web-based **Campus Navigation Dashboard**. This application will serve as a centralized hub where users can instantly search for buildings, room numbers, or service zones (such as food courts, libraries, and student parking areas). 

The platform will feature an interactive campus map interface with smart categories and simple path overlays, providing immediate step-by-step route breakdowns between landmarks (e.g., "From Building 1 to Building 11") without requiring complex GPS sensor installations.

## Why This Opportunity Was Selected
We evaluated this concept using the **NUF (New, Useful, Feasible) Scoring Framework**:
*   **New (8/10):** While mapping apps exist, a tailored interface focusing specifically on RSU room numbering systems and inner-campus pedestrian paths provides a highly customized solution compared to broad public maps.
*   **Useful (9/10):** It directly solves a high-friction problem experienced by thousands of new students and visitors every year, helping them save time and reduce academic stress.
*   **Feasible (8/10):** The project relies entirely on accessible web development frameworks and map visual layers that our team can implement within a single semester.

**Team Feasibility:** This project perfectly balances UI/UX layout design (building clean search flows and interactive maps) with baseline backend management (storing and querying building locations and coordinates via a structured database).

## Why This Is Feasible Without IoT or Advanced Cybersecurity
*   **No IoT Required:** The application does not track live movements through physical beacons or hardware sensors. Instead, it relies on static geospatial coordinates, pre-mapped path logic, and organized database profiles for each room or building. 
*   **No Advanced Cybersecurity Needed:** The core map features do not handle sensitive personal profiles, payment transactions, or private data. It is primarily an open informational dashboard, keeping data architecture straightforward and safe to manage using basic web access rules.

---

## Possible MVP Type
**Simple Web App Prototype (HTML/CSS/JS or React/Flutter Web)**
The team will create a functional web application that integrates a map rendering library (such as Leaflet.js or custom SVG coordinate mappings) connected to a Firebase or JSON backend. This allows target users to type in real classroom numbers or select categories to see real, functioning visual map results in their web browsers.

---

## Initial Validation Plan for Lab 03

### Who will the team ask?
We will interview **at least 5–10 RSU freshmen students** and **2 campus security officers or administrative staff** who regularly handle direction inquiries from lost visitors.

### What evidence will the team collect?
*   Quantitative confirmation of the problem (e.g., how many minutes students report losing when looking for a class during week 1).
*   User feedback on our structural layout concepts and list of essential navigation categories (e.g., whether they prioritize finding classrooms, specific offices, or parking zones).

### What question must be answered first?
> *"Do students primarily struggle to find the correct building on campus, or do they struggle more with finding the specific room/floor layout once they are already inside the building?"* 

*(Answering this question first ensures we prioritize our database modeling and design elements on the exact root cause of the confusion.)*
