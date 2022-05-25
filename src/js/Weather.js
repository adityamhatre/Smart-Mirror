import React, { useEffect, useState } from 'react';
import getCurrentWeather from './api/WeatherApi';
import _ from 'lodash'
import icons from './utils/icons';
import { Connection } from './Connection';

const Weather = (props) => {
    const [weatherInfo, setWeatherInfo] = useState({})
    const [trigger, setTrigger] = useState(true)

    useEffect(() => {
        getCurrentWeather(props.city)
            .then(response => {
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

    useEffect(() => {
        const timeout = setTimeout(() => setTrigger(!trigger), props.refreshInterval)
        return () => clearTimeout(timeout)
    })

    if (_.isEmpty(weatherInfo)) {
        return null;
    }

    return <div className="weather">
        <div style={{
            fontSize: 96,
            gap: '1rem',
            display: 'flex',
            alignItems: 'center'
        }}>{props.city} <Connection></Connection></div>
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