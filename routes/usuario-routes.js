var express = require('express');
var usuarioControlador = require('../controllers/usuario-controller');
var api = express.Router();
api.get('/get', usuarioControlador.get);
api.post('/registro', usuarioControlador.guardar);
api.put('/actualizar/:id', usuarioControlador.actualizar);
api.put('/eliminar/:id', usuarioControlador.eliminar);
module.exports = api;