import React, { useEffect, useState } from 'react'
import { thoughtList } from './utils/ThoughtList'

const Thought = () => {

    const getThought = () => {
        return thoughtList[Math.floor(Math.random() * thoughtList.length)]
    }

    const [thought, setThought] = useState(getThought())

    useEffect(() => {
        const interval = setInterval(() => {
            setThought(getThought())
        }, 30000);
        return () => clearInterval(interval);
    });

    const diwali = () => {
        const date = new Date()
        if (date.getDate() >= 13 && date.getDate() <= 16) {
            return <div><div>Happy Diwali!!</div><br></br></div>
        }
        return null;
    }
    return <div className='thought'>
        {diwali()}
        <span><i>{thought}</i></span>
    </div>
}

export default Thought