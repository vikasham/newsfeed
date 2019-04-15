const express = require('express');
const favicon = require('express-favicon');
const path = require('path'); // still have to import this in server.js
// however, this is a default node app, no need to 'yarn add path'
var bodyParser = require('body-parser');



/*
this is the syntax to import express, don't ask.
reason: disagreement between two programmers.
a compromise was reached, common JS standard of importing is better
than the standard used in ECMAScript7

This is just how you include things in Node, the server-side
*/

// app is a variable returned by the express() method
const app = express();
const router = express.Router();

// all caps because its a constant
const PORT = process.env.PORT || 3000;
// similar to os.env() in Python
// if there is no environment variable called PORT in the server, make it 3000

// the use() method lets you define middleware
// middleware: a piece of code that runs on the server in between requests

// example: if you want to do authentication, you might write middleware
// so that between the request, runs the authentication process
// before the server responds, the middleware runs, then finishes, and then
// the response will send only once the middleware has completed and returned
app.use(favicon(__dirname + '/build/favicon.ico'));

// client can look at our server code ^ .join() defaults to the root directory if none is specified
app.use(express.static(path.join(__dirname, 'build')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// .static()
// we don't want any user to access any item on our file system.
// we have to explicitly tell express "these are the directories that contain static assets"
// 'static' assets are "stylesheets, images, javascript, etc." any non-server content that the client
// should be able to access.



// call the HTTP method that you want to handle
// the top-level url is just '/'

// receives a request, and a response

// the wildcard means that this route will work for any place you access our site
// what this is doing is "no matter where we try to go, send it to index.html"
// reason: react code only uses "index.html"

// when the client calls "fetch('api/login')" this is where it will go
router.route('/login').post(function(request, response) {
  console.log(request.body)
  // return a 400 HTTP message, with the following JSON object inside
  response.status(400).json({
    message: "hello"
  })
})

// when the client calls "fetch('api/logout')" this is where it will go
router.route('/logout').post(function(request, response) {
  delete request.session.userID
  res.redirect('/index.html')
} )

app.use(bodyParser());
// commands can be routed to api/RequestName
app.use('/api', router)


// app.get('/', (request, response) => {
//   response.sendFile(path.join(__dirname, 'build', 'index.html'));
// })

// call the listen method, on this port number, with a callback function
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
