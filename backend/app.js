var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require ('morgan')
var cors = require('cors')

var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
// enable support for JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// Serve static files from the React front-end app
// app.use(express.static(path.join(__dirname, '../frontend/build')))

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Serve our api route /cow that returns a custom talking text cow
app.get('/api/cow/:say', cors(), async (req, res, next) => {
  try {
    const text = req.params.say
    res.status(400).json({
    hello: "world",
    goodbye: "world"
   })
  } catch (err) {
    console.log(err)
    next(err)
  }
})

// Serve our base route that returns a Hello World cow
app.get('/api/cow/', cors(), async (req, res, next) => {
  try {
    res.status(400).json({
    hello: "Message from the server: world",
    goodbye: "Message from the server: world"
   })
  } catch (err) {
    console.log(err)
    next(err)
  }
})

// Choose the port and start the server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Mixing it up on port ${PORT}`)
})

module.exports = app;
