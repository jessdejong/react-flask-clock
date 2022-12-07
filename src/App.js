import React, { useState, useEffect } from "react";

function App() {
  const [currentTime, setTime] = useState("");

  useEffect(() => {
    fetch("/api/time")
      .then((res) => res.json())
      .then((data) => setTime(data.time));
  }, []);

  convertDateTimeToDayOfWeek(currentTime);

  return (
    <div className="container px-5 py-5">
      <div className="px-2 py-2 bg-blue-400 rounded-md">
        <p className="text-3xl text-white">
          The current day of the week is{" "}
          {convertDateTimeToDayOfWeek(currentTime)}.
        </p>
      </div>
    </div>
  );
}

function convertDateTimeToDayOfWeek(time) {
  console.log(time);
  let dayAbbreviation = time.split(",")[0];
  return dayAbbreviation;
}

export default App;
