const express = require("express");
const router = express.Router();

const createSchedule = (db, tournament_id, group) => {
  group.map((match) => {
    console.log("match", match.team1);
    const query = `INSERT INTO matches (tournament_id, group_id, team_1, team_2)
      VALUES ($1, $2, $3, $4);`;
    const values = [tournament_id, match.group, match.team1, match.team2];
    return db.query(query, values);
  });
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

  return router;
};
