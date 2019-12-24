const axios = require('../node_modules/axios');

const getLugarLatLng = async (dir) =>{
    const encondeUrl = encodeURI(dir);


    const instance = axios.create({
        baseURL:`https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encondeUrl}`,
        headers: {'x-rapidapi-key':'0c45d9c2aamsh0427d5612257521p14c25ajsn697154e2fa96'},
    })

    const resp = await instance.get();

    if (resp.data.Results.length === 0){
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng,
    }
}

module.exports = {
    getLugarLatLng,
}