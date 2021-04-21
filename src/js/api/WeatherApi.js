import fetchWithTimeout from "../utils/FetchWithTimeout"

const apiKey = '79943603be2e70c145f866196516226b'

const baseUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric`

const getCurrentWeather = (city) => fetchWithTimeout(`${baseUrl}&q=${city}`, { timeout: 5000 })

// const getCurrentWeather = (city) => new Promise(resolve => resolve({
//     "status": 200,
//     "json": () => {
//         return {
//             "coord": {
//                 "lon": -96.78,
//                 "lat": 32.77
//             },
//             "weather": [
//                 {
//                     "id": 800,
//                     "main": "Clear",
//                     "description": "clear sky",
//                     "icon": "01n"
//                 }
//             ],
//             "base": "stations",
//             "main": {
//                 "temp": 19.43,
//                 "feels_like": 15.64,
//                 "temp_min": 17.78,
//                 "temp_max": 20.56,
//                 "pressure": 1022,
//                 "humidity": 32
//             },
//             "visibility": 10000,
//             "wind": {
//                 "speed": 3.1,
//                 "deg": 160
//             },
//             "clouds": {
//                 "all": 1
//             },
//             "dt": 1604449792,
//             "sys": {
//                 "type": 1,
//                 "id": 5625,
//                 "country": "US",
//                 "sunrise": 1604407622,
//                 "sunset": 1604446457
//             },
//             "timezone": -21600,
//             "id": 4684904,
//             "name": "Dallas",
//             "cod": 200
//         }
//     }
// }))

export default getCurrentWeather
