
const info = require('./informacion/info');

const argv = require('./config/yargs').options;

info.getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);