import React from 'react'
import "./Card.css"
const Card = ({title, description}) => {
  return (
    <div className='card'>
        <img src="https://i.ytimg.com/vi/12FP8vF0eNs/maxresdefault.jpg" alt="" 
        width={290} style={{border: "2px solid black"}}/>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

export default Card
