const express = require('express');
const config = require('./config');
const morgan = require('morgan');
const pacientes = require('./modules/pacientes/routes')
const error = require('./outputs/error/errors');

// Configuración
const app = express();
app.set('port', config.app.port);

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Rutas
app.use('/api/pacientes', pacientes);
app.use(error);

module.exports = app;
