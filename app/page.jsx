"use client"

import styles from "./page.css";
import { useState } from "react";



export default function Home() {
  const [count, setCount] = useState(0);


  return (
    <div>
      <h1>Timer</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}
