const jwt = require("jwt-simple")
const moment = require("moment")

const {key} = require('../services/jwt')


const auth = (req, res, next) =>{
   
        if (!req.headers.authorization){
            return res.status(403).send({
                status: "error",
                message: "La peticion no tiene la cabecera de autenticación"
            })
        }
 

        let token = req.headers.authorization.replace(/['"]+/g, '')

  
        try{
            let payload = jwt.decode(token,key);
           
                if(payload.exp <= moment().unix()){
                    return res.status(401).send({
                        status: "error",
                        message: "Token expirado"
                    })
                }
           
                req.user = payload;

        }catch(error){
            return res.status(404).send({
                status: "error",
                message: "Token invalido"
            })
        }
    

    next();
}

module.exports = auth