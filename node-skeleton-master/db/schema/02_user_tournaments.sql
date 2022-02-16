DROP TABLE IF EXISTS user_tournaments CASCADE;
CREATE TABLE user_tournaments (
  id SERIAL PRIMARY KEY NOT NULL,
  users_id INTEGER NOT NULL,
  tournaments_id INTEGER NOT NULL
);
