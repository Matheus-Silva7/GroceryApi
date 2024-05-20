const express = require("express");
const router = express.Router();
const isAuth = require("../middleware/is-auth");
const categoryController = require("../controllers/categoryController") 
const productController = require("../controllers/productController")

//rota pegar todos os produtos
router.get('/products', productController.GetProdutos)
//rota cadastra produto
router.post('/product',  productController.createProduto)

//rota pegar produto específico
router.get('/product/:id', productController.GetOneProduct)

//rota deletar produto específico
router.delete('/product/:id', productController.deleteProduct)

//rota atualizar produto específico
router.put('/product/:id', productController.updateProduto)

//rota pegar categorias
router.get('/categories', categoryController.GetCategories)

//rota add categoria
router.post('/category', isAuth, categoryController.CreateCategory)



module.exports = router;