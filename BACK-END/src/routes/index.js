const express = require('express');

const convidados = require('./convidadosRoute.js');
const convites = require('./convitesRoute.js');
const usuario = require('./usuariosRoute.js')
const auth = require('./authRoute.js');

module.exports = app => {
    app.use(express.json(),
    convidados,
    convites,
    usuario,
    auth
);
}