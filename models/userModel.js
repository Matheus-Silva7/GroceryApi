const Sequelize = require("sequelize");
const database = require('../dbConnect')

const UserSchema = database.define('usuario',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false,
        required: true
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false,
        required: true
    },
    senha:{
        type: Sequelize.STRING,
        allowNull: false,
        required: true
    },
    admin:{
        type: Sequelize.BOOLEAN,
         required: true
    }
})

module.exports = UserSchema