// Rutas para autenticar usuarios
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController')
const { check } = require('express-validator');
const auth = require('../mideleware/auth');

// Autentica un usuario e iniciar sesion
// Endpoint = api/auth
router.post('/',
    authController.autenticarUsuario
);

// Obtiene el usuario autenticado
router.get('/',
    auth,
    authController.usuarioAutenticado
);


module.exports = router;