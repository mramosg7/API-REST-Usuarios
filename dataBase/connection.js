require('dotenv').config();

const sql = require("mysql2/promise")

const connectionConfig = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
  };
  const getConnection= async() =>{
    try{
        const connection = sql.createConnection(connectionConfig)
        console.log('conexion exitosa')
        return connection
    }catch(error){
        console.error('Error al conectar la base de datos :', error.message)
        throw error
    }
}

module.exports = {
    getConnection
}