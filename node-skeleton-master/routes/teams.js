const express = require("express");
const router = express.Router();

const getTournamentTeams = (db, tournament_id) => {
  console.log("FUNCTION");
  const query = `SELECT * FROM teams
  JOIN tournament_teams
  ON teams.id = tournament_teams.team_id
  WHERE tournament_id = $1;`;
  const values = [tournament_id];
  return db.query(query, values);
};

module.exports = (db) => {
  router.get("/:tournament_id", (req, res) => {
    console.log("ROUTER.GET");
    getTournamentTeams(db, req.params.tournament_id)
      .then((data) => {
        res.send(data.rows);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
