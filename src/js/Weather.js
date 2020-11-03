import React from 'react';
import ReactWeather from 'react-open-weather';

const Weather = (props) => {
    return <div className="weather">
        <ReactWeather
            refreshInterval={60 * 60 * 1000}
            forecast="today"
            apikey="79943603be2e70c145f866196516226b"
            type="city"
            city={props.city} />
    </div>
}
export default Weather