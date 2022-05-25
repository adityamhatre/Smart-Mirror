import React, { useEffect, useState } from 'react';
import fetchWithTimeout from './utils/FetchWithTimeout';

export const Connection = (props) => {

    const [trigger, setTrigger] = useState(true)
    const [isConnected, setIsConnected] = useState(true)

    useEffect(() => {
        fetchWithTimeout("https://ipinfo.io/ip", { timeout: 5000 })
            .then(() => setIsConnected(true))
            .catch(() => setIsConnected(false))
            .finally(() => {
                const timeout = setTimeout(() => {
                    setTrigger(!trigger)
                    clearTimeout(timeout)
                }, 5000);
            })

    }, [trigger])

    const icon = () => isConnected ? 'cloud' : 'cloud_off'


    return <span style={{
        fontSize: 35,
    }} class="material-symbols-outlined">
        {icon()}
    </span>

}