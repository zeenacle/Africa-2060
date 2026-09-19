alter table public.institutional_enquiries
  add column if not exists idempotency_key text,
  add column if not exists updated_at timestamptz;

create unique index if not exists institutional_enquiries_type_idempotency_idx
  on public.institutional_enquiries (type, idempotency_key)
  where idempotency_key is not null;

create index if not exists institutional_enquiries_status_created_idx
  on public.institutional_enquiries (status, created_at desc);

alter table public.email_deliveries
  add column if not exists attempt_count integer not null default 1;
