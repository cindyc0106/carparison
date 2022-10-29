const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors");

// const dbHelpers = require('./helpers/dbHelpers')(db);

// var indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const carsRouter = require('./routes/cars');
const reviewsRouter = require('./routes/reviews');

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


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}!`);
});

module.exports = app;
