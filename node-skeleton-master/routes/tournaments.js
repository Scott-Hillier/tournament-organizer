const express = require("express");
const router = express.Router();

const getAllTournaments = (db) => {
  const query = `SELECT * FROM tournaments;`;
  return db.query(query);
};

const getTournamentInfo = (db, tournament_id) => {
  const query = `SELECT * FROM tournaments WHERE id=$1;`;
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
  end_date
) => {
  const query = `INSERT INTO tournaments
    (tournament_name, location, description, number_of_teams, start_date, end_date)
    VALUES ($1, $2, $3, $4, $5, $6);`;
  const values = [
    tournament_name,
    location,
    description,
    number_of_teams,
    start_date,
    end_date,
  ];

  return db.query(query, values);
};

const getTournamentId = (db, tournament_name, start_date) => {
  console.log("getTournamentId: ", tournament_name);
  const query = `SELECT id
    FROM tournaments
    WHERE tournament_name = $1
    AND start_date = $2;`;
  const values = [tournament_name, start_date];
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
    getTournamentInfo(db, req.params.tournament_id)
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
      req.body.end_date
    )
      .then((data) => {
        console.log("Tournament added!");
        res.send(data);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.get("/:tournament_id", (req, res) => {
    console.log("ROUTER.GET");
    getTournamentId(db, req.body.tournament_name, req.body.start_date)
      .then((data) => {
        res.send(data.rows);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
