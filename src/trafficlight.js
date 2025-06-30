function TrafficLight({ signal }) {
  const messages = {
    stop: "🟥 Stop! Wait until green.",
    ready: "🟨 Get Ready!",
    go: "🟩 Go! Drive Safe!",
  };

  return (
    <div className="status">
      <p>{signal ? messages[signal] : "Click a button to control the traffic light."}</p>
    </div>
  );
}

export default TrafficLight;
