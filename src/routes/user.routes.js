const controller = require("../Controller/user.controller");
const express = require("express");
const user = require("../models/user");
const { createUser } = require("../Controller/user.controller");
const { check, validationResult} = require("express-validator");
const { Router } = require("express");
const app = express.Router();

const route = {
  "/createUser": (req, res) => {
    controller.createUser(req, res);
    
},
  "/deleteUser": (req, res) => {
    controller.deleteUser(req, res);
  },
  "/getUser": (req, res) => {
    controller.getUser(req, res);
  },
  "/getAllUsers": (req, res) => {
    controller.getAllUsers(req, res);
  },
  "/updateuser": (req, res) => {
    controller.update(req, res);
  },
};

app.use("/", (req, res) => {
  const path = req.path;
  console.log(path);
  route[path](req, res);
});

// app.post(
  
//   [
//       check("username", "Please Enter a Valid Username")
//       .not()
//       .isEmpty(),
//       check("email", "Please enter a valid email").isEmail(),
//       check("password", "Please enter a valid password").isLength({
//           min: 6
//       })
//   ]),
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({
//             errors: errors.array()
//         });
//     }

//     const {
//         username,
//         email,
//         password
//     } = req.body;
//     try {
//         let user = await user.findOne({
//             email
//         });
//         if (user) {
//             return res.status(400).json({
//                 msg: "User Already Exists"
//             });
//         }

//         user = new User({
//             username,
//             email,
//             password
//         });
//       }catch (err) {
//         console.log(err.message);
//         res.status(500).send("Error in Saving");
//     }
//   };

// app.use("/signup", (req, res) => {
//   const path = req.path;
//   console.log(path);
//   res.redirect("/login")
// });

// app.post('/Login', function(req, res) {

//   var username = req.body.username;
//   var password = req.body.password;
//   User.addUser(username, password, function(err, user) {
//       if (err) throw err;
//       res.redirect('/Home');
//   });
// });
//  app.get('/user', user.findAll);
//  app.put('/user/:userId', user.update);
//  app.delete('/user/:userId', user.delete);

module.exports = app;
