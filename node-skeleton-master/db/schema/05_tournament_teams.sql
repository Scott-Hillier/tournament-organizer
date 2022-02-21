DROP TABLE IF EXISTS tournament_teams CASCADE;
CREATE TABLE tournament_teams (
  id SERIAL PRIMARY KEY NOT NULL,
  tournament_id INTEGER NOT NULL,
  team_id INTEGER NOT NULL
);
