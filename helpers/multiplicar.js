const fs = require('fs')
require('colors');

const crearArchivo = async (base = 5, listar, hasta = 10) => {

    try{
        let salidaConsola = '', salidaArchivo = '';
        for ( let i = 1; i <= hasta; ++i ) {
            salidaConsola += `${ `${base}`.green } ${'x'.cyan} ${ `${i}`.blue } ${'='.yellow} ${ `${base * i}`.red }\n`;
            salidaArchivo += `${base} x ${i} = ${base * i}\n`;salidaArchivo
        }
        
        fs.writeFileSync( `./salida/Tabla-${base}.txt`, salidaArchivo)
        
        if (listar) {
            console.log('========================'.blue);
            console.log(`      Tabla del ${base} `.bold.red);
            console.log('========================'.magenta); 
            console.log(salidaConsola);
        }
    
        return `tabla-${base}.txt`;
    } catch(error) {
        return error;
    }
    
}

module.exports = {
    crearArchivo
}