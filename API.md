# Africa 2060 API contract

## Public endpoints

### GET /api/health
Returns storage and email readiness. `503` means a configured production dependency is unavailable.

### POST /api/investment-enquiries
Required: `name`, `organisation`, `email`, `message`.
Optional: `country`, `interest`, `investment_interest`, `website` (honeypot).

### POST /api/partner-enquiries
Required: `name`, `organisation`, `email`, `partner_type`, `message`.
Optional: `country`, `interest`, `contribution[]`, `website` (honeypot).

### POST /api/contact
Required: `name`, `email`, `message`.
Optional: `organisation`, `country`, `subject`, `website` (honeypot).

Public POST requests may send an `Idempotency-Key` header to make retries safe.

## Internal endpoints

`GET /api/admin/enquiries?type=&status=&limit=` and `PATCH /api/admin/enquiries/:id` are protected by `Authorization: Bearer <ADMIN_API_TOKEN>`.

These endpoints are intended for a temporary server-side operational interface. A full identity-based admin console can be added later without changing the public enquiry API.

## Operations endpoints
- `GET /api/admin/metrics` — protected operational counters and storage health.
- `POST /api/admin/retention` — protected retention control. Defaults to dry-run; send `X-Retention-Dry-Run: false` to apply configured retention windows.

Retention is also available as a server-side CLI: `npm run retention:dry-run` and `npm run retention:apply`.

## Operational hardening
- `TRUST_PROXY` defaults to `false`; enable it only when the deployment proxy is trusted.
- Email retries are limited and only transient provider failures are retried.
- Email provider calls time out after 10 seconds.

## Integration contract

The database contract is defined by the ordered migrations in `supabase/migrations/`.
Run them in filename order. `npm run contract:check` verifies that the application,
OpenAPI document, environment template and migration set contain the required contract.

The browser never receives `SUPABASE_SERVICE_ROLE_KEY`. Only the server uses that credential.
