-- =============================================================
-- GuestMate Seed — TJ's 4B Park
-- Run after 001_initial_schema.sql
-- =============================================================

INSERT INTO parks (name, slug)
VALUES ('TJ''s 4B Park & Camping', 'tj4bpark')
ON CONFLICT (slug) DO NOTHING;
