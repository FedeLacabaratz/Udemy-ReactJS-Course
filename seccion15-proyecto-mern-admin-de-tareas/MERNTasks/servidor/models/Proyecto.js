const mongoose = require('mongoose');

const ProyectoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,

    },
    creador: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
    },
    creado: {
        type: Date,
        default: Date.now()
    },
    __v: {
        type: Number,
        select: false
    }
});

module.exports = mongoose.model('Proyecto', ProyectoSchema);