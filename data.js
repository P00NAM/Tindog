const mongoose= require("mongoose");
const validator= require("validator");

//schema 
const registerSchema= new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        require: true,
        unique: true,
        minlength: 3 
    },
    email:{
        type: String,
        required: true,
        unique:[true, "Email is already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }

    },
    password:{
        type: String,
        required: true,
        minlength: 5
    },
    confirmpassword:{
        type: String,
        required: true,
        minlength: 5
    },
    phone: {
        type:Number,
        min:10,
        
        required:true
    },
    address:{
        type:String
    },
    Breed:{
        type:String
    },
    
        token:{
            type: String,
            required: true
        }
    
})

const Registration = new mongoose.model('Buyers', registerSchema);

module.exports = Registration ;

