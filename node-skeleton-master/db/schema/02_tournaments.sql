DROP TABLE IF EXISTS tournaments CASCADE;
CREATE TABLE tournaments (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  description VARCHAR(255),
  number_of_teams INTEGER,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  format VARCHAR(255),
  squad BOOLEAN,
  number_of_groups INTEGER,
  round_number INTEGER
);
