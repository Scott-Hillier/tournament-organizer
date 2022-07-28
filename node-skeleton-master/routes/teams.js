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
  VALUES ($1, $2, $3)`;
  const values = [tournament_id, team_id, 0];
  return db.query(query, values);
};

const removeTeam = (db, team_id) => {
  const query = `DELETE FROM teams
  WHERE id = $1;`;
  const values = [team_id];
  return db.query(query, values);
};

const removeTeamFromTournament = (db, tournament_id, team_id) => {
  const query = `DELETE FROM tournament_teams
  WHERE tournament_id = $1
  AND team_id = $2;`;
  const values = [tournament_id, team_id];
  return db.query(query, values);
};

const createGroups = (db, tournament_id, teams) => {
  teams.map((team) => {
    const query = `UPDATE tournament_teams
    SET group_id = $1
    WHERE tournament_id = $2
    AND team_id = $3;`;
    const values = [team.group_id, tournament_id, team.team_id];
    return db.query(query, values);
  });
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
