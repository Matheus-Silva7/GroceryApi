const { validationResult } = require("express-validator");
const bcrypt = require('bcrypt')
const User = require("../models/userModel")
const jwt = require("jsonwebtoken")

//função cadastro
exports.signUp = async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.status(500).json({
            message: "Error ao salvar o user...",
            result: errors
        })
        return
    }

    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    const fotoUsuario = req.body.fotoUsuario
    //ver se o user é adm ou nao
    const isAdm = req.body.admin

    await User.findOne({
        where: {
            email: email
        }
    }).then(async user => {

        if (user) {
            res.status(403).json({
                message: "Email já cadastrado"
            })
            return
        }

        bcrypt.hash(password, 12)
            .then(async hashedPassword => {
                const newUser = await User.create({
                    nome: name,
                    email: email,
                    senha: hashedPassword,
                    fotoUsuario: fotoUsuario,
                    admin: isAdm
                })

                console.log(newUser)

                res.status(201).json({
                    message: "User criado com sucesso!!"
                })

            })

    })




}

//função login
exports.signIn = async (req, res) => {

    const email = req.body.email
    const password = req.body.password
    let loadedUser;
    try {
        await User.findOne({
            where: {
                email: email
            }
        }).then(async user => {
            console.log(user)
            if (!user) {
                res.status(404).json({
                    message: "Usuario não encontrado"
                })
            }
            loadedUser = user
            return bcrypt.compare(password, user.senha)
        }).then(passIsEqual => {
            console.log(passIsEqual)
            if (!passIsEqual) {
                res.status(401).json({
                    message: "As senhas não são iguais"
                })
                return
            }

            //Vamos gerar o token para ele!
            const token = jwt.sign(
                {
                    userId: loadedUser.id,
                    name: loadedUser.name,
                    email: loadedUser.email,
                },
                "MinhaChaveJWT@2024Senai",
                { expiresIn: "1h" }
            )

            res.status(201).json({
                message: "User logado com sucesso!!",
                token
            })

        }).catch(error => {
            console.log(error)
        })
    } catch (error) {
        console.log(error)
    }

}



exports.updateUser = async (req, res) => {
    const userId = req.userId
    const newName = req.body.newName
    const user = await User.findOne({
        where: {
            id: userId
        }
    })

    console.log(newName)
    user.nome = newName
    await user.save()
    res.status(201).json({
        message: "Nome Alterado com sucesso!!",
        newName
    })
}


exports.deleteUser = async (req, res) => {
    const userId = req.userId
    const user = await User.findOne({
        where: {
            id: userId
        }
    })

    await user.destroy()
    res.status(201).json({
        message: "user excluido com sucesso!!"
    })
}
