DROP TABLE IF EXISTS tournament_teams CASCADE;
CREATE TABLE tournament_teams (
  id SERIAL PRIMARY KEY NOT NULL,
  tournament_id INTEGER REFERENCES tournaments(id) ON DELETE CASCADE,
  team_id INTEGER REFERENCES teams(id) ON DELETE CASCADE,
  group_id INTEGER
);
