import React, { useEffect, useState } from "react";
import Display from "../Display/Display";

const Watch = () => {
  const [steps, setSteps] = useState(0);
  const run = () => setSteps(steps + 1);
  useEffect(() => {
    console.log(steps);
  }, [steps]);
  return (
    <div style={{ border: "2px solid purple", margin: "20px" }}>
      <h2>This is my smart watch</h2>
      <h3>My Current Steps: {steps}</h3>
      <Display name="garmin" steps={steps}></Display>
      <button onClick={run}>Run Forest Run</button>
    </div>
  );
};

export default Watch;
