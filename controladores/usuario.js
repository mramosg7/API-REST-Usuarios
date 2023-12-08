const { getConnection } = require("../dataBase/connection")
const {ErrorParams} = require("../error")
const bcrypt = require("bcrypt")
const jwt = require("../services/jwt")



const findUser= async(nick, email)=>{
    const querry = `SELECT * FROM USUARIOS WHERE nick = ? OR email = ?`
    let connection = null

    try{
        connection = await getConnection()
        const [row] = await connection.execute(querry, [nick.toLowerCase(), email.toLowerCase()])
        return row.length > 0
    }catch(error){
        console.error(error)
        throw new Error("Error inteno en el servidor")
    }finally{
        if(connection) await connection.end()
    }
}


const register = async(req, res)=>{
    const {nick, email} = req.body
    const password = req.password
    if(await findUser(nick, email)){
        return res.status(409).send({
            message : "Correo o nick invalidos. El usuario ya existe"
        })
    }
    let connection = null
    const querry = `INSERT INTO USUARIOS(nick, email, password, rol, created_at) VALUES(?,?,?,1,NOW())`
    try{
        connection = await getConnection()
        connection.execute(querry,[nick.toLowerCase(), email.toLowerCase(), password])
        return res.status(200).send({
            message: "Usuario registrado correctamente"
        })
    }catch(error) {
        console.error(error)
        return res.status(500).send({
            message: "error interno"
        })
    }finally{
        if(connection) await connection.end()
    }
}

const login = async(req, res)=>{
    const {email, password} = req.body
    stringPass = await password.toString()
    const querry = `SELECT nick, email, rol , password FROM USUARIOS where email = ?`

    let connection = null

    try{
        connection = await getConnection();
        const [row] = await connection.execute(querry, [email.toLowerCase()])
        if (row.legth < 1){
            throw new ErrorParams("Email incorrecto")
        }
    
        if (!await bcrypt.compareSync(stringPass,row[0].password)){
            throw new ErrorParams("Contraseña incorrecta")
        }
        const token = jwt.createToken(row[0]);
        return res.status(200).json({
            status: "success",
            user: {
                email: row[0].email,
                nick: row[0].nik,
            },
            token
        }) 

    }catch(error){
        console.error(error)
        if (error instanceof ErrorParams) {
            console.error(error);
            return res.status(404).send({
                message: error.message
            })


        }
        return res.status(500).send({
            message: "Usuario no encontrado"
        })
    }finally{
        if(connection) await connection.end()
    }


}

const userInfo = async (req,res)=>{
    const {nick, email} = req.user
    const querry = `SELECT nick, email, rol, created_at FROM USUARIOS where nick = ?`
    if(!await findUser(nick, email)){
        return res.status(409).send({
            message : "Correo o nick invalidos. El usuario no existe"
        })
    }
    let connection = null

    try{
        connection = await getConnection()
        const [row] = await connection.execute(querry,[nick.toLowerCase()])
        return res.status(200).send({
            usuario: row
        })

    }catch(error){
        console.error(error)
        return res.status(500).send({
            message : "Error interno del servidor"
        })
    }finally{
        if (connection) await connection.end()
    }
}
module.exports = {
    register,
    login,
    userInfo
}