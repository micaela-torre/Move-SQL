const Sequelize = require('sequelize')
const db = require('../config/db')
const Profesor = db.define('profesore', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true ,
    },
    nombre: {
        type: Sequelize.STRING,
    },
    contacto: {
        type: Sequelize.STRING,
    },
    direccion: {
        type: Sequelize.STRING,
    },
    dni: {
        type: Sequelize.STRING,
    },
    
})

module.exports = Profesor