let opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multilplicar', opts)
    .command('crear', 'Crea un archivo de la tabla de multilplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}