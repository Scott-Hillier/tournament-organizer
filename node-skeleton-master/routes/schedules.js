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
    const query = `SELECT group_id, team_1_name, team_1_id, team_2_name, team_2_id, winner FROM matches
    WHERE tournament_id = $1
    ORDER BY match_id;`;
    const values = [tournament_id];
    return db.query(query, values);
  } else {
    const query = `SELECT round_id, team_1_name, team_1_id, team_2_name, team_2_id, winner FROM matches
    WHERE tournament_id = $1
    ORDER BY match_id;`;
    const values = [tournament_id];
    return db.query(query, values);
  }
};

const deleteGroupMatches = (db, tournament_id, group_id, match) => {
  const query = `DELETE FROM matches
  WHERE tournament_id = $1
  AND group_id = $2;`;
  return db.query(query, values);
};

module.exports = (db) => {
  router.post("/:tournament_id/create", (req, res) => {
    createGroupSchedule(db, req.params.tournament_id, req.body);
    // .then((data) => {
    //   res.send(data.rows);
    // })
    // .catch((err) => {
    //   res.status(500).json({ error: err.message });
    // });
  });

  router.post("/:tournament_id/create/swiss", (req, res) => {
    console.log(req.body);
    createSwissSchedule(db, req.params.tournament_id, req.body);
    // .then((data) => {
    //   res.send(data.rows);
    // })
    // .catch((err) => {
    //   res.status(500).json({ error: err.message });
    // });
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

  router.post("/:tournament_id/randomize", (req, res) => {
    // randomizeGroup(db, req.params.tournament_id, req.body);
    // .then((data) => {
    //   res.send(data.rows);
    // })
    // .catch((err) => {
    //   res.status(500).json({ error: err.message });
    // });
  });

  return router;
};
