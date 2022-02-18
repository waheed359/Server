// const db = require("../db/conn");

// const testSchema = new db.Schema({
//   Email: String,
//   Password: String,
// });

// module.exports = db.model("Test", testSchema);


const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user");
db.Chat = require("./Chat");
db.role = require("./role");

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;