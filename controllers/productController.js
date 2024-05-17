const Produto = require("../models/produtoModel");
const { validationResult } = require("express-validator");

exports.createProduto = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(500).json({
      message: "Error ao salvar o user...",
      result: errors,
    });
    return;
  }

  const nome = req.body.name;
  const imageProduct = req.body.imageProduct;
  const qnt_disponivel = req.body.qtdDisponivel;
  const qtd_produto = req.body.qtdProduto;
  const preco = req.body.preco;
  const categoria_fk = req.body.categoriaFk;

  const verifyProd = await Produto.findOne({
    where: {
      nome: nome,
    },
  });

  if (verifyProd) {
    return res.status(400).json({
      message: "Produto já cadastrado na base de dados!",
    });
  }

  const newProduct = await Produto.create({
    nome: nome,
    imageProduct,
    qnt_disponivel: qnt_disponivel,
    qtd_produto: qtd_produto,
    preco,
    categoria_fk: categoria_fk,
  });

  return res.status(201).json({
    message: "Produto cadastrado com sucesso",
    product: newProduct,
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
  const prodId = req.params.id;
  console.log(prodId);

  const product = await Produto.findOne({
    where: {
      id: prodId,
    },
  });

  if (product === null) {
    res.status(404).json({
      message: "Produto não encontrado",
    });
    return;
  }

  res.status(201).json({
    product,
  });
};
