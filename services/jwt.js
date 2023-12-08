const jwt = require('jwt-simple')
const moment = require('moment')

const key = "CLAVE_SECRETA_del_proyecto_de_usuarios_123456";

const createToken = (user) =>{
    const payload = {
        nick: user.nick,
        email: user.email,
        rol: user.rol,
        iat: moment().unix(), // fecha en el que se genera el token
        exp: moment().add(30, "days").unix() // fecha en el que expira el token
    } 

    return jwt.encode(payload,key);
}

module.exports = {
    createToken,
    key
};
