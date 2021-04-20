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


    return <div className='thought'>
   
        <span><i>{thought}</i></span>
    </div>
}

export default Thought
