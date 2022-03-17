const express = require("express");
const router = express.Router();

module.exports = (db) => {
  console.log("loading");
  router.get("/all", (req, res) => {
    console.log("router.get");
    db.query(`SELECT * FROM tournaments`)
      .then((data) => {
        console.log(data.rows);
        res.send(data.rows);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
