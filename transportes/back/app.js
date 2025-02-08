var createError = require('http-errors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');


require('dotenv').config();
const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();

var fileUpload = require('express-fileupload');


// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: process.env.SESSION_SECRET || 'default_secret',
    resave: false,
    saveUninitialized: false
}));

// Configuración de vistas
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

const secured = async (req, res, next) => {
  try {
      if (req.session.id_usuario) {
          next();
      } else {
          res.redirect('/admin/login');
      }
  } catch (error) {
      console.error(error);
      res.redirect('/admin/login');
  }
};

module.exports = { secured };


app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));


// Rutas principales
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/admin/login');
var adminRouter = require('./routes/admin/novedades');
var apiRouter = require('./routes/api');




// Middleware para registrar logs, parsear JSON y cookies
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Definir las rutas
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin/login', loginRouter);
app.use('/admin/novedades', secured, adminRouter); // Protegido con secured
app.use('/api', cors(), apiRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;