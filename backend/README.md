# Africa 2060 backend

Production-oriented API foundation for institutional enquiries.

## Public API
- `GET /api/health`
- `POST /api/investment-enquiries`
- `POST /api/partner-enquiries`
- `POST /api/contact`

## Internal operations API
Requires `Authorization: Bearer <ADMIN_API_TOKEN>`:
- `GET /api/admin/enquiries`
- `PATCH /api/admin/enquiries/:id`
- `GET /api/admin/enquiries/:id/events`

The events endpoint exposes the audit trail for an enquiry.

## Storage
`STORAGE_MODE=local` is for development only. Production should use Supabase with the supplied migrations.

## Security boundary
Supabase service-role credentials are server-side only. Never expose them to browser JavaScript or commit them to source control.
