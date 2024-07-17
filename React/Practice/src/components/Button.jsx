import React from 'react'
import { useContext} from 'react'
import { counterContext } from '../assets/context/context'
const Button = () => {
  const value = useContext(counterContext)
  return (
    <div>
      <p> {value}</p>
    </div>
  )
}

export default Button
