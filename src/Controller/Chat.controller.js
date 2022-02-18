const chat = require("../models/chat");

const chatcontroller = {
  sendchat: (req, res) => {
    sender.create(req.body._id, (err, doc) => {
      if (!err) {
        res.send(doc);
      }
    });
  },
  ReciveChat: (req, res) => {
    User.findById(req.body._id, (err, doc) => {
      if (!err) {
        res.send(doc);
      }
    });
  },
};
module.exports = chatcontroller;