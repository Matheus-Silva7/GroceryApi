const { validationResult } = require("express-validator");

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
    let isAdm = false

    console.log({
        userName, email, password
    })

    res.status(201).json({
        message: "User criado com sucesso!!"
    })

}

//função login
exports.signIn = (req, res) => {
    console.log("Tela login")
}