const express = require("express");
const router = express.Router();

const getTournamentTeams = (db, tournament_id) => {
  const query = `SELECT * FROM teams
  JOIN tournament_teams
  ON teams.id = tournament_teams.team_id
  WHERE tournament_id = $1;`;
  const values = [tournament_id];
  return db.query(query, values);
};

const addTeam = (db, tournament_id, team) => {
  const query = `INSERT INTO teams (team_name, player1, player2, player3)
  VALUES ($1, $2, $3, $4);`;
  const values = [team.name, team.player1, team.player2, team.player3];
};

module.exports = (db) => {
  router.get("/:tournament_id", (req, res) => {
    getTournamentTeams(db, req.params.tournament_id)
      .then((data) => {
        res.send(data.rows);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.post("/:tournament_id/add", (req, res) => {
    getTournamentTeams(
      db,
      req.body.team.team_name,
      req.body.team.player1,
      req.body.team.player2,
      req.body.team.player3
    )
      .then((data) => {
        res.send(data.rows);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
