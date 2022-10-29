var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const db = require('./db');
// const dbHelpers = require('./helpers/dbHelpers')(db);

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();
const PORT = 3001; 

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/api/users', usersRouter(dbHelpers));


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}!`);
});

module.exports = app;
