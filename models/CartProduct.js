const Sequelize = require("sequelize")
const database = require("../dbConnect")

const cartProductSchema = database.define('cartProduct',{
    cart: {
        type: Sequelize.INTEGER,
        references: {
            model: 'pedidos', 
            key: 'id',
        }
    },
    produto: {
        type: Sequelize.INTEGER,
        references: {
            model: 'produtos' , 
            key: 'id',
        }
    },
    qnt_solicitada:{
        type:Sequelize.INTEGER,
        allowNull: false,
        required: true
    }
});

module.exports = cartProductSchema; 