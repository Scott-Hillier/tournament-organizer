DROP TABLE IF EXISTS user_tournaments CASCADE;
CREATE TABLE user_tournaments (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER NOT NULL,
  tournament_id INTEGER NOT NULL
);
