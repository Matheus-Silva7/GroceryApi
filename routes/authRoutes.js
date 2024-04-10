const express = require("express");
const router = express.Router();

const userController = require("../controllers/authController");

//rota do cadastro
router.post('/signup', userController.signUp);

//rota do login
router.post('/signin', userController.signIn);

//rota mostrar dados do user
router.get('/profile');



module.exports = router;