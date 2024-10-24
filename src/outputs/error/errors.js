const respuesta = require('../response/respuestas');

function errors(err, req, res) {
    console.error('Error: ', err);

    const mensaje = err.mensaje || 'Error interno';
    const status = err.statusCode || 500;
    
    respuesta.error(req, res, mensaje, status)
}

module.exports = errors;