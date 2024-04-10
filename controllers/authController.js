
//função cadastro
exports.signUp = (req, res) =>{
    const userName = req.body.username
    const email = req.body.email
    const password = req.body.password

    //ver se o user é adm ou nao
    let isAdm = false

    console.log({
        userName, email, password
    })
}

//função login
exports.signIn = (req, res) =>{
    console.log("Tela login")
}