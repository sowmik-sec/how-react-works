import React, { useEffect, useState } from "react";

const Watch = () => {
  const [steps, setSteps] = useState(0);
  const run = () => setSteps(steps + 1);
  useEffect(() => {
    console.log(steps);
  }, [steps]);
  return (
    <div>
      <h2>This is my smart watch</h2>
      <h3>My Current Steps: {steps}</h3>
      <button onClick={run}>Run Forest Run</button>
    </div>
  );
};

export default Watch;
