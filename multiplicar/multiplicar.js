const fs = require('fs');

let listar = (base, limite = 10) => {

    if (!Number(base)) {
        console.log('no es un numero');
        return;
    }

    for (let i = 1; i <= `${limite}`; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }

}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('no es un numero');
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i} \n`);
        }
        let fileName = `files/tabla-${base}-al-${limite}.txt`;
        fs.writeFile(fileName, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(fileName)
        });
    });
}

module.exports = {
    crearArchivo,
    listar
}