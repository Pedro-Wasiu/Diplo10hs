var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Session setup
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'xz82J@ndn!9Ltq7B',
    resave: false,
    saveUninitialized: true,
  })
);

// Example route to set session variable
app.get('/set-nombre/:nombre', function (req, res) {
  req.session.nombre = req.params.nombre;
  res.send(`Session variable 'nombre' set to ${req.params.nombre}`);
});

// Example route to get session variable
app.get('/ejemplo', function (req, res) {
  if (req.session.nombre) {
    res.send('Hola ' + req.session.nombre);
  } else {
    res.send('Hola usuario desconocido.');
  }
});

app.get('/', function(req, res) {
  var conocido = Boolean(req.session.nombre);
  res.render('index', { 
      title: 'Sesiones en Express.js',
      conocido: conocido,
      nombre: req.session.nombre 
  });
});

app.post('/ingresar', function(req, res) {
  if (req.body.nombre) {
      req.session.nombre = req.body.nombre;
  }
  res.redirect('/');
});

app.get('/salir', function(req, res) {
  req.session.destroy();
  res.redirect('/');
});


app.use('/', indexRouter);
app.use('/users', usersRouter);

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function (err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
