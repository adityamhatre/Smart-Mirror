import "../css/App.scss";
import React from "react";
import Weather from "./Weather";
import DateTime from "./DateTime";
import Thought from "./Thought";
import MorningWeather from "./MorningWeather";
import Greet from "./Greet";
import AudioVisualizer from "./AudioVisualizer";
import Sunglass from "./Sunglass";

const App = () => {
  return (
    <div className="wrapper">
      <Weather city="Dallas" refreshInterval={60 * 1000} />
      <DateTime />
      <Thought />
      <MorningWeather city="Dallas" />
      <Greet useFaceApi={false} />
      <AudioVisualizer />
      <Sunglass />
    </div>
  );
};

export default App;
