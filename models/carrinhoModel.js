const Sequelize = require('sequelize');
const database = require('../dbConnect')

const CarrinhoSchema = database.define('carrinho',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    usuario:{
        type:Sequelize.INTEGER,
        references:{
            model: 'usuarios', 
            key: 'id',
        }

    }
}
    
);
module.exports = CarrinhoSchema;