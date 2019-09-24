const Sequelize = require('sequelize');
const db = require('../config/database');
const Usuario = db.define('Usuario', {
    UsuarioId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    Nombre: {
        type: Sequelize.STRING
    },
    NombreUsuario: {
        type: Sequelize.STRING
    },
    Correo: {
        type: Sequelize.STRING
    },
    Contrasenia: {
        type: Sequelize.STRING
    },
    Rol: { type: Sequelize.STRING },
    Imagen: { type: Sequelize.STRING }
}, {
    timestamps: false,
    freezeTableName: true,
});
module.exports = Usuario;