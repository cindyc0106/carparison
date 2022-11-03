const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors");
require('dotenv').config()

const usersRouter = require('./routes/users');
const carsRouter = require('./routes/cars');
const reviewsRouter = require('./routes/reviews');
const listsRouter = require('./routes/cars_lists');

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

const items = new Map([[
  1, { priceInCents: 250, name: "Buy a coffee" }
]]) 

const button = document.querySelector("button")
button.addEventListener("click", () => {
  fetch('/checkout'), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      items: [
        { id: 1, quantity: 1}
      ]
    }).then(res => {
      if(res.ok) return res.json()
      return res.json().then(json => Promise.reject(json))
    }).then(({url}) => {
      window.location = url
    }).catch(err => {
      console.log(err.error)
    })
  }
})

const app = express();
const PORT = 3001; 
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.use('/cars', carsRouter);
app.use('/reviews', reviewsRouter);
app.use('/cars_lists', listsRouter);


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}!`);
});

app.post("/checkout", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'], 
      mode: 'payment',
      line_items: req.body.items.map(item => {
        const storeItem = items.get(item.id)
        return {
          price_data: {
            currency: 'cad',
            product_data: {
              name: storeItem.name
            }
          },
          quantity: item.quantity
        }
      }),
      success_url: `${process.env.SERVER_URL}/success.html` ,
      cancel_url: `${process.env.SERVER_URL}/cancel.html` 
    })
    res.json({url: session.url})
  } catch (err) {
    res.status(500).json({error: err.message})
  }
})

module.exports = app;
