//modulo express
const express = require("express");

const app = express();

const mongoose = require("mongoose");

const bodyParser = require("body-parser");

//llamar body-parser
app.use(bodyParser.json());

//importar rutas

const postRoute = require("./routes/post");

app.use("/servicios", postRoute);



//rutas
app.get('/', (req, res)=> {

    res.send('prueba del servidor tecnico');
} );



//conexion a la base de datos MongoDB

mongoose.connect('mongodb+srv://carlos:centeno@cluster0.l2a2ida.mongodb.net/?retryWrites=true&w=majority',
{

})

.then( () => {
        console.log("conectado a la base de datos");
})

.catch(err => {
    console.log("no se puede conectar a la base de datos",err);
})


app.listen(10000);