require('dotenv').config();
const express = require("express")
const cors = require("cors")
const usersRouter = require("./rutas/usuarios")
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger_output.json'); 

const app = express()

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/api/user", usersRouter)

app.listen(process.env.SERVER_PORT, ()=>{
    console.log("servidor de node corriendo en el puerto: " + process.env.SERVER_PORT)
})