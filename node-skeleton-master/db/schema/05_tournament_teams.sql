DROP TABLE IF EXISTS user_tournaments CASCADE;
CREATE TABLE user_tournaments (
  id SERIAL PRIMARY KEY NOT NULL,
  tournaments_id INTEGER NOT NULL,
  teams_id INTEGER NOT NULL
);
