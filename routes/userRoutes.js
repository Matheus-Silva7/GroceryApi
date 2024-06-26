const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const cartController = require("../controllers/cartController")
const isAuth = require("../middleware/is-auth");

//rota mostrar dados do user
router.get('/profile', isAuth,userController.profile);

router.patch('/changePassword', isAuth,userController.changePass);

//rota para add favoritos
router.post('/addfavorite/:id', isAuth, userController.addFavorite)
//rota para mostrar favoritos user
router.get('/favorites', isAuth, userController.getFavorites)

router.delete('/favorite/:id', isAuth, userController.deleteFavorite)

//rota para add itens ao carrinho
router.post('/addCart', isAuth, cartController.postCart)
//rota para mostrar favoritos user
router.get('/cart')

//rota para postar pedido
router.post('/postOrder')

//rota mostrar pedidos feitos
router.get('/orders')

module.exports = router;