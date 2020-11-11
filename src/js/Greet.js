import React, { useEffect, useState } from 'react'
import _ from 'lodash'

const Greet = () => {
    const [names, setNames] = useState({})
    useEffect(() => {
        setInterval(() => fetch("http://192.168.1.169:5000/detected-faces", {
            "headers": {
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.9,hi;q=0.8,mr;q=0.7",
                "cache-control": "no-cache",
                "pragma": "no-cache"
            },
            "referrer": "http://localhost:3000/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "omit"
        }).then(response => {
            return response.json()
        }).then(response => {
            setNames(response)
        }), 500)
    }, [])
    const greet = () => {
        if (_.isEmpty(names.names)) {
            return null
        }
        return <span>Hello {names.names.join(', ')}!</span>
    }
    return <div className='greet'>
        {greet()}
    </div>
}
export default Greet