const express = require("express");
const router = express.Router();

const getSchedule = (db, tournament_id) => {
  const query = `SELECT * FROM matches
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

const updateWinners = (db, results) => {
  console.log(results);
  Object.keys(results).map((matchId) => {
    let winner = 0;
    if (results[matchId].team1Score > results[matchId].team2Score) {
      winner = results[matchId].team1Id;
    } else {
      winner = results[matchId].team2Id;
    }
    const query = `UPDATE matches
    SET team_1_score = $1, team_2_score = $2, winner = $3
    WHERE id = $4;`;
    const values = [
      results[matchId].team1Score,
      results[matchId].team2Score,
      winner,
      matchId,
    ];
    return db.query(query, values);
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

  router.post("/:tournament_id/updateResults", (req, res) => {
    updateWinners(db, req.body);
  });

  return router;
};
