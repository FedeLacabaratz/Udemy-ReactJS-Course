const express = require('express');
const connectDB = require('./config/db');

// Crear el servidor
const app = express();

// Conectar a a base de datos
connectDB();

// Puerto de la app
const port = process.env.PORT || 4000;

// Habilitar y leer los valores de un body
app.use( express.json() )

// Rutas de la app
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/enlaces', require('./routes/enlaces'));

// Arrancar la app
app.listen(port, '0.0.0.0', () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`)
})