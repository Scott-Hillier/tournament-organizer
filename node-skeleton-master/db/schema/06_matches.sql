DROP TABLE IF EXISTS matches CASCADE;
CREATE TABLE matches (
  id SERIAL PRIMARY KEY NOT NULL,
  tournament_id INTEGER REFERENCES tournaments(id) ON DELETE CASCADE,
  group_id INTEGER,
  round_id INTEGER,
  match_id INTEGER,
  team_1_name VARCHAR (255),
  team_1_id INTEGER REFERENCES teams(id) ON DELETE CASCADE,
  team_2_name VARCHAR (255),
  team_2_id INTEGER REFERENCES teams(id) ON DELETE CASCADE,
  winner INTEGER REFERENCES teams(id) ON DELETE CASCADE
);
