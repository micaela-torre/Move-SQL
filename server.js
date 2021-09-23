const express= require("express")
const app = express()
const router = require('./routes/index')



app.set('view engine','ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))




app.use('/' , router)

app.listen(4000, ()=> console.log("server in port :)"))