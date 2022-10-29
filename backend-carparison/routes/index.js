var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/users', (req, res) => {
  db.query(
    `SELECT * FROM users`
  )
  .then((data) => {
    res.json(data)
    console.log("test")
  })
  .catch((err) => {
    console.log('error')
  })
});

module.exports = router;
