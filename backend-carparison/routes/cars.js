var express = require('express');
var router = express.Router();
const db = require('../db');
// db.connect();

// (db) => {
  router.get('/', (req, res) => {

    return db.query(
      `SELECT * FROM cars;`
    )
    .then((data) => {
      res.json(data.rows)
    })
    .catch((err) => {
      console.log('error', err.message)
    })
  })

// }

module.exports = router;