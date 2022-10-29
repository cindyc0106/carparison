var express = require('express');
var router = express.Router();

module.exports = (db) => {
  router.get("/users", (req, res) => {
    console.log("users DB file")
    db.query(
      `SELECT * FROM users`
    )
    .then((data) => {
      res.json(data)
      console.log(data)
    })
    .catch((err) => {
      console.log('error')
    })
  })

  return router;
}