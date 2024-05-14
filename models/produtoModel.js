const Sequelize = require("sequelize");
const database = require("../dbConnect");

const ProductSchema = database.define('produtos', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
        required: true
    },
    imageProduct: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    qnt_disponivel: {
        type: Sequelize.INTEGER,
        allowNull: false,
        required: true
    },
    qtd_produto: {
        type: Sequelize.STRING,
        allowNull: false,
        required: true
    },
    preco: {
        type: Sequelize.DECIMAL,
        allowNull: false,
    },
    categoria_fk: {
        type: Sequelize.INTEGER,
        references: {
            model: 'categorias', 
            key: 'id',
        }
    }
});

module.exports = ProductSchema;
