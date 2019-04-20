const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const session = require('express-session')
const app = express()
const router = express.Router()
const favicon = require('express-favicon')
const cors = require('cors')
// support parsing jsons
app.use(bodyParser.json());
// load the favicon
app.use(favicon(path.join('./frontend/build/favicon.ico')))
// store session variables
app.use(session({
  secret: "hashedforprotection"
}))
// client can look at our server code ^ .join() defaults to the root directory if none is specified
app.use(express.static(path.join('./frontend/build')))

// serve a testing api route "/cow"
app.get('/api/cow/:say', cors(), async (req, res, next) => {
  const text = req.params.say
  res.status(400).json({
    hello: "Message from the server: world",
    goodbye: "Message from the server: world"
  })
})

// Serve our base route that returns "world"
app.get('/api/cow/', cors(), async (req, res, next) => {
  res.status(400).json({
    hello: "no reason to visit this url directly, how did you *get* here",
    goodbye: "no reason to visit this url directly, how did you *get* here"
  })
})

app.get('/', async (req, res) => {
  res.sendFile(path.join('./frontend/build/index.html'))
})

// Choose the port and start the server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Mixing it up on port ${PORT}`)
})

module.exports = app;
