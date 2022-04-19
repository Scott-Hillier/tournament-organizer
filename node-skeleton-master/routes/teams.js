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

const addTeam = (db, team) => {
  const query = `INSERT INTO teams (team_name, player1, player2, player3)
  VALUES ($1, $2, $3, $4);`;
  const values = [team.teamName, team.player1, team.player2, team.player3];
  return db.query(query, values);
};

const getTeamID = (db, team) => {
  const query = `SELECT id
  FROM teams
  WHERE team_name = $1
  AND player1 = $2
  AND player2 = $3
  AND player3 = $4;`;
  values = [team.teamName, team.player1, team.player2, team.player3];
  return db.query(query, values);
};

const addTeamToTournament = (db, tournament_id, team_id) => {
  const query = `INSERT INTO tournament_teams (tournament_id, team_id, group_id)
  VALUES ($1, $2, 0)`;
  const values = [tournament_id, team_id];
  return db.query(query, values);
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
    addTeam(db, req.body)
      .then((data) => {
        getTeamID(db, req.body).then((ID) => {
          addTeamToTournament(
            db,
            req.params.tournament_id,
            ID.rows[ID.rows.length - 1].id
          );
        });
        res.send(data.rows);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
