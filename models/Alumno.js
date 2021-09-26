const Sequelize = require('sequelize')
const db = require('../config/db')
const Alumno = db.define('alumno', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    contacto: {
        type: Sequelize.STRING,
        allowNull: false
    },
    direccion: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dni: {
        type: Sequelize.STRING,
        allowNull: false
    },

})

module.exports = Alumno