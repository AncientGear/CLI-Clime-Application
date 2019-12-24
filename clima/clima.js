const axios = require('../node_modules/axios');

const getClima = async (lat, lng) => {
    
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=d266f2ee886b00f0cf9aa5efd70e3330&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima,
}