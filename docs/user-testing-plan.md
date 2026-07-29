# User Testing Plan & Specification

> [!NOTE]
> **Status Note:** Formal user testing sessions and testing forms were **not conducted** for this prototype phase. This document serves as a theoretical testing framework, evaluation protocol, and specification for future validation iterations.

---

## 1. Document Overview & Metadata

| Field | Details |
| --- | --- |
| **Project Title** | Lemon - Smart Campus Lost-and-Found System (LostLink) |
| **Repository** | `meirosemary/ICT105-Lemon-MVP` |
| **Course Code** | ICT 105 Fundamental Technology Entrepreneurship |
| **Target Prototype Version** | v1.0.0-MVP (HTML5 / Tailwind CSS / Vanilla JS) |
| **Document Purpose** | Comprehensive Usability & Functional Evaluation Specification |

---

## 2. Testing Objectives & Scope

### 2.1 Core Objectives
The primary goal of this testing framework is to evaluate the usability, user flow efficiency, task success rates, data privacy protections, and administrative workflow clarity of the **Lemon LostLink** prototype prior to final evaluation.

Specifically, the plan evaluates whether:
1. **Students** can independently submit detailed lost/found item reports and search existing records within 60 seconds without instruction.
2. **Campus Security / Admin Staff** can seamlessly verify ownership claims and update item lifecycle statuses (`Pending Review` → `Available` → `Claimed`).
3. **Data Protection Mechanisms** effectively mask sensitive contact details (student emails/phone numbers) across public catalog views.
4. **Responsive UI Elements** (drawers, filter accordions, data tables) render without layout breakage on mobile devices (< 768px).

### 2.2 In-Scope vs. Out-of-Scope

* **In-Scope:**
  * Client-side form validation, file input previews, and XSS sanitization checks.
  * Search, category filtering, campus building filtering, and global search reset behavior.
  * Cross-component state synchronization via browser `localStorage`.
  * Responsive layout behavior across Mobile (375px), Tablet (768px), and Desktop (1440px) viewports.
* **Out-of-Scope:**
  * Backend server database persistence (SQL/NoSQL database benchmarking).
  * SMS/Email gateway delivery integrations (mock notifications are used).
  * Real-time physical IoT smart locker hardware integration.

---

## 3. Test User Profiles & Demographics

To ensure balanced feedback across primary user segments, testing cohorts are divided into two distinct profiles:
