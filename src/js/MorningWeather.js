import React, { useEffect, useState } from 'react'

const MorningWeather = (props) => {
    const [hour, setHour] = useState(new Date().getHours())
    const [temp, setTemp] = useState(null)

    useEffect(() => {
        const timed = setInterval(() => {
            setHour(new Date().getHours())
            setTemp(null)
        }, 15 * 1000)
        return () => clearTimeout(timed)
    })

    if (!(hour >= 6 && hour < 11)) {
        return null
    }

    if (!temp) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=79943603be2e70c145f866196516226b`
        fetch(url)
            .then(data => data.json().then(j => {
                const t = j.main.temp - 273.15
                setTemp(Math.round(t))
            }))
            .catch(err => console.error(err))
    }

    const renderedTemp = () => {
        if (!temp) {
            return <span style={{ fontSize: 50 }}>Loading...</span>
        }
        else return <span>{temp}°C</span>
    }

    return <div className="morning-weather">
        <div style={{ display: 'tableCell', verticalAlign: 'middle' }}>
            {renderedTemp()}
        </div>
    </div>
}

export default MorningWeather