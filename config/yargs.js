

const options = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true,
    },
}).argv;

console.log(options.direccion);

module.exports = {
    options,
}