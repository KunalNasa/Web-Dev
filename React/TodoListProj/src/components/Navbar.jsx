import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-purple-600 text-white mx-auto md:w-[60%] my-1
    border rounded-md h-16  ">
        <span className="font-bold text-xl mx-7">priority Plan</span> 
        <ul className="flex gap-7 mx-7">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Tasks</li>
        </ul>
    </nav>
  )
}

export default Navbar
