const { validationResult } = require("express-validator");
const bcrypt = require('bcrypt')
const User = require("../models/userModel")

//função cadastro
exports.signUp = (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        /*  const error = new Error("Falha de validação");
         error.statusCode = 422;
         error.data = errors.array();
         throw error; */
        res.status(500).json({
            message: "Error ao salvar o user...",
            result: errors
        })
        return
    }

    const userName = req.body.username
    const email = req.body.email
    const password = req.body.password
    //ver se o user é adm ou nao
    const isAdm = req.body.admin


    bcrypt.hash(password, 12)
        .then(async hashedPassword => {
            const newUser = await User.create({
                nome: userName,
                email: email,
                senha: hashedPassword,
                admin: isAdm
            })

            console.log(newUser)

            res.status(201).json({
                message: "User criado com sucesso!!"
            })

        })


}

//função login
exports.signIn = async (req, res) => {

    const email = req.body.email
    const password = req.body.password

    await User.findOne({
        where: {
            email: email
        }
    }).then(user => {
        console.log(user)
        if (!user) {
            res.status(404).json({
                message: "Usuario não encontrado"
            })
        }
        const senhaUser = user.senha
        return bcrypt.compare(senhaUser,password)
    }).then(passIsEqual => {
        if (!passIsEqual){
            res.status(401).json({
                message: "As senhas não são iguais"
            })
        }

        res.status(201).json({
            message: "User criado com sucesso!!"
        })
  
    })

}

//mostrar todos os users
//const users = await User.findAll()

//User.FindOne
/* User.findAll({
where:{
    email: "matheus@email.com"
    //em produtos usar categoria =x, preco =y
}
})*/

exports.updateUser = async (req, res) => {
    const user = await User.findOne({
        where: {
            email: "matheus@gmail.com"
        }
    })

    user.senha = "senhanova"
    await user.save()
}


exports.deleteUser = async (req, res) => {
    const user = await User.findOne({
        where: {
            email: "marcelo@gmail.com"
        }
    })

    await user.destroy()
}
