import express from 'express';
import path from 'path';
import bodyParser = require('body-parser');
import session from 'session';
const app = express();
const router = express.Router();
app.use(bodyParser());
app.use(favicon(__dirname + '/build/favicon.ico'));
app.use(session(
  {
    secret: "hashedforprotection"
  }
))
// client can look at our server code ^ .join() defaults to the root directory if none is specified
app.use(express.static(path.join(__dirname, 'build')));

app.use( (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// when the client calls "fetch('api/login')" this is where it will go
router.route('/login').post( (request, response) => {
  console.log(request.body)

  request.session.userID = -1 // TODO change

  // return a 400 HTTP message, with the following JSON object inside
  response.status(400).json({
    message: "hello"
  })
})

// when the client calls "fetch('api/logout')" this is where it will go
router.route('/logout').post( (request, response) => {
  delete request.session.userID
  res.redirect('/index.html')
} )


// commands can be routed to api/RequestName
app.use('/api', router)

// call the listen method, on this port number, with a callback function
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
