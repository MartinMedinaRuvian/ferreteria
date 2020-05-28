const express = require('express')
const rutas = express.Router();

const control = require('../controladores/ProductoControlador');

rutas.get('/', control.obtenerTodos);
rutas.post('/guardar', control.guardar);

module.exports = rutas;