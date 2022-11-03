var express = require('express');
var router = express.Router();
const db = require('../db');
// db.connect();


  router.get('/:make/:model/:year', (req, res) => {

    return db.query(
      `SELECT * FROM reviews WHERE car_make = $1 AND car_model = $2 AND car_year = $3 ORDER BY id DESC;`,
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
  const make = res.req.body.make
  const model = res.req.body.model
  const year = res.req.body.year
  return db.query(
    `INSERT INTO reviews (rating, description, user_id, car_make, car_model, car_year)
    VALUES ($1, $2, 1, $3, $4, $5)
    `, [rating, description, make, model, year])
})

module.exports = router;