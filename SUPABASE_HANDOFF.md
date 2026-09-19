# Africa 2060 — Supabase & Deployment Handoff

This is the final project-specific integration step. No Supabase secret belongs in the repository, browser code, chat, screenshots, or public documentation.

## 1. Create the Supabase project

Create a Supabase project for the Africa 2060 website. Record only the project URL for configuration; keep the service-role key private.

## 2. Apply database migrations

In the Supabase SQL Editor, run the files below **once, in this exact order**:

1. `supabase/migrations/001_institutional_enquiries.sql`
2. `supabase/migrations/002_backend_hardening.sql`
3. `supabase/migrations/003_audit_events.sql`
4. `supabase/migrations/004_contract_hardening.sql`

Do not modify the migration order. The tables are protected by Row Level Security and the public site has no direct database access.

## 3. Configure the server environment

Copy `.env.example` into the deployment environment. Set:

- `NODE_ENV=production`
- `STORAGE_MODE=supabase`
- `SUPABASE_URL=<your project URL>`
- `SUPABASE_SERVICE_ROLE_KEY=<your server-only service-role key>`
- `PUBLIC_ORIGIN=<the exact public website origin>`
- `ALLOWED_ORIGINS=<the same origin, unless additional trusted origins are intentionally required>`
- `ADMIN_API_TOKEN=<a long random server-only token>`

If transactional email is being enabled:

- `REQUIRE_EMAIL=true`
- `RESEND_API_KEY=<server-only Resend key>`
- `RESEND_FROM=<verified sender>`
- `AFRICA2060_INTERNAL_EMAIL=<internal enquiry mailbox>`

Keep the existing table names unless the corresponding environment variables and database contract are deliberately changed together.

## 4. Validate before starting production

From the project root:

```text
npm ci
npm run contract:check
npm run check
npm test
npm run preflight
```

`preflight` intentionally reports configuration status without printing secret values.

## 5. Start the server

```text
npm start
```

The application serves the public website and `/api/*` from the same origin. This is intentional: the browser should call relative API paths and should never connect directly to Supabase.

## 6. Verify health

Open:

`/api/health`

A production deployment with Supabase configured and, when required, email configured should report `ok: true`.

A `503` response means a required dependency/configuration is not ready; it does not mean the deployment should be treated as healthy.

## 7. Verify the three enquiry workflows

Submit one test enquiry through each public path:

- Investment
- Partner
- General Contact

Confirm in Supabase that each submission appears in `institutional_enquiries`, and that corresponding audit events appear in `audit_events`.

When email is enabled, confirm both acknowledgement and internal notification delivery records in `email_deliveries` and verify receipt in the configured mailboxes.

After verification, remove or close test records according to the organisation's internal operational policy.

## 8. Admin operations

The temporary operational API uses:

`Authorization: Bearer <ADMIN_API_TOKEN>`

Protected endpoints:

- `GET /api/admin/enquiries`
- `GET /api/admin/enquiries/:id/events`
- `PATCH /api/admin/enquiries/:id`
- `GET /api/admin/metrics`
- `POST /api/admin/retention`

Do not put the admin token in frontend JavaScript.

## 9. Retention

Retention is configurable through:

- `RETENTION_DAYS`
- `AUDIT_RETENTION_DAYS`

Start with the dry run:

```text
npm run retention:dry-run
```

Apply only after reviewing the configured windows:

```text
npm run retention:apply
```

## 10. Security boundaries

Never expose or commit:

- `SUPABASE_SERVICE_ROLE_KEY`
- `RESEND_API_KEY`
- `ADMIN_API_TOKEN`

The public website only communicates with the Africa 2060 API. Supabase service-role access remains server-side.

## 11. Current scope boundary

The backend supports institutional enquiries only: investment, partnership and general contact. There is no donation workflow, donation payment processing, or online investment execution in this package.

## 12. What remains project-specific

After the handoff, the remaining work is deployment-specific rather than application architecture:

1. create the Supabase project;
2. run the four migrations;
3. add secrets to the hosting provider;
4. deploy the Node application/container;
5. verify `/api/health`;
6. run the three enquiry tests;
7. verify database, audit and email records.

No credentials need to be sent to the development assistant to complete these steps.
