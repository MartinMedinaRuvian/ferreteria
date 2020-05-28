const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const path = require('path')
const mongoose = require('mongoose')

const productosRutas = require('./rutas/productoRutas');

const app = express()

const uri = "mongodb+srv://admin:123abc@cluster0-55o46.mongodb.net/productos_api?retryWrites=true&w=majority";
const options = {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true };

mongoose.connect(uri, options).then(
  () => { console.log('Conectado a DB') },
  err => { console.log(err) }
);

app.use(cors())
app.use(morgan('dev'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(express.static(path.join(__dirname, 'publico')))

app.use('/producto', productosRutas)

app.set('port', process.env.PORT || 3000)
let puerto = app.get('port')

app.listen(puerto, ()=>{
  console.log('Servidor corriendo en el puerto ' + puerto);
})