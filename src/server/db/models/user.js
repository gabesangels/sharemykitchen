const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
  facebook_uid: String,
  name: String,
  email: String,
  guest: Boolean,
  host: Boolean,
  guest_info: Object,
  host_info: Object,
})

const User = mongoose.model('User', UserSchema)

export default User
