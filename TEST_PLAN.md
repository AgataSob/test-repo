# Simplified Test Plan

> **Tagging rule:** Each test should include the matching `@tag` from this plan in its Playwright title (e.g., `@smoke ...`). Keep this section updated whenever tags change. See #sym:## Test Plan and Tagging System for reference.

## 1) Smoke Check
**Tags:** `@smoke`, `@sanity`
- Open app homepage (`/`) and docs (`/docs.html`).
- Confirm Swagger (`/swagger.html`) loads.

## 2) Auth (Register/Login)
**Tags:** `@auth`, `@regression`
- Register a new user → should auto-login and redirect to `/profile.html`.
- Log out, then log in again (valid/invalid credentials).

## 3) Farm Resource Management
**Tags:** `@resource`, `@crud`
- Add a field, an animal, and a staff member.
- Assign animal/staff to the field.
- Edit and delete one resource to confirm changes persist.

## 4) Marketplace + Money
**Tags:** `@marketplace`, `@payments`
- Create a marketplace offer for an **unassigned** field or animal.
- Use another account to buy it → confirm ownership transfers and balances update.
- Try to buy an offer with **insufficient funds** → expect “insufficient funds” error.

## 5) Permissions
**Tags:** `@permissions`, `@security`
- Confirm a normal user cannot access admin-only functionality (if present).
