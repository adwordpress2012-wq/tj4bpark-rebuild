-- GuestMate Seed — TJ's 4B Park
-- Run this after applying 001_initial_schema.sql.
-- Creates the park record that all other data references.

INSERT INTO parks (id, name, slug)
VALUES (
  gen_random_uuid(),
  'TJ''s 4B Park & Camping',
  'tjs-4b-park'
)
ON CONFLICT (slug) DO NOTHING;
