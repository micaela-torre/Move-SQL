const Sequelize = require('sequelize')
const db = require('../config/db')

const Clase = db.define('clase', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false
    },   
        horario: {
        type: Sequelize.STRING,
        allowNull: false
    },

})

module.exports = Clase