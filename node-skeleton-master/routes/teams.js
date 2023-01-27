const express = require("express");
const router = express.Router();

const getTournamentTeams = (db, tournament_id) => {
  const query = `SELECT *
  FROM teams
  WHERE tournament_id = $1;`;
  const values = [tournament_id];
  return db.query(query, values);
};

module.exports = (db) => {
  router.get("/:tournament_id", (req, res) => {
    console.log("REQ", req.params.tournament_id);
    getTournamentTeams(db, req.params.tournament_id)
      .then((data) => {
        res.send(data.rows);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.post("/:tournament_id/add", (req, res) => {
    addTeam(db, req.body)
      .then((data) => {
        getTeamID(db, req.body).then((ID) => {
          addTeamToTournament(
            db,
            req.params.tournament_id,
            ID.rows[ID.rows.length - 1].id,
            req.body.group
          );
        });
        res.send(data.rows);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.post("/:tournament_id/remove", (req, res) => {
    removeTeamFromTournament(db, req.params.tournament_id, req.body.team_id)
      .then((data) => {
        removeTeam(db, req.body.team_id);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.post("/:tournament_id/groups", (req, res) => {
    createGroups(db, req.params.tournament_id, req.body);
  });

  return router;
};
