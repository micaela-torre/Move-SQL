const express= require("express")
const path =require('path')
const router = require('./routes/index')
const db = require('./config/db')
const Profesor = require('./models/Profesor')
const Alumno = require('./models/Alumno')
const Clase = require('./models/Clase')

const app = express()
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended:true}))

app.set('view engine','ejs')


Alumno.belongsTo(Profesor)
Profesor.hasMany(Alumno)
Profesor.belongsTo(Clase)
Clase.hasMany(Profesor)


db.sync()
.then(()=> {
    app.use('/' , router)
    app.listen(4000, ()=> console.log("server in port :)"))
})

