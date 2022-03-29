DROP TABLE IF EXISTS tournaments CASCADE;
CREATE TABLE tournaments (
  id SERIAL PRIMARY KEY NOT NULL,
  tournament_name VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  description VARCHAR(255),
  number_of_teams INTEGER NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  format VARCHAR(255),
  number_of_groups INTEGER
);
