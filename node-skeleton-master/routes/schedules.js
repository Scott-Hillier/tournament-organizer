const express = require("express");
const router = express.Router();

const createSchedule = (db, tournament_id, group) => {
  console.log(group);
  group.map((match) => {
    const query = `INSERT INTO matches (tournament_id, group_id, team_1_name, team_1_id, team_2_name, team_2_id)
      VALUES ($1, $2, $3, $4, $5, $6);`;
    const values = [
      tournament_id,
      match.group,
      match.team1Name,
      match.team1ID,
      match.team2Name,
      match.team2ID,
    ];
    return db.query(query, values);
  });
};

const getSchedule = (db, tournament_id) => {
  const query = `SELECT group_id, team_1_name, team_2_name, winner FROM matches
  WHERE tournament_id = $1;`;
  const values = [tournament_id];
  return db.query(query, values);
};

module.exports = (db) => {
  router.post("/:tournament_id/create", (req, res) => {
    createSchedule(db, req.params.tournament_id, req.body);
    // .then((data) => {
    //   res.send(data.rows);
    // })
    // .catch((err) => {
    //   res.status(500).json({ error: err.message });
    // });
  });

  router.get("/:tournament_id/matches", (req, res) => {
    getSchedule(db, req.params.tournament_id, req.body)
      .then((data) => {
        res.send(data.rows);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
