import React, { useState } from "react";
import "./App.css";
import TrafficLight from "./trafficlight";

function App() {
  const [signal, setSignal] = useState("");

  return (
    <div className={`container ${signal}`}>
      <h1>Traffic Light Controller 🚦</h1>

      <div className="buttons">
        <button className="btn stop" onClick={() => setSignal("stop")}>Stop</button>
        <button className="btn ready" onClick={() => setSignal("ready")}>Get Ready</button>
        <button className="btn go" onClick={() => setSignal("go")}>Go</button>
      </div>

      <TrafficLight signal={signal} />
    </div>
  );
}

export default App;
