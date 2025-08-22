import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  // function changeColor(color) {
  //   setColor(color);
  // }
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {/* <button
            onClick={() => changeColor("red")}
            className="outline-none px-4 py-1 rounded-full shadow-lg bg-white text-red-700 text"
          >
            Test 1
          </button> */}
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-red-700 text"
            style={{ backgroundColor: "#f28b82", fontWeight: "bold" }}
          >
            Test 1
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full shadow-lg bg-green-200 text-green-700 text font-bold"
          >
            Test 2
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full shadow-lg bg-blue-200 text-blue-700 text font-bold"
          >
            Test 3
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
