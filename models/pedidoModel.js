const Sequelize = require("sequelize")
const database = require("../dbConnect")

const pedidoSchema = database.define('pedidos',{
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


module.exports = pedidoSchema;