const User = require("../models/userModel")
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")

exports.profile = async (req, res) =>{
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

exports.changePass = async (req, res) =>{
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