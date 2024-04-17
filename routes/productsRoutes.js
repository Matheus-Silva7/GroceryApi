const express = require("express");
const router = express.Router();

//rota pegar todos os produtos
router.get('/products')
//rota cadastra produto
router.post('/product')

//rota pegar produto específico
router.get('/product/:id')

//rota pegar categorias
router.get('/categories')

//rota add categoria
router.post('/category')



module.exports = router;