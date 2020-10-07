const mongoose = require('mongoose');

const user_Schema = new mongoose.Schema({
   username: {
       type: String,
       required: true
   },
   password: {
       type: String,
       required: true
   },
   conected: {
       type: Boolean,
       default: false,
       required: true
   }
})

const user_Collection = mongoose.model('users', user_Schema)

module.exports = user_Collection;