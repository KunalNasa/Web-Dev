import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [name, setname] = useState("Bobby")
  // const [form, setform] = useState({email: "",phone: ""})
  const [form, setform] = useState({})

  const handleclick = () => {
    alert("I am clicked");
  }
  const handleMouseHover = () => {
    alert("hey I am mouse hover");
  }
  const handleChange = (e) => {
    // setname(e.target.value);
     setform({...form, [e.target.name]: e.target.value}) // jo bhi name(email or phone)
     // ki value change ho rhi hai use target value ke equal kardo
  }
  return (
    <>
      <div className="button">
        <button onClick={handleclick}>Click me</button>
      </div>
      {/* <div className="red" onMouseOver={handleMouseHover}>
        I am a red Div
      </div> */}
      <input type="text" name = 'email' value={form.email? form.email: ""} onChange={handleChange} />
      <input type="text" name='phone' value={form.phone? form.phone: ""} onChange={handleChange} />

    </>
  )
}

export default App
