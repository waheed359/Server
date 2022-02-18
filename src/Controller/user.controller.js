const user = require("../models/user");
const User = require("../models/user");

const userController = {
  createUser: (req, res) => {
    User.findOne({email:req.body.email},(err , doc)=>{
      if(doc!==null){
        // console.log(doc);
        //  Object.keys(doc).length ===0
        // res.send(doc)
        res.send('already exist')
      }else {
        User.create(req.body,(err,doc)=>{
          if(!err){
            res.send(doc);
          }
        })
      }
    })},
     
  deleteUser: (req, res) => {
    User.findByIdAndRemove(req.body._id, (err, doc) => {
      if (!err) {
        res.send(doc);
      }
    });
  },
  getUser: (req, res) => {
    User.findById(req.body._id, (err, doc) => {
      if (!err) {
        res.send(doc);
      }
    });
  },
  getAllUsers: (req, res) => {
    User.find(req.body, (err, doc) => {
      if (!err) {
        res.send(doc);
      }
    });
  },
  update: (req, res) => {
    User.findByIdAndUpdate(req.body._id, req.body, (err, doc) => {
      if (!err) {
        res.send(doc);
        console.log(err);
      }
    });
  },
};

module.exports = userController;
