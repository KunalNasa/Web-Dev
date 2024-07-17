import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Hooks can only be called inside React function components.
// Hooks can only be called at the top level of a component.
// Hooks cannot be conditional

function App() {
  const [count, setCount] = useState(2) // this concept is known as hook

  return (
    <>
      <div>The count is {count}</div>
      <button onClick={() => {setCount(count**2)}}> Click Me  </button>
    </>
  )
}

export default App
