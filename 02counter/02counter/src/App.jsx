import { useState } from "react";
import "./App.css";
function App() {
  const [counter, setCounter] = useState(15);
  // const [counter, setCounter]=useState(15);   // also valid, need to pass some value in useState()
  // let counter = 15;
  const addValue = () => {
    // setCounter(counter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };
  const removeValue = () => {
    // counter = counter - 1; // can't do, becausee will not check condition of going belwo 0, which will be checked in setCounter
    // newCounter = counter - 1;
    setCounter(counter - 1);
  };
  return (
    <>
      <h1> Hii React {counter}</h1>
      <h2>Counter value - {counter}</h2>
      <button onClick={addValue}>Add Value</button>{" "}
      <button onClick={removeValue}>Remove Value</button>
      <footer>Counter value - {counter}</footer>
    </>
  );
}

export default App;
