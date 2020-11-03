import React, { useEffect, useState } from 'react';
import ReactWeather from 'react-open-weather';

const Weather = () => {
    const [flip, setFlip] = useState(true)
    useEffect(() => {
        const timeout = setTimeout(() => {
            setFlip(!flip)
        }, 60 * 1000);
        return () => clearTimeout(timeout)
    })

    return <div className="weather">
        <ReactWeather
            forecast="today"
            apikey="79943603be2e70c145f866196516226b"
            type="city"
            city="Dallas" />
    </div>
}
export default Weather