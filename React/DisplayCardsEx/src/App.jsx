import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setdata] = useState([]);

  const fetchData = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    let finalData = await data.json();
    setdata(finalData);
  }
  useEffect(() => {
    fetchData();
  }
    , [])

  return (
    <>
      <div className="container">
        {data.map(todo => {
          return (
            <div key={todo.id} className="cards">
              <h1 className="todo  font-bold">{todo.title}</h1>
              <p className="todo">{todo.body}</p>
              {/* <div className="todo">{todo.userId}</div> */}
              <div className="todo">By Id : {todo.id}</div>
            </div>)
        })}
        </div>
    </>
  )
}

export default App
