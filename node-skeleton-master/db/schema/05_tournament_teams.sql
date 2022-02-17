DROP TABLE IF EXISTS tournament_teams CASCADE;
CREATE TABLE tournament_teams (
  id SERIAL PRIMARY KEY NOT NULL,
  tournaments_id INTEGER NOT NULL,
  teams_id INTEGER NOT NULL
);
