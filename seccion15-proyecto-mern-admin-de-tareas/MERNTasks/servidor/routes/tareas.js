const express = require('express');
const router = express.Router();
const tareaController = require('../controllers/tareaController');
const { check } = require('express-validator');
const auth = require('../mideleware/auth');

// Crea tareas
// api/tareas
router.post('/',
    auth,
    [
        check('nombre', 'El nombre de la tarea es obligatorio').not().isEmpty(),
        check('proyecto', 'El proyecto es obligatorio').not().isEmpty()
    ],
    tareaController.crearTarea
);

// Obtener las tareas por proyecto
router.get('/',
    auth,
    [
        check('proyecto', 'El proyecto es obligatorio').not().isEmpty()
    ],
    tareaController.obtenerTareas
);

// Actualizar tarea
router.put('/:id',
    auth,
    [
        check('proyecto', 'El proyecto es obligatorio').not().isEmpty()
    ],
    tareaController.actualizarTarea
);

// Eliminar una tarea
router.delete('/:id',
    auth,
    tareaController.eliminarTarea
);

module.exports = router;