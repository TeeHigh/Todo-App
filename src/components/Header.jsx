import React from 'react'

function Header({setDarkMode, setLightMode}) {

  return (
    <header className='flex justify-between align-middle mb-8 md: md:mb-4'>
      <h1 className='text-[2.4em] font-bold tracking-[10px] text-white cursor-pointer'>TODO</h1>
      <span className="toggle-btn self-center cursor-pointer hover:bg-[rgba(10,10,10,0.2)] p-1 rounded-full active:scale-95">
        <p className='dark:hidden'>
          <img src="./src/assets/icon-moon.svg" alt="dark mode icon" onClick={setDarkMode} />
        </p>
        <p className='hidden dark:block'>
          <img src="./src/assets/icon-sun.svg" alt="light mode icon" onClick={setLightMode} />
        </p>
      </span>
    </header>
  )
}

export default Header