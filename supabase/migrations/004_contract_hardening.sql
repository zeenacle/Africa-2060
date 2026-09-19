-- Contract hardening for the institutional enquiry backend.
-- Run after 001, 002 and 003.

alter table public.institutional_enquiries
  alter column updated_at set default now();

update public.institutional_enquiries
set updated_at = created_at
where updated_at is null;

alter table public.institutional_enquiries
  alter column updated_at set not null;

-- Keep operational event states explicit and bounded.
alter table public.email_deliveries
  add constraint email_deliveries_type_check
  check (type in ('investment','partner','contact'));

alter table public.email_deliveries
  add constraint email_deliveries_status_check
  check (status in ('not_configured','retrying','failed','sent'));

alter table public.email_deliveries
  add constraint email_deliveries_attempt_count_check
  check (attempt_count >= 1 and attempt_count <= 6);

-- Prevent malformed audit event types from entering the operational trail.
alter table public.audit_events
  add constraint audit_events_type_check
  check (type in ('investment','partner','contact'));

create index if not exists email_deliveries_status_created_idx
  on public.email_deliveries (status, created_at desc);

create index if not exists audit_events_type_created_idx
  on public.audit_events (type, created_at desc);
