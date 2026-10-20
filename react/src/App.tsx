import { useEffect, useState, useRef } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsViseble] = useState(false);
  const renderCount = useRef(0);

  function refHolder() {
    console.log((renderCount.current += 1));
  }

  function increment() {
    setCount((prev) => prev + 1);
  }

  function decrement() {
    setCount((prev) => prev - 1);
  }

  function toggleVisibility() {
    setIsViseble((prev) => !prev);
  }

  useEffect(() => {
    console.log(`Count changed: ${count}`);
  }, [count]);

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <p>Count: {count}</p>

      <button onClick={toggleVisibility}>Toggle Visibility</button>

      {isVisible && <p>Text is visible!</p>}

      <button onClick={refHolder}>Increment Ref</button>
    </div>
  );
}
