//defino controlador para el manejo de CRUD
const usuarioCtrl = require('../controllers/usuario.controller');

const express = require("express");
const router = express.Router();

// definiendo rutas
router.post('/', usuarioCtrl.createUsuario);
router.get('/nombres', usuarioCtrl.getUsuarios);
router.post('/nombre', usuarioCtrl.getUsuario);
router.post('/login', usuarioCtrl.loginUsuario);
router.post('/nombre', usuarioCtrl.getUsuario);

//exportacion del modulo de rutas
module.exports = router;