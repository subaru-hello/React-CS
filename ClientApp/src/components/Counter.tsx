import { useState } from "react";

const Counter = () => {
  const [currentCount, setCurrentCount] = useState(0);
  function incrementCounter() {
    return setCurrentCount(currentCount + 1);
  }
  return (
    <div>
      <p>You clicked {currentCount} times</p>
      <button onClick={incrementCounter}>Click me</button>
    </div>
  );
};

export default Counter;
