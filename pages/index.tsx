import React, { useState } from "react";

export default function App() {
  const [thoughtCount, setThoughtCount] = useState(0);
  const [mouseDown, setMouseDown] = useState(false);

  const incrementThoughtCount = () => {
    setThoughtCount(thoughtCount + 1);
  };

  return (
    <div className="min-h-screen flex flex-col bg-red-100">
      <div
        onMouseDown={() => setMouseDown(true)}
        onMouseUp={() => setMouseDown(false)}
        className={`flex-1 bg-green-200 flex items-center justify-center transition-all duration-100 ${
          mouseDown ? "bg-green-300" : ""
        }`}
        onClick={incrementThoughtCount}
      >
        <span className="">{thoughtCount}</span>
      </div>
      <div className=""></div>
    </div>
  );
}
