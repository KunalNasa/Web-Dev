import React from 'react'
import './Body.css'
import shoe from "../assets/shoes.png"
import flipkart from "../assets/flipkart-icon.webp"
import amazon from "../assets/Amazonicon.png"
const Body = () => {
  return (
    <div className="container">
        <div className="left">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <div className='para'>
            <p >
                YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU
                WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU
                WITH OUR SHOES.
            </p>
            </div>
            <div className='categorize'>
                <button className='shopNow'>Shop Now</button>
                <button className='Category'>Category</button>
            </div>
            <p>Also Available On</p>
            <span className='Ecom'>
            <a href="https://www.flipkart.com/" target='blank'><img width={30} height={30} src= {flipkart} alt="" /></a>
            <a href="https://www.amazon.com/" target='blank'><img width={30} height={30} src= {amazon} alt="" /></a>
            </span>
        </div>
        <div className="right">
            <img src= {shoe} alt="" />
        </div>
    </div>
  )
}

export default Body
