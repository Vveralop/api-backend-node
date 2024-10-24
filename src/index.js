const app = require('./app');

app.listen(app.get('port'), () => {
    console.log('Aplicación corriendo en puerto: ' + app.get('port'));
})