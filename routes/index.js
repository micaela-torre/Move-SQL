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
router
.route('/panel-clases')
.get(moveControllers.panelCLases)
router 
.route('/agregar-profesor')
.post(moveControllers.cargarProfe)
router 
.route('/agregar-alumno')
.post(moveControllers.cargarAlumno)
router
.route('/editar/:id')
.get(moveControllers.profesores)
router
.route('/borrar/:id')
.get(moveControllers.borrar)
router
.route('/borrar-alumno/:id')
.get(moveControllers.borraAlumno)
router
.route('/editar-alumno/:id')
.get(moveControllers.alumnos)
module.exports = router