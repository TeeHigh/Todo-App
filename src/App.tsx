import { useEffect, useState } from "react"
import { nanoid } from "nanoid";
import Background from "./components/Background"
import Body from "./components/Body"
import Header from "./components/Header";
import Input from "./components/Input";
import NavBar from "./components/NavBar";
import TodoList from "./components/TodoList";
import BottomNav from "./components/BottomNav";

interface Todo {
  id: number | string;
  newTodo: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || '')
  const [newTodo, setNewTodo] = useState('')
  const [todoList, setTodoList] = useState<Todo[]>([])

  const navLinks: string[] = [
    'All', 'Active', 'Completed'
  ]

  // effect to handle color theme
  useEffect(function () {
    localStorage.setItem('theme', theme)
    
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark')
    } 
    else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  //functions to set color theme to light mode and dark mode 
  function addDarkMode() {
    setTheme('dark');
  }
  function addLightMode() {
    setTheme('light');
  }

  //function to create new todo object 
  function addNewTodoItem(){
    const newItem: Todo = {
      id: nanoid(),
      newTodo,
      completed: false
    }
    if (newTodo){
      setTodoList((prev) => [...prev, newItem] )
      setNewTodo('')
    }
  }

  //function to delete a task from the todo list
  function deleteTodoItem(id: string | number){
    setTodoList((prev) => prev.filter((task)=> task.id !== id)) //leaves only objects whose id don't correlate
  }
  
  const handleEnter: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if(e.key === "Enter" ){
      addNewTodoItem()
    }
  }

  function handleClick(){
    addNewTodoItem();
  }

  return (
    <>
      <div className="">
        <Background />
        <Body>
          <Header setDarkMode={addDarkMode} setLightMode={addLightMode} />
          <Input newTodo={newTodo} setNewTodo={setNewTodo} handleEnter={handleEnter} handleClick={handleClick} />
          <TodoList navLinks={navLinks} todoList={todoList} setTodoList={setTodoList} deleteTodoItem={deleteTodoItem} />
          {/* <NavBar navLinks={navLinks} /> */}
          <BottomNav navLinks={navLinks} />
          {todoList.length > 1 && <p className="text-[#9394a5] mt-6">Drag and drop to reorder list</p>}
        </Body>
      </div>
    </>
  )
}

export default App
