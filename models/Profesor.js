const sequelize = require('sequelize')
const db = require('../config/db')
const Profesor = db.define('profesore', {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true ,
    },
    nombre: {
        type: sequelize.STRING,
    },
    contacto: {
        type: sequelize.STRING,
    },
    direccion: {
        type: sequelize.STRING,
    },
    dni: {
        type: sequelize.STRING,
    },
    
})

module.exports = Profesor