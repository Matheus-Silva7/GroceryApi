const Produto = require("../models/produtoModel");
const { validationResult } = require("express-validator");

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
    const prodId = req.params.id;

    const { nome, imageProduct, qtd_disponivel, qtd_produto, preco, categoria_fk } = req.body;

    try {
        const updated = await Produto.update({
            nome,
            imageProduct,
            qtd_disponivel,
            qtd_produto,
            preco,
            categoria_fk
        }, {
            where: { id: prodId }
        });

        if (updated) {
            const updatedProduct = await Produto.findOne({ where: { id: prodId } });
            res.status(200).json({ produto: updatedProduct });
        } else {
            res.status(404).json({ message: 'Produto não encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao atualizar produto' });
    }
};



exports.GetProdutos = async (req, res) => {
    const allProducts = await Produto.findAll({
        attributes: ['id', 'nome', 'imageProduct', 'qtd_disponivel', 'qtd_produto', 'preco', 'categoria_fk']
    });

    console.log(allProducts);

    res.status(200).json({
        allProducts
    });
};


exports.GetProdutos = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const perPage = parseInt(req.query.perPage) || 5;
  
    try {
      const totalItems = await Produto.count();
      
      const products = await Produto.findAll({
        offset: (page - 1) * perPage,
        limit: perPage,
      });
  
      res.status(200).json({
        totalItems: totalItems,
        products: products,
        currentPage: page,
        perPage: perPage,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Erro ao buscar produtos",
        error: error.message,
      });
    }
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

exports.orderProduct = (req, res) =>{
    
} 