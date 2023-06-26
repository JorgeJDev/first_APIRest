const express = require('express');
const cors = require('cors')
const {route} = require('./routers/routerFront');

// conectar bbdd
const {conexion} = require('./helpers/dbConect');


//conectar dotenv
require('dotenv').config()

// configurar servidor
const app = express()

const port = process.env.PORT || 3000;

// console.log(process)  // console.log(process.env.URI_CONECT)

app.use(express.static('public'));// también es posible hacer `${__dirname}/public`

// Establecer ejs como template engine
app.set('view engine' , 'ejs');
// Estableder cual va a ser la carpeta de vistas
app.set("views",__dirname + "/views"); // también es posible hacer `${__dirname}/views`


// CONEXION ///

conexion()

//Para parsear // traducir
app.use(express.json());

// traducir para POSTMAN
app.use(express.urlencoded({ extended: false }));


// rutas
app.use("/", require("./routers/routerFront"));

app.use('/api/v1/servicios',require('./routers/apiRouter'));

app.use('/api/v1/usuarios',require('./routers/apiUsuariosRouter'));

app.use('/admin',require('./routers/adminRouters'));


// app.use('/productos',require('./routers/scrapRouter'));

app.use((req,res,next)=>{
    res.status(404).render("404",{
        titulo:'error 404',
        parrafo: `Eto no va eh`
    }) 
 });


// Chasqueador
app.listen(port, () => {
    console.log(`conectados al servidor por el puerto ${port}`)
})

