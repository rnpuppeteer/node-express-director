var createError = require('http-errors');
var express = require('express');
var logger = require('morgan');
var path = require('path');
//var cookieParser = require('cookie-parser');
//var session = require('express-session');

var app = express();

// Setup middleware
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser('secret code'));
// app.use(session({
//   resave: false,
//   saveUninitialized: false,
//   secret: 'secret code',
//   cookie: {
//     httpOnly: true,
//     secure: false,
//   }
// }));

