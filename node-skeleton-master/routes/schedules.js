const express = require("express");
const router = express.Router();

const createSchedule = (db, tournament_id, matches) => {
  console.log("HIT2");
  const query = ``;
  const values = [];
  return db.query(query, values);
};

module.exports = (db) => {
  router.post("/:tournament_id/create", (req, res) => {
    console.log("HIT");
    createSchedule(db, req.params.tournament_id, req.body.matches)
      .then((data) => {
        res.send(data.rows);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
