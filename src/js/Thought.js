import React, { useEffect, useState } from 'react'
import { thoughtList } from './utils/Thought'

const Thought = () => {

    const [thought, setThought] = useState(thoughtList[Math.floor(Math.random() * thoughtList.length)])

    const getThought = () => {
        return thoughtList[Math.floor(Math.random() * thoughtList.length)]
    }


    useEffect(() => {
        const interval = setInterval(() => {
            setThought(getThought())
        }, 30000);
        return () => clearInterval(interval);
    });


    return <div className='thought'>
        <span><i>{thought}</i></span>
    </div>
}

export default Thought