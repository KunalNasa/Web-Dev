import React from 'react'
import "./Button.css"
import { MdMessage } from "react-icons/md";
const Button = ({ className, icon, text, ...rest}) => {
  return (
    <div>
      <button
        {...rest}
        className={className}> {icon} {text}</button>
    </div>
  )
}

export default Button
