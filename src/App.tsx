import { useEffect, useState } from "react"
import { nanoid } from "nanoid";
import Background from "./components/Background"
import Body from "./components/Body"
import Header from "./components/Header";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import BottomNav from "./components/BottomNav";
import NavBar from "./components/NavBar";

enum TabStatus{
  ALL = 'All',
  ACTIVE = 'Active',
  COMPLETED = 'Completed'
}

interface Todo {
  id: number | string;
  newTodo: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || '')
  const [newTodo, setNewTodo] = useState('')
  const [currentTab, setCurrentTab] = useState(`${TabStatus.ALL.toLowerCase()}`)
  // @ts-ignore
  const [todoList, setTodoList] = useState<Todo[]>(JSON.parse(localStorage.getItem('todoList')) || [])

  const navLinks: TabStatus[] = [
    TabStatus.ALL, TabStatus.ACTIVE, TabStatus.COMPLETED
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

  useEffect(()=>{
    localStorage.setItem('todoList', JSON.stringify(todoList))
  }, [todoList])

  //functions to set color theme to light mode and dark mode 
  function addDarkMode() {
    setTheme('dark');
  }
  function addLightMode() {
    setTheme('light');
  }

  //function to create new todo object 
  function addNewTodoItem() {
    const newItem: Todo = {
      id: nanoid(),
      newTodo,
      completed: false
    }
    if (newTodo) {
      setTodoList((prev) => [...prev, newItem])
      setNewTodo('')
    }
  }

  //function to delete a task from the todo list
  function deleteTodoItem(id: string | number) {
    setTodoList((prev) => prev.filter((task) => task.id !== id)) //leaves only objects whose id don't correlate
  }

  const handleEnter: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      addNewTodoItem()
    }
  }

  function handleClick() {
    addNewTodoItem();
  }

  return (
    <>
      <div className="">
        <Background />
        <Body>
          <Header setDarkMode={addDarkMode} setLightMode={addLightMode} />
          <Input newTodo={newTodo} setNewTodo={setNewTodo} handleEnter={handleEnter} handleClick={handleClick} />
          
          <TodoList  
            todoList={todoList} 
            setTodoList={setTodoList} 
            deleteTodoItem={deleteTodoItem}
            currentTab={currentTab}
          >
            <NavBar navLinks={navLinks} currentTab={currentTab} setCurrentTab={setCurrentTab}/>
          </TodoList>

          <BottomNav>
            <NavBar navLinks={navLinks} currentTab={currentTab} setCurrentTab={setCurrentTab}/>
          </BottomNav>

          {todoList.length > 1 && currentTab === 'all' && <p className="text-[#9394a5] mt-6">Drag and drop to reorder list</p>}
        </Body>
      </div>
    </>
  )
}

export default App
