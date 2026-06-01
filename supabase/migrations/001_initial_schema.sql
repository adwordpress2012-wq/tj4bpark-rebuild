-- =============================================================
-- GuestMate — Migration 001 — Initial Schema
-- TourismOS / TJ's 4B Park
--
-- Tables:  parks, guests, bookings, events,
--          indemnity_forms, activity_log
-- =============================================================

-- ─────────────────────────────────────────────────────────────
-- 1. Parks
--    Anchor for multi-tenancy. Every other table references park_id.
-- ─────────────────────────────────────────────────────────────
CREATE TABLE parks (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name       TEXT NOT NULL,
  slug       TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ─────────────────────────────────────────────────────────────
-- 2. Guests
-- ─────────────────────────────────────────────────────────────
CREATE TABLE guests (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  park_id    UUID NOT NULL REFERENCES parks(id) ON DELETE CASCADE,
  name       TEXT NOT NULL,
  email      TEXT,
  mobile     TEXT,
  source     TEXT NOT NULL DEFAULT 'hipcamp',
    -- hipcamp | manual | direct | facebook
  notes      TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ─────────────────────────────────────────────────────────────
-- 3. Bookings
-- ─────────────────────────────────────────────────────────────
CREATE TABLE bookings (
  id                      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  park_id                 UUID NOT NULL REFERENCES parks(id) ON DELETE CASCADE,
  guest_id                UUID REFERENCES guests(id) ON DELETE SET NULL,
  arrival_date            DATE NOT NULL,
  departure_date          DATE NOT NULL,
  source                  TEXT NOT NULL DEFAULT 'hipcamp',
    -- hipcamp | manual | direct | facebook
  status                  TEXT NOT NULL DEFAULT 'new',
    -- new | confirmed | arrived | completed | cancelled
  indemnity_status        TEXT NOT NULL DEFAULT 'pending',
    -- pending | sent | completed
  welcome_pack_status     TEXT NOT NULL DEFAULT 'pending',
    -- pending | sent
  arrival_reminder_status TEXT NOT NULL DEFAULT 'pending',
    -- pending | sent
  area_name               TEXT,
    -- e.g. "Bush Camp A", "Glamping Pod 2"
  hipcamp_ref             TEXT,
  notes                   TEXT,
  created_at              TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at              TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ─────────────────────────────────────────────────────────────
-- 4. Events  (What's On)
-- ─────────────────────────────────────────────────────────────
CREATE TABLE events (
  id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  park_id          UUID NOT NULL REFERENCES parks(id) ON DELETE CASCADE,
  title            TEXT NOT NULL,
  description      TEXT,
  start_date       DATE NOT NULL,
  end_date         DATE,
  image_url        TEXT,
  status           TEXT NOT NULL DEFAULT 'draft',
    -- draft | published | archived
  capacity         INTEGER,
    -- NULL = unlimited
  waitlist_enabled BOOLEAN NOT NULL DEFAULT false,
  created_at       TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at       TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ─────────────────────────────────────────────────────────────
-- 5. Indemnity Forms
-- ─────────────────────────────────────────────────────────────
CREATE TABLE indemnity_forms (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_id   UUID REFERENCES bookings(id) ON DELETE CASCADE,
  guest_id     UUID REFERENCES guests(id) ON DELETE SET NULL,
  data         JSONB,
  status       TEXT NOT NULL DEFAULT 'pending',
    -- pending | submitted
  submitted_at TIMESTAMPTZ,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ─────────────────────────────────────────────────────────────
-- 6. Activity Log  (dashboard feed + audit trail)
-- ─────────────────────────────────────────────────────────────
CREATE TABLE activity_log (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  park_id     UUID NOT NULL REFERENCES parks(id) ON DELETE CASCADE,
  event_type  TEXT NOT NULL,
    -- booking_received | welcome_pack_sent  | arrival_reminder_sent
    -- form_submitted   | form_completed     | arrival_confirmed
    -- event_published  | event_archived
  booking_id  UUID REFERENCES bookings(id) ON DELETE SET NULL,
  guest_id    UUID REFERENCES guests(id)   ON DELETE SET NULL,
  description TEXT,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- =============================================================
-- Indexes
-- =============================================================

-- parks
CREATE INDEX idx_parks_slug              ON parks(slug);

-- guests
CREATE INDEX idx_guests_park_id          ON guests(park_id);
CREATE INDEX idx_guests_source           ON guests(source);

-- bookings
CREATE INDEX idx_bookings_park_id        ON bookings(park_id);
CREATE INDEX idx_bookings_guest_id       ON bookings(guest_id);
CREATE INDEX idx_bookings_arrival_date   ON bookings(arrival_date);
CREATE INDEX idx_bookings_source         ON bookings(source);
CREATE INDEX idx_bookings_status         ON bookings(status);

-- events
CREATE INDEX idx_events_park_id          ON events(park_id);
CREATE INDEX idx_events_start_date       ON events(start_date);
CREATE INDEX idx_events_status           ON events(status);

-- indemnity_forms
CREATE INDEX idx_indemnity_booking_id    ON indemnity_forms(booking_id);
CREATE INDEX idx_indemnity_guest_id      ON indemnity_forms(guest_id);

-- activity_log
CREATE INDEX idx_activity_log_park_id   ON activity_log(park_id);
CREATE INDEX idx_activity_log_booking_id ON activity_log(booking_id);
CREATE INDEX idx_activity_log_created   ON activity_log(created_at DESC);

-- =============================================================
-- updated_at trigger
-- =============================================================
CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_guests_updated_at
  BEFORE UPDATE ON guests
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE TRIGGER trg_bookings_updated_at
  BEFORE UPDATE ON bookings
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE TRIGGER trg_events_updated_at
  BEFORE UPDATE ON events
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- =============================================================
-- Row Level Security
-- =============================================================
ALTER TABLE parks            ENABLE ROW LEVEL SECURITY;
ALTER TABLE guests           ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings         ENABLE ROW LEVEL SECURITY;
ALTER TABLE events           ENABLE ROW LEVEL SECURITY;
ALTER TABLE indemnity_forms  ENABLE ROW LEVEL SECURITY;
ALTER TABLE activity_log     ENABLE ROW LEVEL SECURITY;

-- Authenticated users may read and write all rows.
-- Scope to specific park_id once user→park mapping is introduced in a later migration.
CREATE POLICY "authenticated_all" ON parks           FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "authenticated_all" ON guests          FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "authenticated_all" ON bookings        FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "authenticated_all" ON events          FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "authenticated_all" ON indemnity_forms FOR ALL TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "authenticated_all" ON activity_log    FOR ALL TO authenticated USING (true) WITH CHECK (true);
