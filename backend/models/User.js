let mongoose = require('mongoose')
let validator = require('mongoose-validator')

let userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    uniqueCaseInsensitive: true,
  },
  password: {
    type: String,
    required: true,
    uniqueCaseInsensitive: false,
  },
  firstname: {
    type: String,
    required: false
  },
  lastname: {
    type: String,
    required: false
  }
})

module.exports = mongoose.model('User', userSchema)
