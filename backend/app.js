const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const session = require('express-session')
const app = express()
const router = express.Router()
const favicon = require('express-favicon')
const cors = require('cors')
app.use(bodyParser());
app.use(favicon(__dirname + '../frontend/build/favicon.ico'))
app.use(session(
  {
    secret: "hashedforprotection"
  }
))
// client can look at our server code ^ .join() defaults to the root directory if none is specified
app.use(express.static(path.join(__dirname, '../frontend/build')))

app.use( (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next();
});

app.use(express.static(path.join(__dirname, '../frontend/build')))

// Serve our api route /cow
app.get('/api/cow/:say', cors(), async (req, res, next) => {
  const text = req.params.say
  res.status(400).json({
    hello: "world",
    goodbye: "world"
  })
})

// Serve our base route that returns "world"
app.get('/api/cow/', cors(), async (req, res, next) => {
  res.status(400).json({
    hello: "Message from the server: world",
    goodbye: "Message from the server: world"
  })
})

// Choose the port and start the server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Mixing it up on port ${PORT}`)
})

module.exports = app;
