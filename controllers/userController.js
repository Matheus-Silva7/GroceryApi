const User = require("../models/userModel")
const Favorite = require("../models/favoritoModel")
const Produto = require("../models/produtoModel")
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")

exports.profile = async (req, res) => {
    const userId = req.userId
    const user = await User.findOne({
        where: {
            id: userId
        }
    })

    res.status(200).json({
        user
    })
}

exports.changePass = async (req, res) => {
    const userId = req.userId
    const password = req.body.password
    const newPassword = req.body.newPassword

    const user = await User.findOne({
        where: {
            id: userId
        }
    })
    console.log(user.senha)
    const comparePassword = await bcrypt.compare(password, user.senha);

    if (comparePassword) {
        console.log("Senhas iguais");
        const hashedPassword = await bcrypt.hash(newPassword, 12);
        user.senha = hashedPassword;
        await user.save();
        return res.status(200).json({
            message: "Senha alterada com sucesso!"
        });
    } else {
        res.status(401).json({
            message: "Senhas diferentes!"
        });
        console.log("Senhas diferentes");
    }
}


exports.addFavorite = async (req, res) => {
    const userId = req.userId
    const prodId = req.params.id;

    //verificando se o produto existe
    const produto = await Produto.findOne({
        where: {
            id: prodId
        }
    });

    //se existir adiciona aos favoritos
    if (produto) {

        //verificando se o produto ja existe nos favs
        const favorito = await Favorite.findOne({
            where: {
                usuario: userId,
                produto: prodId
            }
        });

        //se existir dá erro e retorna
        if (favorito) {
            res.status(401).json({
                message: "Produto já existe em favoritos!"
            });
            return;
        } else {
            const newFavorite = await Favorite.create({
                usuario: userId,
                produto: prodId
            });

            console.log(newFavorite);

            res.status(201).json({
                message: "Adicionado aos favoritos com sucesso!"
            });
        }
    } else {
        res.status(401).json({
            message: "Produto não encontrado na base de dados!"
        });
        return
    }

}

exports.getFavorites = async (req, res) => {
    const userId = req.userId

    const favorito = await Favorite.findAll({
        where: {
            usuario: userId,  
        }
    });

    res.status(201).json({
        message: "lista de favoritos:",
        favoritos: favorito
    });
}


exports.deleteFavorite = async (req, res) =>{
    const userId = req.userId
    const prodId = req.params.id;

    const favorito = await Favorite.findOne({
        where: {
            usuario: userId,
            produto: prodId
        }
    });

    if(favorito){
        await favorito.destroy()
        res.status(201).json({
         message: "favorito excluido com sucesso!!"
     })
    } else{
        res.status(400).json({
            message: "Não existe esse produto nos favoritos!"
        })
    }

  
}