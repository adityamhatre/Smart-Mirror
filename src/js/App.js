import '../css/App.css'
import React from 'react';
import Weather from './Weather'
import DateTime from './DateTime';
import Thought from './Thought';

const App = () => {
    return <div className="wrapper">
        <Weather />
        <DateTime />
        <Thought />
    </div>
}

export default App;