const Sequelize = require("sequelize")
const database = require("../dbConnect")

const cartSchema = database.define('cart',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    usuario: {
        type: Sequelize.INTEGER,
        references: {
            model: 'usuarios', 
            key: 'id',
        }
    }
});


module.exports = cartSchema;