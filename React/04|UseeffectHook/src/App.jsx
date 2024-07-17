import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [First, setFirst] = useState(0)
  const [color, setcolor] = useState(0)

  // case 1 : Run on every render 
  useEffect(() => {
    alert("Hey, Welcome to my page");
  })

  // case 2 : Run only on first render 
  useEffect(() => {
    alert("Hey, Welcome to my page");
  }, [])

  // case 2 : Run only when certain values change
  useEffect(() => {
    alert("count was changed");
    setcolor(color + 1)
  }, [count])

  useEffect(() => {
    alert("First was changed");
  }, [First])

  

  return (
    <>
    {/* <Navbar color = {"red" + color}/> */}
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
