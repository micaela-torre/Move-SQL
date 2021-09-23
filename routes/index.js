const express = require('express')
const router = express.Router()
const moveControllers= require('../controllers/moveControllers')

router 
.route("/")
.get(moveControllers.inicio)
router 
.route("/clases")
.get(moveControllers.clases)
router 
.route("/galeria")
.get(moveControllers.galeria)
router
.route("/admin")
.get(moveControllers.panel)
router
.route("/panel")
.get(moveControllers.panelAdmin)
router
.route("/profesores")
.get(moveControllers.profesores)
router
.route("/alumnos")
.get(moveControllers.alumnos)

module.exports = router