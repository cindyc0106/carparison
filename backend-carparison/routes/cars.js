const express = require('express');
const router = express.Router();
const db = require('../db');
// db.connect();
const axios = require("axios");

// (db) => {
  router.get('/', (req, res) => {
  console.log("main page:", req.body)
    // console.log('req.params', req.params)
    // console.log('req.body', req.body)
    
   

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

  router.get('/:make/:model/:year',(req, res)=>{

    console.log("req params:", req.params)

     const options = {
      method: 'GET',
      url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
      params: {make: `${req.params.make}`, model: `${req.params.model}`, year: `${req.params.year}`},
      headers: {
        'X-RapidAPI-Key': '9f187eb2d6mshc202d7cdb328f77p1e39c4jsn555dae14060a',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
      }
    };
    
    return axios.request(options)
    .then(function (response) {
      console.log("response data:", response.data);
      res.json(response.data)
    }).catch(function (error) {
      console.error(error);
    });

  })
// }

module.exports = router;