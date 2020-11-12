import React, { useEffect, useState } from 'react'


const DateTime = () => {
    const now = new Date()
    const hour = now.getHours()
    const minute = now.getMinutes()
    const second = now.getSeconds()

    const [trigger, setTrigger] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => { setTrigger(!trigger) }, 1000);
        return () => clearInterval(interval);
    });

    const sanitized = a => { return (a <= 9) ? "0" + a : a }

    const monthName = monthNumber => {
        switch (monthNumber) {
            case 1: return 'January'
            case 2: return 'February'
            case 3: return 'March'
            case 4: return 'April'
            case 5: return 'May'
            case 6: return 'June'
            case 7: return 'July'
            case 8: return 'August'
            case 9: return 'September'
            case 10: return 'October'
            case 11: return 'November'
            case 12: return 'December'
            default: return ''
        }
    }
    const dayName = dayNumber => {
        switch (dayNumber) {
            case 1: return 'Sunday'
            case 2: return 'Monday'
            case 3: return 'Tuesday'
            case 4: return 'Wednesday'
            case 5: return 'Thursday'
            case 6: return 'Friday'
            case 7: return 'Saturday'
            default: return ''
        }
    }
    return <div className='time'>
        <div className='time-subgrid'>
            <div className='hour-minute'>
                {sanitized(hour === 12 || hour === 0 ? 12 : hour % 12)}:{sanitized(minute)}
            </div>
            <div className='second'>
                {sanitized(second)}
            </div>
            <div className='am-pm'>
                {hour >= 12 ? "PM" : "AM"}
            </div>
            <div className='day'>
                {dayName(1 + now.getDay())}
            </div>
            <div className='date'>
                {monthName(1 + now.getMonth())} {now.getDate()}
            </div>

        </div>
    </div>
}
export default DateTime