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

const getTournamentId = (db, tournament_name, start_date) => {
  const query = `SELECT id
    FROM tournaments
    WHERE tournament_name = $1
    AND start_date = $2;`;
  const values = [tournament_name, start_date];
  return db.query(query, values);
};

const updateNumberOfGroups = (db, number_of_groups, tournament_id) => {
  const query = `UPDATE tournaments
  SET number_of_groups = $1
  WHERE id = $2`;
  const values = [number_of_groups, tournament_id];
  return db.query(query, values);
};

const updateRoundNumber = (db, tournament_id, current_round) => {
  const query = `UPDATE tournaments
  SET round_number = $1
  WHERE id = $2;`;
  const values = [current_round + 1, tournament_id];
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

  router.get("/:tournament_name/:start_date", (req, res) => {
    getTournamentId(db, req.params.tournament_name, req.params.start_date)
      .then((data) => {
        res.send(data.rows);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.post("/:tournament_id/numberOfGroups", (req, res) => {
    updateNumberOfGroups(
      db,
      req.body.number_of_groups,
      req.params.tournament_id
    )
      .then((data) => {
        res.send(data.rows);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.post("/:tournament_id/updateRound", (req, res) => {
    console.log("req", req.body);
    updateRoundNumber(db, req.params.tournament_id, req.body.currentRound)
      .then((data) => {
        res.send(data.rows);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
