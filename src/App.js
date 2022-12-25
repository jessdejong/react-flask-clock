import React, { useState, useEffect } from "react";

function App() {
  const [currentTime, setTime] = useState("");
  const [currentTimes, setTimes] = useState([]);

  useEffect(() => {
    fetch("/api/time")
      .then((res) => res.json())
      .then((data) => {
        setTime(data.time);
        setTimes(data.times);
    });
  }, []);

  // convertDateTimeToDayOfWeek(currentTime);
  // console.log(currentTimes);

  return (
    <div className="container px-5 py-5">
      <div className="px-2 py-2 bg-blue-400 rounded-md">
        <p className="text-3xl text-white">
          The current day of the week is{" "}
          {convertDateTimeToDayOfWeek(currentTime)}.
        </p>
          <ol>
            {currentTimes.map(element => {
              // console.log(element);
              return <li className="text-black">{element.timestamp}</li>;
            })}
          </ol>
      </div>
    </div>
  );
}

function convertDateTimeToDayOfWeek(time) {
  // console.log(time);
  let dayAbbreviation = time.split(",")[0];
  return dayAbbreviation;
}

export default App;
