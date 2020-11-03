import '../css/App.css'
import React from 'react';
import Weather from './Weather'
import DateTime from './DateTime';
import Thought from './Thought';
import MorningWeather from './MorningWeather';

const App = () => {
    return <div className="wrapper">
        <Weather city="Dallas" />
        <DateTime />
        <Thought />
        <MorningWeather city="Dallas" />
        <div className="greeting"></div>
    </div>
}

export default App;