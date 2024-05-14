const Produto = require("../models/produtoModel")

exports.createProduto = (req, res) =>{
    const nome = req.body.name
    const imageProduct = req.body.imageProduct
    const qnt_disponivel = req.body.qtdDisponivel
    const qtd_produto = req.body.qtdProduto
    const preco = req.body.preco
    const categoria_fk = req.body.categoriaFk

    const newProduct = Produto.create({
        nome, 
        imageProduct,
        qnt_disponivel,
        qtd_produto,
        preco, 
        categoria_fk
    })

    console.log(newProduct)

    res.status(201).json({
        message: "Produto cadastrado com suceso",
        newProduct
    })
}

exports.GetProdutos = async (req, res)=>{
    const allProducts = await Produto.findAll()

    console.log(allProducts)

    res.status(201).json({
        allProducts
    })
} 


//pegar um produto em especifico
exports.GetOneProduct = async (req, res) =>{
    const prodId = req.params.id
    console.log(prodId)

   const product = await Produto.findOne({
        where: {
            id: prodId
        }})

       if(product === null){
        res.status(404).json({
           message: "Produto não encontrado"
        })
        return
       }

       res.status(201).json({
        product
    })
}