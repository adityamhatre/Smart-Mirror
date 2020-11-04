import '../css/App.css'
import React from 'react';
import Weather from './Weather'
import DateTime from './DateTime';
import Thought from './Thought';
import MorningWeather from './MorningWeather';

const App = () => {
    return <div className="wrapper">
        <Weather city="Dallas" refreshInterval={60 * 60 * 1000} />
        <DateTime />
        <Thought />
        <MorningWeather city="Dallas" />
    </div>
}

export default App;