const Sequelize = require("sequelize");
const database = require('../dbConnect')

const CategorySchema = database.define('category',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    categoria:{
        type: Sequelize.STRING,
        allowNull: false,
        required: true
    },
    fotoCategoria:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    
})

module.exports = CategorySchema