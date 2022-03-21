const express = require("express");
const router = express.Router();

const getAllTournaments = (db) => {
  const query = `SELECT * FROM tournaments;`;
  return db.query(query);
};

const getTournamentInfo = (db, tournament_id) => {
  console.log("tournament_id", tournament_id);
  const query = `SELECT * FROM tournaments WHERE id=$1;`;
  const values = [tournament_id];
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
    console.log("req.params", req.params);
    getTournamentInfo(db, req.params.tournament_id)
      .then((data) => {
        console.log(data.rows);
        res.send(data.rows);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
