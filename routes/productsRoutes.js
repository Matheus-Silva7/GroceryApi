const express = require("express");
const router = express.Router();
const isAuth = require("../middleware/is-auth");
const categoryController = require("../controllers/categoryController")
const productController = require("../controllers/productController");
const isAdmin = require("../middleware/isAdmin");
const { validateCategoria, validateProduto } = require("../services/validators");

//rota pegar todos os produtos
router.get('/products', productController.GetProdutos)
//rota cadastra produto
router.post('/product', isAuth, isAdmin, validateProduto, productController.createProduto)

//rota pegar produto específico
router.get('/product/:id', productController.GetOneProduct)

//rota pegar categorias
router.get('/categories', categoryController.GetCategories)

//rota add categoria
router.post('/category', isAuth, isAdmin, validateCategoria, categoryController.CreateCategory)



module.exports = router;