// "use client"
// import { useState } from "react";
import Navbar from "@/components/Navbar";
import fs from "fs/promises"
export default function Home() {
  console.log("hey")
  // const [count, setcount] = useState(0)
  let a = fs.readFile("data.json");
  a.then(e => console.log(e.toString()));
  return (
    <div>
      <Navbar/>
      I am a component
        {/* <div>I am count {count}</div> */}
      {/* <button onClick={ ()=> setcount(count + 1)}> Click Me</button> */}
    </div>
  );
}
