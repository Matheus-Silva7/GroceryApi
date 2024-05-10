const Sequelize = require("sequelize")
const database = require("../dbConnect")

const favoritoSchema = database.define('favoritos',{
    usuario: {
        type: Sequelize.INTEGER,
        references: {
            model: 'usuarios', 
            key: 'id',
        }
    },
    produto: {
        type: Sequelize.INTEGER,
        references: {
            model: 'produtos', 
            key: 'id',
        }
    }
});

module.exports = favoritoSchema;