const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const session = require('express-session')
const app = express()
const router = express.Router()
const favicon = require('express-favicon')
const cors = require('cors')
const mongoose = require('mongoose')
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

let User = require('./models/User')

// begin connection to the MongoDB server
mongoose.connect("mongodb+srv://cluster0-h3iy9.mongodb.net/test", {
  useNewUrlParser: true,
  dbName: "newsfeed",
  poolSize: 5,
  user: "pillow",
  pass: "fight"
})


app.post('/login', cors(), async (req, res, next) => {
  let user = new User({
    username: `${req.body.username}`,
    password: `${req.body.password}`
  })
  console.log("Registration was attempted, server received the POST request.")
  // save the new user to the database
  user.find()
  .then( (doc) => {
    // print the output
    console.log(doc)
    res.status(200).json({
      success: true,
      error: null
    })
  })
  // or catch the error
  .catch( (err) => {
    // if the error is code 11000
    // Then MongoDB has thrown a duplicate key error, username is taken
    console.log("User already exists")
    return res.status(500).send({
      success: false,
      error: 'Username already exists'
    })
  })
})

app.post('/register', cors(), async (req, res, next) => {
  let user = new User({
    username: `${req.body.username}`,
    password: `${req.body.password}`,
    firstname: `${req.body.firstname}`,
    lastname: `${req.body.lastname}`
  })
  console.log("Registration was attempted, server received the POST request.")
  // save the new user to the database
  user.save()
  .then( (doc) => {
    // print the output
    console.log(doc)
    res.status(200).json({
      success: true,
      error: null
    })
  })
  // or catch the error
  .catch( (err) => {
    // if the error is code 11000
    // Then MongoDB has thrown a duplicate key error, username is taken
    console.log("User already exists")
    return res.status(500).send({
      success: false,
      error: 'Username already exists'
    })
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



// serve a testing api route "/cow"
app.get('/api/cow/:say', cors(), async (req, res, next) => {
  const text = req.params.say
  res.status(400).json({
    hello: `The server received your message: ${text}`,
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
