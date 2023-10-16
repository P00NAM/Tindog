
const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/user-registration", 
{ autoIndex:false, useNewUrlParser:true, useUnifiedTopology:true
}).then(() => {console.log("connection successfully");
}).catch((err) => {
    console.log(err); 
})
