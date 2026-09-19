create table if not exists public.audit_events (
  id uuid primary key,
  submission_id uuid not null references public.institutional_enquiries(id) on delete cascade,
  type text not null check (type in ('investment','partner','contact')),
  event text not null,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);
create index if not exists audit_events_submission_created_idx on public.audit_events(submission_id, created_at desc);
alter table public.audit_events enable row level security;
