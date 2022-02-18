const mongoose =require("mongoose");
 
// consturi = "mongodb+srv://pcchart:1234@cluster0.p4dxa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const uri = "mongodb://localhost:27017/PChart";

// mongodb+srv://user:1234@cluster0.z6mdb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority



mongoose.connect(uri,{

useNewUrlParser: true,

 

// useFindAndModify: false,

useUnifiedTopology: true,

});



module.exports= mongoose