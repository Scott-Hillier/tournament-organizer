DROP TABLE IF EXISTS tournament_players CASCADE;
CREATE TABLE tournament_players (
  id SERIAL PRIMARY KEY NOT NULL,
  tournament_id INTEGER REFERENCES tournaments(id) ON DELETE CASCADE,
  player_id INTEGER REFERENCES players(id) ON DELETE CASCADE,
  wins INTEGER NOT NULL
);
