const Cart = require("../models/CartModel");
const CartProduct = require("../models/CartProduct");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken")

exports.getCart = async (req, res) =>{

}


exports.postCart= async (req, res) =>{
    const usuario = req.userId

    const newCart = await Cart.create({
        usuario
    })

    const cart = newCart.id
    const produto = req.body.produto
    const qnt_solicitada = req.body.qnt_solicitada

    console.log(newCart)

    const newCartProduct= await CartProduct.create({
        cart,
        produto,
        qnt_solicitada
    })

    

    res.status(201).json({
        message: "pedido criado com sucesso!!",
        newCartProduct
    })
}