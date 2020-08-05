const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const { check } = require('express-validator');

router.post('/', 
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'Ingresa un email válido').isEmail(),
        check('password', 'el password debe tener al menos 8 caracteres').isLength({min: 8}),
    ],
    usuarioController.nuevoUsuario
);

module.exports = router;