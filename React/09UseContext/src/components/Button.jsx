import React from 'react'
import { useContext } from 'react'
import { counterContext } from '../assets/context/context'
import Component1 from './Component1'

const Button = () => {
  const value = useContext(counterContext)
  return (
    
    <div>
      <button onClick={() => {value.setCount(value.count + 1)}}><span><Component1/></span>I am a button</button>
    </div>
  )
}

export default Button
