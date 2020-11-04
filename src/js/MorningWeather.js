import React, { useEffect, useState } from 'react'
import getCurrentWeather from './api/WeatherApi'
import _ from 'lodash'

const MorningWeather = (props) => {
    const [temp, setTemp] = useState()
    const [trigger, setTrigger] = useState(true)

    let hour = new Date().getHours()

    useEffect(() => {
        getCurrentWeather(props.city)
            .then(response => {
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }
                return response.json()
            })
            .then(responseJson => {
                let { temp } = _.pick(responseJson.main, ['temp'])
                setTemp(Math.round(temp))
            })
            .catch(err => {
                console.log(err)
            })

        const timeout = setTimeout(() => {
            setTrigger(!trigger)
        }, 15 * 60 * 1000)
        return () => clearInterval(timeout)
    }, [trigger, props.city])


    if (!(hour >= 6 && hour < 10)) {
        return null
    }

    const renderedTemp = () => {
        if (temp === undefined || temp === null) {
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
