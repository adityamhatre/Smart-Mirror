import React from 'react';
import ReactWeather from 'react-open-weather';

const Weather = () => {
    return <div className="weather">
        <ReactWeather
            forecast="today"
            apikey="79943603be2e70c145f866196516226b"
            type="city"
            city="Dallas" />
    </div>
}
export default Weather