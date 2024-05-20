const Pedido = require("../models/pedidoModel");
const PedidoProduto = require("../models/pedidoProdutoModel");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken")

exports.postPedido = (req, res) =>{
    const usuario = req.userId

    const pedido = Pedido.create({
        usuario
    })

    res.status(201).json({
        message: "pedido criado com sucesso!!",
        pedido
    })
}