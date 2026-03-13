# Simplified Test Plan

## 1) Smoke Check
- Open app homepage (`/`) and docs (`/docs.html`).
- Confirm Swagger (`/swagger.html`) loads.

## 2) Auth (Register/Login)
- Register a new user → should auto-login and redirect to `/profile.html`.
- Log out, then log in again (valid/invalid credentials).

## 3) Farm Resource Management
- Add a field, an animal, and a staff member.
- Assign animal/staff to the field.
- Edit and delete one resource to confirm changes persist.

## 4) Marketplace + Money
- Create a marketplace offer for an **unassigned** field or animal.
- Use another account to buy it → confirm ownership transfers and balances update.
- Try to buy an offer with **insufficient funds** → expect “insufficient funds” error.

## 5) Permissions
- Confirm a normal user cannot access admin-only functionality (if present).
