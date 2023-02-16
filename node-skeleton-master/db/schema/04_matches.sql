DROP TABLE IF EXISTS matches CASCADE;
CREATE TABLE matches (
  id SERIAL PRIMARY KEY NOT NULL,
  tournament_id INTEGER NOT NULL,
  group_id INTEGER NOT NULL,
  match_id INTEGER NOT NULL,
  team_1_id INTEGER NOT NULL,
  team_2_id INTEGER NOT NULL,
  winner INTEGER
);
