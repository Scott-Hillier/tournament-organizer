const express = require("express");
const router = express.Router();

const createGroupSchedule = (db, tournament_id, group) => {
  group.map((match) => {
    const query = `INSERT INTO matches (tournament_id, group_id, match_id, team_1_name, team_1_id, team_2_name, team_2_id)
      VALUES ($1, $2, $3, $4, $5, $6, $7);`;
    const values = [
      tournament_id,
      match.group,
      match.match_id,
      match.team1Name,
      match.team1ID,
      match.team2Name,
      match.team2ID,
    ];
    return db.query(query, values);
  });
};

const createSwissSchedule = (db, tournament_id, matches) => {
  matches.map((match) => {
    const query = `INSERT INTO matches (tournament_id, round_id, match_id, team_1_name, team_1_id, team_2_name, team_2_id)
      VALUES ($1, $2, $3, $4, $5, $6, $7);`;
    const values = [
      tournament_id,
      match.round,
      match.match_id,
      match.team1Name,
      match.team1ID,
      match.team2Name,
      match.team2ID,
    ];
    return db.query(query, values);
  });
};

const getSchedule = (db, tournament_id, format) => {
  if (format === "Round Robin") {
    const query = `SELECT group_id, match_id, team_1_name, team_1_id, team_2_name, team_2_id, winner FROM matches
    WHERE tournament_id = $1
    ORDER BY match_id;`;
    const values = [tournament_id];
    return db.query(query, values);
  } else {
    const query = `SELECT round_id, match_id, team_1_name, team_1_id, team_2_name, team_2_id, winner FROM matches
    WHERE tournament_id = $1
    ORDER BY match_id;`;
    const values = [tournament_id];
    return db.query(query, values);
  }
};

const selectWinner = (db, team_id, tournament_id, match_id) => {
  const query = `UPDATE matches
  SET winner = $1
  WHERE tournament_id = $2
  AND match_id = $3;`;
  const values = [team_id, tournament_id, match_id];
  return db.query(query, values);
};

const updateWins = (db, tournament_id, teams) => {
  teams.map((team) => {
    const query = `UPDATE tournament_teams
    SET wins = $1
    WHERE tournament_id = $2
    AND team_id = $3;`;
    const values = [team.wins + 1, tournament_id, team.team_id];
    return db.query(query, values);
  });
};

const getWins = (db, tournament_id) => {
  const query = `SELECT * FROM tournament_teams
    WHERE tournament_id = $1;`;
  const values = [tournament_id];
  return db.query(query, values);
};

module.exports = (db) => {
  router.post("/:tournament_id/create", (req, res) => {
    createGroupSchedule(db, req.params.tournament_id, req.body)
      // .then((data) => {
      //   res.send(data.rows);
      // })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.post("/:tournament_id/create/swiss", (req, res) => {
    createSwissSchedule(db, req.params.tournament_id, req.body);
  });

  router.post("/:tournament_id/winner", (req, res) => {
    selectWinner(
      db,
      req.body.team_id,
      req.params.tournament_id,
      req.body.match_id
    ).catch((err) => {
      res.status(500).json({ error: err.message });
    });
  });

  router.post("/:tournament_id/wins", (req, res) => {
    // updateWins(
    //   db,
    //   req.body.team_id,
    //   req.params.tournament_id,
    //   req.body.match_id
    // );
    // .then((data) => {
    //   res.send(data.rows);
    // })
    // .catch((err) => {
    //   res.status(500).json({ error: err.message });
    // });
  });

  router.post("/:tournament_id/updateWins", (req, res) => {
    const winnersArray = [];
    getWins(db, req.params.tournament_id)
      .then((data) => {
        console.log(req.body.matches);
        req.body.matches.map((match) => {
          for (const team of data.rows) {
            if (team.team_id === match.winner) {
              winnersArray.push(team);
            }
          }
        });
      })
      .then(() => {
        updateWins(db, req.params.tournament_id, winnersArray);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.get("/:tournament_id/:format/matches", (req, res) => {
    getSchedule(db, req.params.tournament_id, req.params.format)
      .then((data) => {
        res.send(data.rows);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
