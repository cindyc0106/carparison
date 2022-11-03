const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors");
require('dotenv').config();

const stripe = require('stripe')(`${process.env.STRIPE_PRIVATE_KEY}`);
// const dbHelpers = require('./helpers/dbHelpers')(db);

// var indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const carsRouter = require('./routes/cars');
const reviewsRouter = require('./routes/reviews');
const listsRouter = require('./routes/cars_lists');

const app = express();
const PORT = 3001; 
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.use('/cars', carsRouter);
app.use('/reviews', reviewsRouter);
app.use('/cars_lists', listsRouter);

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: 'price_1M079aKPWu57wspdTEO7uj6I',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${process.env.CLIENT_URL}?success=true`,
    cancel_url: `${process.env.CLIENT_URL}?canceled=true`,
  });

  res.redirect(303, session.url);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}!`);
});

module.exports = app;
