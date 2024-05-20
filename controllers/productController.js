const Produto = require("../models/produtoModel")

exports.createProduto = async (req, res) => {
    try {
        const { nome, imageProduct, qtd_disponivel, qtd_produto, preco, categoria_fk } = req.body;


        const newProduct = await Produto.create(
          /*   {
                attributes: ['nome', 'imageProduct', 'qtd_disponivel', 'qtd_produto', 'preco', 'categoria_fk']
            } */ {
            nome,
            imageProduct,
            qtd_disponivel,
            qtd_produto,
            preco,
            categoria_fk
        });

        res.status(201).json(newProduct);
    } catch (error) {
        console.error('Erro ao criar produto:', error);
        res.status(500).json({ error: error.message });
    }
}

 exports.updateProduto = async (req, res) => {

    const prodId = req.params.id

    const nome = req.body.name
    const imageProduct = req.body.imageProduct
    const qnt_disponivel = req.body.qtdDisponivel
    const qtd_produto = req.body.qtdProduto
    const preco = req.body.preco
    const categoria_fk = req.body.categoriaFk



    if (prodId) {
        const newProduct = Produto.set({
            nome,
            imageProduct,
            qnt_disponivel,
            qtd_produto,
            preco,
            categoria_fk
        })
        console.log(newProduct)
        
    }

    

} 



exports.GetProdutos = async (req, res) => {
    const allProducts = await Produto.findAll({
        attributes: ['id', 'nome', 'imageProduct', 'qtd_disponivel', 'qtd_produto', 'preco', 'categoria_fk']
    });

    console.log(allProducts);

    res.status(200).json({
        allProducts
    });
};



//pegar um produto em especifico
exports.GetOneProduct = async (req, res) => {
    const prodId = req.params.id
    console.log(prodId)

    const product = await Produto.findOne({
        attributes: ['id', 'nome', 'imageProduct', 'qtd_disponivel', 'qtd_produto', 'preco', 'categoria_fk']
    }, {
        where: {
            id: prodId
        }
    })

    if (product === null) {
        res.status(404).json({
            message: "Produto não encontrado"
        })
        return
    }

    res.status(201).json({
        product
    })
}


exports.deleteProduct = async (req, res) => {
    const prodId = req.params.id

    const product = await Produto.destroy({
        where: {
            id: prodId
        }
    })

    if (product === null) {
        res.status(404).json({
            message: "Produto não encontrado"
        })
        return
    }

    res.status(201).json({
        product
    })
}
/* await User.destroy({
  where: {
    firstName: 'Jane',
  },
}); */