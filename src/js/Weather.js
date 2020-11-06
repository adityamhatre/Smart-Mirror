import React, { useEffect, useState } from 'react';
import getCurrentWeather from './api/WeatherApi';
import _ from 'lodash'
import icons from './utils/icons';

const Weather = (props) => {
    const [weatherInfo, setWeatherInfo] = useState({})
    const [trigger, setTrigger] = useState(true)

    useEffect(() => {
        getCurrentWeather(props.city)
            .then(response => {
                if (response.status === 401) {
                    // return fake data for dev purposes
                    return new Promise(resolve => resolve({ "coord": { "lon": -96.78, "lat": 32.77 }, "weather": [{ "id": 800, "main": "Clear", "description": "clear sky", "icon": "01n" }], "base": "stations", "main": { "temp": 19.43, "feels_like": 15.64, "temp_min": 17.78, "temp_max": 20.56, "pressure": 1022, "humidity": 32 }, "visibility": 10000, "wind": { "speed": 3.1, "deg": 160 }, "clouds": { "all": 1 }, "dt": 1604449792, "sys": { "type": 1, "id": 5625, "country": "US", "sunrise": 1604407622, "sunset": 1604446457 }, "timezone": -21600, "id": 4684904, "name": "Dallas", "cod": 200 }))
                }
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }
                return response.json()
            })
            .then(responseJson => {
                let { temp,
                    feels_like: feelsLike,
                    temp_min: minTemp,
                    temp_max: maxTemp,
                    humidity } = _.pick(responseJson.main,
                        ['temp', 'feels_like', 'temp_min', 'temp_max', 'humidity'])


                let { speed: windSpeed, deg: windDirection } = _.pick(responseJson.wind, ['speed', 'deg'])

                let { description, icon } = _.pick(_.head(responseJson.weather), ['description', 'icon'])

                temp = Math.round(temp)
                minTemp = Math.round(minTemp)
                maxTemp = Math.round(maxTemp)
                windSpeed = Math.round(windSpeed * 3.6)
                humidity = Math.round(humidity)

                setWeatherInfo({ temp, feelsLike, minTemp, maxTemp, windSpeed, windDirection, humidity, description, icon })
            })
            .catch(err => {
                console.log(err)
            })
    }, [trigger, props.city]) //run this effect when trigger updates

    useEffect(() => {
        const timeout = setTimeout(() => setTrigger(!trigger), props.refreshInterval)
        return () => clearTimeout(timeout)
    })

    if (_.isEmpty(weatherInfo)) {
        return null;
    }

    return <div className="weather">
        <div style={{ fontSize: 96 }}>{props.city}</div>
        <div>{_.get(weatherInfo, 'temp')} °C</div>
        <div>{_.get(weatherInfo, 'minTemp')} / {_.get(weatherInfo, 'maxTemp')} °C</div>
        <div className={icons[_.get(weatherInfo, 'icon')]}>
            <span style={{ marginLeft: 16, fontWeight: 'bold' }}>
                {_.get(weatherInfo, 'description')}
            </span>
        </div>
        <div>Wind: {_.get(weatherInfo, 'windSpeed')} km/h</div>
        <div>Humidity: {_.get(weatherInfo, 'humidity')}%</div>
    </div>
}
export default Weather