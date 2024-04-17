const express = require("express");
const router = express.Router();

const userController = require("../controllers/authController");
const {validateEmail, validatePassword, validateUserName} = require("../services/validators")

//rota do cadastro
router.post('/signup', validateEmail, validatePassword, validateUserName, userController.signUp);

//rota do login
router.post('/signin', userController.signIn);

//rota update dados user
router.patch('/update')

//rota delete user
router.delete('/delete')



module.exports = router;