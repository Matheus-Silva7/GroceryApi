const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const isAuth = require("../middleware/is-auth");

//rota mostrar dados do user
router.get('/profile', isAuth,userController.profile);

//rota para add favoritos
router.post('/addfavorites')
//rota para mostrar favoritos user
router.get('/favorites')

//rota para add itens ao carrinho
router.post('/addCart')
//rota para mostrar favoritos user
router.get('/cart')

//rota mostrar pedidos feitos
router.get('/orders')

module.exports = router;