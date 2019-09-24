var Usuario = require('../models/usuario');
var bcrypt = require('bcrypt-nodejs');

function get(request, response) {
    Usuario.findAll().then(usuario => {
        response.json(usuario);
    })
}

function guardar(request, response) {
    console.log(request.body);

    bcrypt.hash(request.body.Contrasenia, null, null, function(err, hash) {
        Usuario.create({
            Nombre: request.body.Nombre,
            NombreUsuario: request.body.NombreUsuario,
            Correo: request.body.Correo,
            Rol: request.body.Rol,
            Imagen: request.body.Imagen,
            Contrasenia: hash
        }).then(function(data) {
            if (data) {
                response.status(200).send({ message: 'se registro' });
            } else {
                response.status(400).send({ message: 'no se registro' });
            }
        });
    });
}

function actualizar(req, res) {
    const newData = req.body;
    console.log(req.params.id);
    Usuario.update(newData, { where: { UsuarioId: req.params.id } })
        .then(user => {
            return res.status(404).json({ message: "actualizado" });
        })
        .catch(function(err) {
            return res.status(404).json({ message: "Server con problemas" });
        });
}

function eliminar(req, res) {
    Usuario.destroy({ where: { UsuarioId: req.params.id } })
        .then(user => {
            return res.status(404).json({ message: "Eliminado" });
        })
        .catch(function(err) {
            return res.status(404).json({ message: "No ha sido eliminado" }); // server problems
        });
}
module.exports = {get, guardar, actualizar, eliminar };