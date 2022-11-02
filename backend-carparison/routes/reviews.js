var express = require('express');
var router = express.Router();
const db = require('../db');
// db.connect();


  router.get('/:make/:model/:year', (req, res) => {

    return db.query(
      `SELECT * FROM reviews WHERE car_make = $1 AND car_model = $2 AND car_year = $3;`,
      [req.params.make, req.params.model, req.params.year])
    .then((data) => {
      res.json(data.rows)
    })
    .catch((err) => {
      console.log('error', err.message)
    })
  })

router.post('/', (req, res) => {
  console.log("response from react:", res.req.body)
  const description = res.req.body.description
  const rating = res.req.body.rating
  return db.query(
    `INSERT INTO reviews (rating, description, user_id, car_id)
    VALUES ($1, $2, 1, 1)
    `, [rating, description])
})

module.exports = router;