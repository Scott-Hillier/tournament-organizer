DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  team_name VARCHAR(255) NOT NULL,
  player1 VARCHAR(255) NOT NULL,
  player2 VARCHAR(255) NOT NULL,
  player3 VARCHAR(255) NOT NULL,
  player4 VARCHAR(255)
  player5 VARCHAR(255)
  player6 VARCHAR(255)
);
