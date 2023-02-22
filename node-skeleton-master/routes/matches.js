const express = require("express");
const router = express.Router();

const getSchedule = (db, tournament_id) => {
  const query = `SELECT id, group_id, match_id, team_1_id, team_2_id, winner FROM matches
  WHERE tournament_id = $1
  ORDER BY match_id;`;
  const values = [tournament_id];
  return db.query(query, values);
};

const createSchedule = (db, tournament_id, matches) => {
  Object.values(matches).map((group) => {
    group.map((match) => {
      const query = `INSERT INTO matches
        (tournament_id, group_id, match_id, team_1_id, team_2_id)
        VALUES ($1, $2, $3, $4, $5);`;
      const values = [
        tournament_id,
        match.groupId,
        match.matchId,
        match.team1Id,
        match.team2Id,
      ];
      if (match.team1Id === "bye" || match.team2Id === "bye") {
        return;
      }
      return db.query(query, values);
    });
  });
};

const updateWinners = (db, tournament_id, matches) => {
  Object.values(matches).map((group) => {
    group.map((match) => {
      console.log(match);
      const query = `UPDATE matches
        SET winner = $1
        WHERE match_id = $2;`;
      const values = [match.winner, match.id];
      return db.query(query, values);
    });
  });
};

module.exports = (db) => {
  router.get("/:tournament_id", (req, res) => {
    getSchedule(db, req.params.tournament_id)
      .then((data) => {
        res.send(data.rows);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.post("/:tournament_id/create", (req, res) => {
    createSchedule(db, req.params.tournament_id, req.body);
  });

  router.post("/:tournament_id/updatewins", (req, res) => {
    updateWinners(db, req.params.tournament_id, req.body);
  });

  return router;
};
