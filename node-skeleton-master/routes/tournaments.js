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

const createTournament = (
  db,
  tournament_name,
  location,
  description,
  number_of_teams,
  start_date,
  end_date,
  format,
  number_of_groups
) => {
  const query = `INSERT INTO tournaments
    (tournament_name, location, description, number_of_teams, start_date, end_date, format, number_of_groups)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`;
  const values = [
    tournament_name,
    location,
    description,
    number_of_teams,
    start_date,
    end_date,
    format,
    number_of_groups,
  ];
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
    createTournament(
      db,
      req.body.tournament_name,
      req.body.location,
      req.body.description,
      req.body.number_of_teams,
      req.body.start_date,
      req.body.end_date,
      req.body.format,
      req.body.number_of_groups
    )
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
