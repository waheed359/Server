

const express = require("express");
const cors = require("cors");
// const http = require('http')
const app = express();

const router = require("./routes/user.routes");
// const router = require("./routes/chat.routes");

const port = process.env.PORT || 9000;

const startServer = () => {
  app.use(cors({ origin: true}));
  // action="/signup"
  // // app.use(bodyParser.urlencoded({extended: true }));
// action = 
  app.use(express.static("public"));

  app.use(express.json());

  // app.use(fileUpload({createParentPath : true}))
  // app.get('/login', function(req, res){
  //   res.render('register', {
  //     title: 'Register',
  //     msg   : req.query.msg
  //   })
  // })
  //  app.post('/signup', function(req, res){
  //   CreatNewUser(req, res);
  //  })
  // action="http://localhost:3000/login"
  app.use(router)
  // app.use(router);

  app.listen(port, function () {
    console.log(`Server started on port 9000`);
  });
};

startServer();
