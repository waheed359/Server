const mongoose = require("../db/conn");

const ChatSchema = new mongoose.Schema({
  Sender:{
    type: String,
    },
  Reciver: {
    type: String,
    },
  
  
});

module.exports = mongoose.model("Chat", ChatSchema);
 