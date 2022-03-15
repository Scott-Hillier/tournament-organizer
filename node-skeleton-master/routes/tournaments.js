const { query } = require("express");
const express = require("express");
const axios = require("axios");
const router = express.Router();

const getUpcomingTournaments = (db) => {
  console.log("THIS IS THE FUNCTION");
  const query = `SELECT * FROM tournaments;`;
  return db.query(query);
};

module.exports = (db) => {
  router.get("/tournaments/upcoming", (req, res) => {
    console.log("HIT2");
    getUpcomingTournaments(db)
      .then((data) => {
        console.log("DATA: ", data);
        res.send(data.rows);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};

// module.exports = (db) => {
//   router.get("/", (req, res) => {
//     let query = `SELECT * FROM widgets`;
//     console.log(query);
//     db.query(query)
//       .then(data => {
//         const widgets = data.rows;
//         res.json({ widgets });
//       })
//       .catch(err => {
//         res
//           .status(500)
//           .json({ error: err.message });
//       });
//   });
//   return router;
// };
