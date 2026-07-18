# Privacy and Data Protection

## Project Title
**Lemon** - Smart Campus Lost-and-Found System

## Data Collection Summary
| Data Field | Why It Is Needed | Personal Data? | Sensitive Data? | Keep / Remove / Replace | Notes |
|---|---|---|---|---|---|
| **Reporter Nickname** | Identification for report owner without legal name | Yes | No | **Keep** | Use pseudonym/nickname instead of full legal name. |
| **Student ID** | Claim verification by campus security staff | Yes | No | **Replace** | Mask student ID (e.g. `65XXXXX`) on public screens; restrict full ID to admin view. |
| **Contact Email** | Notify user on status changes or item matches | Yes | No | **Keep** | Keep for notification loop; do not display publicly. |
| **Item Category & Name** | Searching, filtering, and indexing lost items | No | No | **Keep** | Essential public metadata for lost/found matching. |
| **Location Found / Lost** | Spatial context to help students locate items | No | No | **Keep** | Use general campus building/zone (e.g., Library 2nd Floor). |
| **Item Photo** | Visual verification of lost/found item | Possibly | No | **Keep with caution** | Instruct users to upload item close-ups without human faces or personal info. |
| **Claim Verification Notes** | Proof of ownership during claim process | Possibly | No | **Keep with caution** | Store in admin-only verification field; never show on public listings. |
| **Home Address / Phone Number** | Originally considered for direct user contact | Yes | No | **Remove** | Completely stripped from reporting forms to prevent privacy exposure. |

## Privacy Rule for Prototype
This prototype collects only the minimum data required to facilitate reporting, searching, and claiming lost/found items on campus: a pseudonym/nickname, masked Student ID, contact email, and item metadata. All personal contact information remains strictly hidden from public listings (`records.html`). Public views show only non-sensitive item attributes (category, general location, status badges).

## Data Minimization Decision
- **Removed**: `Home Address`, `Phone Number`, and `National ID` fields have been completely removed from forms and data schemas.
- **Changed**: `Student ID` display is masked (`65XXXXX`) across public interfaces, and full contact details are restricted to the admin interface (`admin.html`).
