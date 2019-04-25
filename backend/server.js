const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const session = require('cookie-session')
const app = express()
const router = express.Router()
const favicon = require('express-favicon')
const cors = require('cors')
// wrapper for MongoDB server access
const mongoose = require('mongoose')
// support parsing jsons
app.use(bodyParser.json());
// load the favicon
app.use(favicon(path.join('./frontend/build/favicon.ico')))

// client can look at our server code ^ .join() defaults to the root directory if none is specified
app.use(express.static(path.join('./frontend/build')))

let User = require('./models/User')

// options for the database
let options = {
  useNewUrlParser: true,
  dbName: "newsfeed",
  poolSize: 5,
  user: "pillow",
  pass: "fight"
}

// begin connection to the MongoDB server
mongoose.connect("mongodb+srv://cluster0-h3iy9.mongodb.net/test", options)

// POST request to login a new user
app.post('/login', cors(), async (request, response) => {
  let query = User.findOne({
    // query parameters in json
    username: `${request.body.username}`,
    password: `${request.body.password}`
  })
  // callback function for a query, executed when calling query.exec()
  query.exec()
  // callback function for a query, executed when calling query.exec()
  .then( (doc) => {
    response.status(200).send(doc)
  })
  .catch( (error) => {
    response.status(400).send(error)
  })
})

// POST request to register a new user
app.post('/register', cors(), async (request, response) => {
  let user = new User({
    username: `${request.body.username}`,
    password: `${request.body.password}`,
    firstname: `${req.body.firstname}`,
    lastname: `${req.body.lastname}`
  })
  // save the new user to the database
  user.save()
  .then( (doc) => {
    // print the output
    response.status(200).json(doc)
  })
  // or catch the error
  .catch( (error) => {
    // if the error is code 11000
    // Then MongoDB has thrown a duplicate key error, username is taken
    return response.status(400).send(error)
  })
})

// POST request to update the user's topic preferences
app.post('/update', cors(), async (request, response) => {
  let user = new User.findOne({
    username: `${request.body.username}`
  })
  user.set(request.body.topics)
  .then ( (doc) => {
    response.status(200).json(doc)
  })
  .catch( (error) => {
    response.status(500).json(error)
  })
})

// POST request to add a user's comment to the database
app.post('/comment', cors(), async (request, response) => {
  let comment = new Comment({
    content: `${request.body.content}`,
    user: `${request.body.user}`
  })
  // save the comment to the database
  comment.save()
  .then ( (doc) => {
    response.status(200).json(doc)
  })
  .catch( (error) => {
    response.status(500).json(error)
  })
})

// POST request to add a user's search to the database
app.post('/search', cors(), async (request, response) => {
  let search = new Search({
    content: `${request.body.content}`,
    user: `${request.body.user}`
  })
  // save the search to the database
  search.save()
  .then ( (doc) => {
    response.status(200).json(doc)
  })
  .catch( (error) => {
    response.status(500).json(error)
  })
})

// POST request to share the user's current article with a phone number
app.post('/share', cors(), async (request, response) => {
  let accountSid = process.env.TWILIO_SID
  let authToken = process.env.TWILIO_TOKEN
  let myNumber = process.env.TWILIO_NUMBER

  const client = require('twilio')(accountSid, authToken)
  client.messages
  .create({
     body: `${request.body.message}`,
     from: myNumber,
     to: `${request.body.recipient}`
   })
  .then(message => response.status(200).json(message.sid))
})

// GET request to for recent articles in the "all" category
app.get('/all', cors(), async (request, response) => {
  // TODO
})
// GET request for recent articles in the "entertainment" category
app.get('/entertainment', cors(), async (request, response) => {
  // TODO
})
// GET request for recent articles in the "sports" category
app.get('/sports', cors(), async (request, response) => {
  // TODO
})
// GET request for recent articles in the "politics" category
app.get('/politics', cors(), async (request, response) => {
  // TODO
})
// GET request for recent articles in the "technology" category
app.get('/technology', cors(), async (request, response) => {
  // TODO
})
// GET request for recent articles in the "business" category
app.get('/business', cors(), async (request, response) => {
  // TODO
})
// GET request for recent articles in the "science" category
app.get('/science', cors(), async (request, response) => {
  // TODO
})

// default redirect, loads the application when the user visits the site
app.get('/', async (req, res) => {
  res.sendFile(path.join('./frontend/build/index.html'))
})

// Choose the port and start the server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Mixing it up on port ${PORT}`)
})


// TODO validate the incoming HTTP content for HTTPS

/*

// validate SSL for first article
if (data.articles[i].url.substring(0,5) !== "https" || data.articles[i].urlToImage.substring(0,5) !== "https")
{
  console.log(data.articles[i].url)
  console.log(data.articles[i].urlToImage)
  i-=2
  continue // will advance forward one index
}
// validate SSL for second article
else if (data.articles[i+1].url.substring(0,5) !== "https" || data.articles[i+1].urlToImage.substring(0,5) !== "https")
{
  console.log(data.articles[i+1].url)
  console.log(data.articles[i+1].urlToImage)
  i-=1
  continue // will advance forward two indeces
}
// validate SSL for third article
else if (data.articles[i+2].url.substring(0,5) !== "https" || data.articles[i+2].urlToImage.substring(0,5) !== "https")
{
  console.log(data.articles[i+2].url)
  console.log(data.articles[i+2].urlToImage)
  continue // will advance forward three indeces
}

*/
