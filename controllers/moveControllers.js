const Profesor = require('../models/Profesor')
const Alumno = require('../models/Alumno')
const Clase = require('../models/Clase')
const moveControllers = {
    inicio: (req, res) => {
        res.render("index", {
            title: "Inicio"
        })
    },
    clases: async (req, res) => {
        let profesor = await Profesor.findAll({raw : true, include:["clase"]})
        res.render("clases", {
            title: "Clases",
            profesor
        })
    },
    galeria: (req, res) => {
        res.render("galeria", {
            title: "Galería",
        })
    },
    panel: async(req, res) => {
       try{
        let profesor = await Profesor.findAll({raw : true, include:["clase"]})
        let alumno = await Alumno.findAll({raw : true})
        let clases = await Clase.findAll({raw:true})
        res.render("admin", {
            title: "Admin",
            profesor,
            alumno,
            clases
        })
       }catch(e){
           console.log(e)
       }
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
        try{
        let profesor = await Profesor.findAll({raw : true, include:["clase"]})
        let clases = await Clase.findAll({raw:true})
        let editarDatos= null;
        if(req.params.id){
            editarDatos = await Profesor.findByPk(req.params.id)
        }
        res.render("admin", {
            title: "Profesores",
            profesor,
            editarDatos,
            clases
        })
        }catch(e){
            console.log(e)
        }
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
        console.log(req.body.id == ' ')
        console.log(!req.body.id == '')
            try {                  
                if(!req.body.dni == ' ') {
                    let editarDatos = await Profesor.findByPk(req.body.id);
                        editarDatos.nombre =  req.body.nombre,
                        editarDatos.contacto = req.body.contacto, 
                        editarDatos.direccion = req.body.direccion,
                        editarDatos.dni = req.body.dni, 
                    await editarDatos.save();
                } else {
                    const {nombre,contacto,direccion,dni,clase} = req.body
                    await Profesor.create({
                        nombre,
                        contacto,
                        direccion,
                        dni,
                        claseId: clase
                    });
                  
                }
               
                
                res.redirect('/profesores')
            } catch (e) {
                console.log(e);
            }
        },
    cargarAlumno: async (req,res)=> {
    try{
        if(!req.body.dni){
        const {nombre, direccion,contacto,dni, profesor} = req.body
        await Alumno.create({
            nombre,
            direccion,
            contacto,
            dni,
            profesoreId : profesor
        })
        }
        else {
            let editarDatos = await Alumno.findByPk(req.body.id)
            editarDatos.nombre = req.body.nombre
            editarDatos.contacto = req.body.contacto
            editarDatos.direccion = req.body.direccion
            editarDatos.dni = req.body.dni
            await editarDatos.save()
        }
        res.redirect('/alumnos')
    }
    catch(e){
        console.log(e)
    }
        
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