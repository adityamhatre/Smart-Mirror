import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import detectFaces from './utils/CameraServer'

const Greet = ({ useFaceApi }) => {
    const [names, setNames] = useState({})
    useEffect(() => {
        if (!useFaceApi) return
        
        setInterval(() => detectFaces()
            .then(response => { return response.json() })
            .then(response => { setNames(response) })
            .catch(err => console.error(err))
            , 500)
    }, [useFaceApi])

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