const bcrypt = require("bcrypt")


const validateRegister = async (req, res ,next)=>{
    const {nick, email, password} = req.body

    if(!nick || !email || !password){
        res.status(400).send({
            message : "Faltan parametros por enviar, hay que enviar: nick, email y password"
        })
    }

    req.password = await bcrypt.hash(password.toString(), 10)
    
    await next()


}

const validateLogin =(req,res,next)=>{
    const {email, password} = req.body

    if(!email || !password){
        res.status(400).send({
            message : "Faltan parametros por enviar, hay que enviar: nick, email y password"
        })
    }
    next()

}
module.exports = {
    validateRegister,
    validateLogin
}