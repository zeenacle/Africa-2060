create extension if not exists pgcrypto;

create table if not exists public.institutional_enquiries (
  id uuid primary key,
  type text not null check (type in ('investment', 'partner', 'contact')),
  name text not null,
  organisation text,
  email text not null,
  country text,
  area_of_interest text,
  investment_interest text,
  partner_type text,
  contribution_areas text[] not null default '{}',
  subject text,
  message text not null,
  status text not null default 'received' check (status in ('received', 'reviewing', 'closed', 'spam')),
  request_id text,
  created_at timestamptz not null default now()
);

create index if not exists institutional_enquiries_type_created_idx
  on public.institutional_enquiries (type, created_at desc);

create index if not exists institutional_enquiries_email_idx
  on public.institutional_enquiries (email);

create table if not exists public.email_deliveries (
  id uuid primary key default gen_random_uuid(),
  submission_id uuid references public.institutional_enquiries(id) on delete set null,
  type text not null,
  kind text not null check (kind in ('acknowledgement', 'internal')),
  status text not null,
  provider_id text,
  error text,
  created_at timestamptz not null default now()
);

create index if not exists email_deliveries_submission_idx
  on public.email_deliveries (submission_id, created_at desc);

alter table public.institutional_enquiries enable row level security;
alter table public.email_deliveries enable row level security;

-- No public policies are created. The server uses the Supabase service-role key
-- and therefore performs these writes outside end-user RLS access.
