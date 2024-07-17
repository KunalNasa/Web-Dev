import React, {useEffect} from 'react'

const Navbar = ({color}) => {
  useEffect(() => {
    alert("color was changed")
  }, [color])
  
  // Example of Cleanup function
  useEffect(() => {
    alert("Hey welcome to my page. This is the first render of app.jsx")

    return () => {
      alert("component was unmounted")
    }
  }, [])
  
  return (
    <div>
      I am navbar of color {color}
    </div>
  )
}

export default Navbar
