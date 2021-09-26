const Sequelize = require('sequelize')
const db = new Sequelize('move', 'root', '' , {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = db