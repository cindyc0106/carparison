const express = require('express');
const router = express.Router();
const db = require('../db');
// db.connect();
// const axios = require("axios");
require('dotenv').config();


  router.get('/', (req, res) => {

    return db.query(
      `SELECT * FROM cars_lists;`
    )
    .then((data) => {
      res.json(data.rows)
    })
    .catch((err) => {
      console.log('error', err.message)
    })

  })
module.exports = router;