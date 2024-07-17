"use client"
import Image from "next/image";

export default function Home() {
  const handleClick = async () => {
    let data = {
      Name : "Kunal",
      Role : "Sleeping"
    }
    let a = await fetch("/api/add", {method : "POST", headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data)})
    let res = await a.json();
    console.log(res);
  }
  return (
   <div>
    <h1>Get post req</h1>
    <button onClick={handleClick}>Click Me</button>
   </div>
  );
}
