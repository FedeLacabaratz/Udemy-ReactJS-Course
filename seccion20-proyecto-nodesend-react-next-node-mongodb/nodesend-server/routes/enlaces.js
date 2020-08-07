const express = require('express');
const router = express.Router();
const enlacesController = require('../controllers/enlacesController');
const filesController = require('../controllers/filesController');
const { check } = require('express-validator');
const auth = require('../middleware/auth');

router.post('/',
    [
       check('nombre', 'Sube un archivo').not().isEmpty(), 
       check('nombre_original', 'Sube un archivo').not().isEmpty(), 
    ],
    auth,
    enlacesController.nuevoEnlace
);

router.get('/',
    enlacesController.todosEnlaces
);

router.get('/:url',
    enlacesController.obtenerEnlace
);

module.exports = router;