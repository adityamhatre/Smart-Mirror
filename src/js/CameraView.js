import React, { useEffect, useState } from 'react'
import { initFaceApiFor, getAllPeople } from './api/face/FaceApi'
import _ from 'lodash'

const CameraView = () => {
    const [people, setPeople] = useState({ names: [] })

    useEffect(() => {
        console.log('lol')
        const video = document.getElementById('video')
        initFaceApiFor(video)
    }, [])

    useEffect(() => {
        const i = setInterval(() => {
            const newPeople = getAllPeople()
            setPeople({ names: newPeople })
        }, 1000)
        return () => clearInterval(i)
    }, [people])


    const greet = () => {
        if (!_.isEmpty(people.names)) {
            return <div>Hey {people.names[0]}!<br></br>What's up?</div>
        } else return null
    }
    return <div id='camera-view' className="camera-view">
        <video id="video" style={{ WebkitTransform: 'rotateY(180deg)', display: 'none' }} autoPlay />
        {greet()}
    </div>
}

export default CameraView