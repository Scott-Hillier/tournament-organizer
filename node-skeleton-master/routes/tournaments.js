const express = require("express");
const router = express.Router();

const getAllTournaments = (db) => {
  const query = `SELECT * FROM tournaments;`;
  return db.query(query);
};

const getTournament = (db, tournament_id) => {
  const query = `SELECT *
  FROM tournaments
  WHERE id = $1;`;
  const values = [tournament_id];
  return db.query(query, values);
};

const createTournament = (db, organize) => {
  const {
    name,
    location,
    description,
    numberOfTeams,
    startDate,
    endDate,
    format,
    teamSize,
    numberOfGroups,
  } = organize;
  const query = `INSERT INTO tournaments
    (name, location, description, number_of_teams,
    start_date, end_date, format, team_size, number_of_groups)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);`;
  const values = [
    name,
    location,
    description,
    numberOfTeams,
    startDate,
    endDate,
    format,
    teamSize,
    numberOfGroups,
  ];
  return db.query(query, values);
};

const getTournamentId = (db, organize) => {
  const { name, startDate } = organize;
  const query = `SELECT id
  FROM tournaments
  WHERE name = $1
  AND start_date = $2;`;
  const values = [name, startDate];
  return db.query(query, values);
};

module.exports = (db) => {
  router.get("/all", (req, res) => {
    getAllTournaments(db)
      .then((data) => {
        res.send(data.rows);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.get("/:tournament_id", (req, res) => {
    getTournament(db, req.params.tournament_id)
      .then((data) => {
        res.send(data.rows);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.post("/create", (req, res) => {
    createTournament(db, req.body)
      .then((data) => {
        getTournamentId(db, req.body).then((data) => {
          res.send(data.rows);
        });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
