
const Produto = require("../models/produtoModel")




exports.GetProdutos = async (req, res)=>{
    const allProducts = await Produto.findAll()

    console.log(allProducts)

    res.status(201).json({
        allProducts
    })
} 