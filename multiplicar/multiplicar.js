const fs = require('fs');
const colors = require('colors');
//const fs = require('express');
//const fs = require('./fs');
colors.setTheme({
    custom: ['green', 'underline']
});

let listarTabla = (base, limite) => {

    console.log('==========================='.green);
    console.log(`=====Tabla de ${base}======`.green);
    console.log('==========================='.green);
    for (let i = 1; i <= limite; i++) {
        let result = base * i;
        console.log(`${base} * ${i} = ${result}\n`);
    };
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor intrudicido "${base}" no es un numero`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            let result = base * i;
            data += `${base} * ${i} = ${result}\n`;
        };

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}`.custom);
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}
