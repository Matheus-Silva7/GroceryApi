const { check } = require("express-validator")

module.exports = {
    validateEmail: check("email")
    .isEmail()
    .withMessage("Digite um email válido!")
}