import { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';

function App() {
  //input text
  const [todo, settodo] = useState("")
  // array of all todos
  const [todos, settodos] = useState([])
  // to mark finish items and display finished items
  const [finished, setfinished] = useState(false)
  
  useEffect(() => {
    // fetch string(json) from local storage containing all the todos
    let todoString = localStorage.getItem("todos");
    // if string is not empty
    if(todoString)
    {
      // parse the string and set it into todos list
      let todos = JSON.parse(localStorage.getItem("todos"));
      settodos(todos);
    }
  }, [])
  
  // function to save data in local storage
  const saveToLS = (params) => {
    // setting data to local storage in json format
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  // to delete a todo
  const handleDelete = (e, id) => {
    // newTodos will contain all the todo with id not equal to id of todo to be
    // deleted
    let newTodos = todos.filter(item => {
      return item.id !== id;
    });
    // set this new todo list as our primary todo list
    settodos(newTodos);
    // save this list to local storage
    saveToLS();
  }

  // to handle the edit function in our app
  const handleEdit = (e, id) => {
    // find todos with id == id of todo to be edited
    let t = todos.filter(i => i.id === id)
    {
      // set the current todo as edited todo in input bar
      settodo(t[0].todo);
    }
    // delete this todo from todos list to make an illusion of editing
    let newTodos = todos.filter(item => {
      return item.id !== id;
    });
    settodos(newTodos);
    saveToLS(); 
  }
  // to handle the completion of todo and mark completed todos with line
  const handleCheckBox = (e) => {
    // get id from the parameter
    let id = e.target.name;
    // get index of the todo with given id with findIndex function
    let index = todos.findIndex(item => {
      return item.id == id;
    })

    // we can not directly change the state of current todos because react doesn't
    // allow this , so first we have to make a copy of todos and then we will replace
    // original todos with this copy by making changes in this shallow copy
    // creating a shallow copy of todos
    let newTodos = [...todos];
    // setting isCompleted as negation of actual
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    // set this copy as todos
    settodos(newTodos);
    }

    // to add todo in todos list
  const handleAdd = () => {
    // in shallow copy of todos(created by ...todos) add a new todo 
    //which contains an id, todo(text) and a boolean value 
    settodos([...todos, {id: uuidv4(),todo, isCompleted: false}]);
    // after saving todo in todos, set it as empty string 
    settodo("");
    // save changes to local storage
    saveToLS();
  }

  const handleChange = (e) => {
    // e = event that triggered function
    settodo(e.target.value); // value of that event which is todo in this case
    // which is input by user
  }

  // to save the last object added(last obj is not saved because of async nature of js)
  const isFirstRender = useRef(true);
  useEffect(() => {
    // if not first render then saveTo local storage
    if (!isFirstRender.current) {
      saveToLS();
    }
    // set first render as false after making changes in todos because this will
    // run only when we change todos
    isFirstRender.current = false;
    // run only when we change todos
  }, [todos])

  // to keep track of finished and not finished todos
  const toggleFinish = (e) => {
    // toggle the show finished checkbox
    setfinished(!finished);
  }
  
  return (
    <>
    
      <Navbar></Navbar>
      <div className="container mx-auto bg-violet-100 my-1 rounded-md p-3 min-h-[80vh] md:w-[60%] ">
        <h2 className="font-bold text-xl ">Add Priorities</h2>
        <div className="flex flex-col gap-2 my-3">
        <input onChange={handleChange} value={todo} type="text" className="w-full border rounded-md border-purple-700 " />

        <button onClick={handleAdd} disabled = {todo.length<1} className="bg-violet-500 hover:bg-violet-800
         text-white rounded-md hover:cursor px-5 py-0.5">Save</button>
         </div>

         <input onChange={toggleFinish} type="checkbox" checked={finished}/> Show finished
        <h2 className="font-bold text-xl ">Your Priorities</h2>

        <div className="todos max-w-full">
          {todos.length === 0 && <div>Nothing to display</div>}
          {todos.map(item => {
            return (finished || !item.isCompleted) && <div key={item.id} className="todo flex my-2 justify-between">

              <div className="flex gap-2">
              <input name={item.id} onChange={handleCheckBox} type="checkbox" checked={item.isCompleted} />
              <div style={ {wordBreak: 'break-all'}}  className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
              </div>

              <div className="buttons flex h-full">
                <button onClick={(e) => {handleEdit(e, item.id)}} className='bg-violet-500 hover:bg-violet-800
         text-white rounded-md hover:cursor px-1 py-0.5 mx-1'><FaEdit /></button>
                <button onClick={(e) =>{handleDelete(e,item.id)}} className='bg-violet-500 hover:bg-violet-800
         text-white rounded-md hover:cursor px-1 py-0.5 mx-1'><MdDelete /></button>
              </div>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App
