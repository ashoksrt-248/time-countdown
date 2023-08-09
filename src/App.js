import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [counter, setCounter] = useState("60");
  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);
  return (
    <div className="App">
      <h1>{counter}</h1>
    </div>
  );
}
