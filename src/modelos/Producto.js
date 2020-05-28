const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const esquema = new Schema({
  nombre:{type:String, required:true},
  descripcion:String,
  codigo:{type:String, require:true},
  imagen:String,
  stock:Number,
  seleccionado:{type:Boolean, default:false}
})

const Producto = mongoose.model('Producto', esquema);
module.exports = Producto