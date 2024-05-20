const Sequelize = require('sequelize');
const database = require('../dbConnect')

const ProdutoCarrinhoSchema = database.define('carrinho',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    carrinho:{
        type:Sequelize.INTEGER,
        references:{
            model: 'carrinho', 
            key: 'id',
        }

    },
    produto:{
        type:Sequelize.INTEGER,
        references:{
            model: 'produtos', 
            key: 'id',
        }

    }
}
    
);

module.exports = ProdutoCarrinhoSchema;