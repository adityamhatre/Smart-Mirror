import React, { useEffect, useState } from 'react'

const AudioVisualizer = (props) => {
    const [status, setStatus] = useState(false)

    useEffect(() => {
        const wsClient = new WebSocket("ws://localhost:8000")
        wsClient.onopen = () => wsClient.send('Hello from client')
        wsClient.onclose = () => wsClient.close(1000)
        wsClient.onmessage = (msg) => setStatus(JSON.parse(msg.data).speakerPlaying)
        return () => wsClient.close(1000)
    }, [])

    return <div className="audio-visualizer">
        <div>
            {status}
        </div>
    </div>
}

export default AudioVisualizer
