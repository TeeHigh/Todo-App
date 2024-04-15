import { useEffect, useState } from "react"
import { nanoid } from "nanoid";
import Background from "./components/Background"
import Body from "./components/Body"
import Header from "./components/Header";
import Input from "./components/Input";
import NavBar from "./components/NavBar";
import TodoList from "./components/TodoList";

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
  
  const handleEnter: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if(e.key === "Enter"){
      addNewTodoItem()
    }
  }

  return (
    <>
      <div className="">
        <Background />
        <Body>
          <Header setDarkMode={addDarkMode} setLightMode={addLightMode} />
          <Input newTodo={newTodo} setNewTodo={setNewTodo} handleEnter={handleEnter} />
          <TodoList navLinks={navLinks} />
          <NavBar navLinks={navLinks} />
        </Body>
      </div>
    </>
  )
}

export default App
