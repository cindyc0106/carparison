var express = require('express');
var router = express.Router();
const db = require('../db');
// db.connect();

// (db) => {
  router.get('/', (req, res) => {

    return db.query(
      `SELECT * FROM users;`
    )
    .then((data) => {
      res.json(data.rows)
    })
    .catch((err) => {
      console.log('error', err.message)
    })
  })

  router.post('/', (req, res) => {
    console.log('res from users', res.req.body);
  })
// }

module.exports = router;