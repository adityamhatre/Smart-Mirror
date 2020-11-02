import React, { useEffect, useState } from 'react'


const DateTime = () => {
    const [hour, setHour] = useState(new Date().getHours())
    const [minute, setMinute] = useState(new Date().getMinutes())
    const [second, setSecond] = useState(new Date().getSeconds())

    useEffect(() => {
        const interval = setInterval(() => {
            setHour(new Date().getHours())
            setMinute(new Date().getMinutes())
            setSecond(new Date().getSeconds())
        }, 1000);
        return () => clearInterval(interval);
    });

    const sanitized = (a) => { return (a <= 9) ? "0" + a : a }

    return <div className='time'>
        {sanitized(hour % 12)}:{sanitized(minute)}:{sanitized(second)} {hour >= 12 ? "PM" : "AM"}
    </div>
}
export default DateTime