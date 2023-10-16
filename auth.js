const sessionIdToUserMap = new Map();

function setUser(user){
    return JsonWebTokenError.sign(user)
}

function getUser(id){
    return sessionIdToUserMap.get(id);
}

module.exports = {
    setUser, getUser,
};