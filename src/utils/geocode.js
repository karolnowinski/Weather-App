const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoia2Fyb2xub3dpbnNraSIsImEiOiJjazR2cGRmMnkwaWE3M2pyOHh6aDhtZTZhIn0.CsUMpKLR_KVuKH3x6Pfdbg&limit=1&language=pl'

    request({ url: url, json: true}, (error, {body}) => {
    if (error){
        callback('Unable to connect to location services!', undefined)
    } else if (body.features.length === 0) {
        callback('Unable to find location. Try another search.', undefined)
    }
    else {
        callback(undefined, {
            latitude: body.features[0].center[1],
            longitude: body.features[0].center[0],
            location: body.features[0].place_name            
        })
    }
    })
}

module.exports = geocode