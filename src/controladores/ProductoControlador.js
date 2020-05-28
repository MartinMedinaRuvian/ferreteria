const control = {}

const Modelo = require('../modelos/Producto');

control.obtenerTodos = async(req, res)=>{
  const datos = await Modelo.find();
  await res.json(datos);
}

control.guardar = async(req, res)=>{
  const datos = req.body;
  const modelo = new Modelo(datos);
  await modelo.save()
  res.send('guardado correctamente')
}

module.exports = control;