"use client"
import Image from "next/image";
import { useRef } from "react";
import { submitAction } from "@/actions/form";
export default function Home() {
  let ref = useRef();
  return (
    <div>
      <form ref={ref} action={(e) => {submitAction(e); ref.current.reset()}}>
        <div>
          <label htmlFor="name">Name</label>
          <input name="name" id="name" className="text-black"  type="text" />
        </div>
        <div>
        <label htmlFor="add">Address</label>
          <input name="add" id="add" className="text-black" type="text" />
        </div>
        <div>
        <button>submit</button>
        </div>
      </form>
    </div>
  );
}
