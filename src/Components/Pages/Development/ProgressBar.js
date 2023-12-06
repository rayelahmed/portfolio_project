import React, { useEffect, useState } from "react";
import "./ProgressBar.css";
import ProgressBar from "@ramonak/react-progress-bar";

import ScrollTrigger from "react-scroll-trigger";

const Progress = () => {
  const [completionPercentage1, setCompletionPercentage1] = useState(0);
  const [completionPercentage2, setCompletionPercentage2] = useState(0);
  const [completionPercentage3, setCompletionPercentage3] = useState(0);
  const [progressOn, setProgressOn] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (completionPercentage1 < 91) {
        setCompletionPercentage1(completionPercentage1 + 1);
      }

      if (completionPercentage2 < 89) {
        setCompletionPercentage2(completionPercentage2 + 1);
      }
      if (completionPercentage3 < 92) {
        setCompletionPercentage3(completionPercentage3 + 1);
      }
    }, 10); // 100 milliseconds

    // Cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [completionPercentage1, completionPercentage2, completionPercentage3]);

  return (
    <div className="progress-container mt-5">
      <ScrollTrigger
        onEnter={() => setProgressOn(true)}
        onExit={() => setProgressOn(false)}
      >
        <div>
          <div className="max-w-lg w-full flex justify-between">
            <h5>React</h5>
            <h5>{completionPercentage1}%</h5>
          </div>
          <div className="pt-2">
            {progressOn && (
              <ProgressBar
                height="10px"
                bgColor=" #61dbfb"
                labelColor=" #61dbfb"
                completed={completionPercentage1}
                animateOnRender={true}
              />
            )}
          </div>
        </div>
        <div className="pt-4">
          <div className="max-w-lg w-full flex justify-between">
            <h5>Node js</h5>
            <h5>{completionPercentage2}%</h5>
          </div>
          <div className="pt-2">
            {progressOn && (
              <ProgressBar
                height="10px"
                bgColor=" #3c873a"
                labelColor=" #3c873a"
                completed={completionPercentage2}
                animateOnRender={true}
              />
            )}
          </div>
        </div>
        <div className="pt-4">
          <div className="max-w-lg w-full flex justify-between">
            <h5>Mongodb</h5>
            <h5>{completionPercentage3}%</h5>
          </div>
          <div className="pt-2">
            {progressOn && (
              <ProgressBar
                height="10px"
                bgColor=" #00ED64"
                labelColor=" #00ED64"
                completed={completionPercentage3}
                animateOnRender={true}
              />
            )}
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default Progress;
