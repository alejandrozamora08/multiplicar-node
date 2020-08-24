const argv = require('./config/yargs.js').argv

const { crearArchivo, listar } = require('./multiplicar/multiplicar');


// console.log(process.argv);
let argv2 = process.argv;
// let parametro = argv2[2];
// let base = parametro.split('=')[1];

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listar(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`${archivo}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('no se encuenta el comando');

}