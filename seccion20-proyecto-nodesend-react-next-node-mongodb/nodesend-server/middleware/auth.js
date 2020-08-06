const jwt = require('jsonwebtoken');
require('dotenv').config({ path: '.env' });

module.exports = (req, res, next) => {
    const authHeader = req.get('Authorization');

    if (authHeader) {
        // Obtener el token
        const token = authHeader.split(' ')[1];

        // Comprobar el jwt
        try {
            const usuario = jwt.verify(token, process.env.SECRET);
            req.usuario = usuario;

        } catch (error) {
            console.log(error.message);
        }
    }
    return next();
}