const Profesor = require('../models/Profesor')
const Alumno = require('../models/Alumno')
const Clase = require('../models/Clase')
const moveControllers = {
    inicio: (req, res) => {
        res.render("index", {
            title: "Inicio"
        })
    },
    clases: (req, res) => {
        res.render("clases", {
            title: "Clases"
        })
    },
    galeria: (req, res) => {
        res.render("galeria", {
            title: "Galería",
        })
    },
    panel: async(req, res) => {
        let profesor = await Profesor.findAll({raw : true, include:["clase"]})
        let alumno = await Alumno.findAll({raw : true})
        let clases = await Clase.findAll({raw:true})
        res.render("admin", {
            title: "Admin",
            profesor,
            alumno,
            clases
        })
    },
    panelAdmin: async(req, res) => {
        let profesor = await Profesor.findAll({raw : true, include:["clase"]})
        let alumno = await Alumno.findAll({raw : true})
        let clases = await Clase.findAll({raw:true})
        res.render("admin", {
            title: "Admin",
            profesor,
            alumno,
            clases
        })
    },
    panelCLases: async (req,res)=> {
        let profesor = await Profesor.findAll({raw : true, include:["clase"]})
        let alumno = await Alumno.findAll({raw : true, include:["profesore"]})
        res.render("admin", {
            title: "Clases-Panel",
            profesor,
            alumno
        })
    },
    profesores: async(req, res) => {
        let profesor = await Profesor.findAll({raw : true, include:["clase"]})
        let clases = await Clase.findAll({raw:true})
        let editarDatos= null
        if(req.params.id){
            editarDatos = await Profesor.findByPk(req.params.id)
        }
        res.render("admin", {
            title: "Profesores",
            profesor,
            editarDatos,
            clases
        })
    },
    alumnos: async(req, res) => {
        let alumno = await Alumno.findAll({raw : true, include:["profesore"] })
        let profesor = await Profesor.findAll({raw : true})
        let editarDatos =null
        if(req.params.id){
            editarDatos = await Alumno.findByPk(req.params.id)
        }
        res.render("admin", {
            title: "Alumnos",
            alumno ,
            editarDatos,
            profesor
        })
    },
    cargarProfe: async (req,res)=> {
            try {                 
                const {nombre,contacto,direccion,dni,clase} = req.body
                await Profesor.create({
                    nombre,
                    contacto,
                    direccion,
                    dni,
                    claseId: clase
                });
                // if (!req.body.id) {
                // } else {
                // let editarDatos = await Profesor.findByPk(req.body.id);
                //     editarDatos.nombre =  req.body.nombre,
                //     editarDatos.contacto = req.body.contacto, 
                //     editarDatos.direccion = req.body.direccion,
                //     editarDatos.dni = req.body.dni, 
                // await editarDatos.save();
                // }
                res.redirect('/profesores')
            } catch (e) {
                console.log(e);
            }
        },
    cargarAlumno: async (req,res)=> {
        console.log(req.body)
    try{
        const {nombre, direccion,contacto,dni, profesor} = req.body
        await Alumno.create({
            nombre,
            direccion,
            contacto,
            dni,
            profesoreId : profesor
        })
        res.redirect('/alumnos')
    }
    catch(e){
        console.log(e)
    }
        // if(!req.body.id){

        // }
        // else {
        //     let editarDatos = await Alumno.findByPk(req.body.id)
        //     editarDatos.nombre = req.body.nombre
        //     editarDatos.contacto = req.body.contacto
        //     editarDatos.direccion = req.body.direccion
        //     editarDatos.dni = req.body.dni
        //     await editarDatos.save()
        // }
        
    },
    borrar: async (req, res) => {
        await Profesor.destroy({where:{id: req.params.id}})
        res.redirect('/profesores')
    },
    borraAlumno: async (req, res) => {
        await Alumno.destroy({where:{id: req.params.id}})
        res.redirect('/alumnos')
    },
}

module.exports = moveControllers