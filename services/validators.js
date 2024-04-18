const { check } = require("express-validator")

module.exports = {
    validateEmail: check("email")
    .isEmail()
    .withMessage("Digite um email válido!"),

    validatePassword: check("password")
    .isLength({min: 8})
    .withMessage("A senha deve conter min 8 caracteres"),

    validateUserName: check("username")
    .isLength({min: 3})
    .withMessage("o User Name deve conter min 3 caracteres")
}  