const Sequelize = require("sequelize");
const sequelize =  new Sequelize('grocery', 'root', 'root',{
    dialect:'mysql',
    host: 'localhost'
})

module.exports = sequelize