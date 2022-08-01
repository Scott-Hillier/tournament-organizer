const express = require("express");
const router = express.Router();

const getTournamentPlayers = (db, tournament_id) => {
  const query = `SELECT * FROM players
  JOIN tournament_players
  ON players.id = tournament_players.player_id
  WHERE tournament_id = $1;`;
  const values = [tournament_id];
  return db.query(query, values);
};

module.exports = (db) => {
  router.get("/:tournament_id", (req, res) => {
    getTournamentPlayers(db, req.params.tournament_id)
      .then((data) => {
        res.send(data.rows);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
