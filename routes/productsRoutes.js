const express = require("express");
const router = express.Router();
const isAuth = require("../middleware/is-auth");
const categoryController = require("../controllers/categoryController")

//rota pegar todos os produtos
router.get('/products')
//rota cadastra produto
router.post('/product')

//rota pegar produto específico
router.get('/product/:id')

//rota pegar categorias
router.get('/categories')

//rota add categoria
router.post('/category', isAuth, categoryController.CreateCategory)



module.exports = router;