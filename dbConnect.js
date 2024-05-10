const Sequelize = require("sequelize");

//troquei o nome do bd pq o meu criei como grocery_store ao inves de grocery
const sequelize =  new Sequelize('grocery_store', 'root', 'root',{
    dialect:'mysql',
    host: 'localhost'
})

module.exports = sequelize