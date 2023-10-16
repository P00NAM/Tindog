const jwt = require("jsonwebtoken");

const SECRET_KEY= "NOTESAPI";

function createToken(user){
    return jwt.sign(
        {
        id: user.id,
        "name" : user.name,
        "email": user.email,
        "phone": user.phone,
        "address": user.address,
        
        }
     , SECRET_KEY);
    
}

function validateToken(token){
    if(!token) return null;
    return jwt.verify(token, SECRET_KEY);
    
}

module.exports = {
    createToken,
    validateToken,
}