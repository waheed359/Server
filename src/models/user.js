const mongoose = require("../db/conn");

const UserSchema = new mongoose.Schema({
  username:{
    type: String,
    required: true},
  email: {
    type: String,
    required: true},
  password: {
    type: String,
    required: true},
  Phone:{
    type: Number,
    required: true},
  roles: String,
});

module.exports = mongoose.model("User", UserSchema);
 