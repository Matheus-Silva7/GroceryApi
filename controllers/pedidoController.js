const Pedido = require("../models/pedidoModel");
const PedidoProduto = require("../models/pedidoProdutoModel");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken")

exports.postPedido = async (req, res) =>{
    const usuario = req.userId

    const newPedido = await Pedido.create({
        usuario
    })

    const pedido = newPedido.id
    const produto = req.body.produto
    const qnt_solicitada = req.body.qnt_solicitada

    console.log(newPedido)

    const newPedidoProduto = await PedidoProduto.create({
        pedido,
        produto,
        qnt_solicitada
    })

    

    res.status(201).json({
        message: "pedido criado com sucesso!!",
        newPedidoProduto
    })
}