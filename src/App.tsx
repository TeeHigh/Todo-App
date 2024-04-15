import { useEffect, useState } from "react"
import Background from "./components/Background"
import Body from "./components/Body"
import Header from "./components/Header";
import Input from "./components/Input";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || '')

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
          <Input/>
        </Body>
      </div>
    </>
  )
}

export default App
