import { useEffect, useRef, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import { counterContext } from './assets/context/context';

function App() {
   const [Count, setCount] = useState(0);
   useEffect(() => {
      alert("Count was increased");  
     }
   , [Count])
   
  return (
    <>
    <counterContext.Provider value={Count}>
      <p>{Count}</p>
      <button onClick={() => setCount(Count + 1)}> Click Me </button>
      <Navbar/>
    </counterContext.Provider>
    </>
  )
}

export default App
