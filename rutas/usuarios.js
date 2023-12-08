const router = require("express").Router()
const userController = require("../controladores/usuario")
const validate = require("../middleware/validar")
const auth = require("../middleware/auth")
router.post("/login", validate.validateLogin,userController.login)
router.post("/register",validate.validateRegister, userController.register)
router.get("/info", auth, userController.userInfo)
module.exports= router