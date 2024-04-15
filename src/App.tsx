import { useEffect, useState } from "react"
import Background from "./components/Background"
import Body from "./components/Body"
import Header from "./components/Header";
import Input from "./components/Input";
import NavBar from "./components/NavBar";
import TodoList from "./components/TodoList";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || '')
  const [newTodo, setNewTodo] = useState('')

  const navLinks: string[] = [
    'All', 'Active', 'Completed'
  ]

  useEffect(function () {
    localStorage.setItem('theme', theme)
    
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark')
    } 
    else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  function addDarkMode() {
    setTheme('dark');
  }
  function addLightMode() {
    setTheme('light');
  }

  return (
    <>
      <div className="">
        <Background />
        <Body>
          <Header setDarkMode={addDarkMode} setLightMode={addLightMode} />
          <Input newTodo={newTodo} setNewTodo={setNewTodo} />
          <TodoList navLinks={navLinks} />
          <NavBar navLinks={navLinks} />
        </Body>
      </div>
    </>
  )
}

export default App
