const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => {
        console.log(`${nombreArchivo} creado`.rainbow);
    })
    .catch(error => console.log(error));
