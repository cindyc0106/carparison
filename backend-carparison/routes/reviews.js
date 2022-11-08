var express = require('express');
var router = express.Router();
const db = require('../db');
// db.connect();


  router.get('/:make/:model/:year', (req, res) => {

    return db.query(
      `SELECT * FROM reviews WHERE car_make = $1 AND car_model = $2 AND car_year = $3 ORDER BY id DESC;`,
      [req.params.make, req.params.model, req.params.year])
    .then((data) => {
      // console.log("data.rows", res.json(data.rows))
      res.json(data.rows)
    })
    .catch((err) => {
      console.log('error', err.message)
    })
  })

router.post('/', (req, res) => {

  const description = res.req.body.description
  const rating = res.req.body.rating
  const user = res.req.body.user
  const make = res.req.body.make
  const model = res.req.body.model
  const year = res.req.body.year
  return db.query(
    `INSERT INTO reviews (rating, description, user_name, car_make, car_model, car_year)
    VALUES ($1, $2, $3, $4, $5, $6)
    `, [rating, description, user, make, model, year])
})

router.get('/average/:make/:model/:year', (req, res) => {

  return db.query(
    `SELECT AVG(rating) FROM reviews WHERE car_make = $1 AND car_model = $2 AND car_year = $3;`,
    [req.params.make, req.params.model, req.params.year])
  .then((data) => {
    res.json(data.rows)
  })
  .catch((err) => {
    console.log('error', err.message)
  })
})

router.get('/recent', (req, res) => {

  return db.query(
    `SELECT * FROM reviews ORDER BY id DESC LIMIT 3;`)
  .then((data) => {
    res.json(data.rows)
  })
  .catch((err) => {
    console.log('error', err.message)
  })
})
module.exports = router;