import React from 'react'

function Header() {
  return (
    <header className='flex justify-between align-middle md:mt-4 md:mb-4'>
      <h1 className='text-[2.4em] font-bold tracking-[10px] text-white'>TODO</h1>
      <span className="toggle-btn self-center">
        <p className='dark:hidden'>
          <img src="./src/assets/icon-moon.svg" alt="dark mode icon" />
        </p>
        <p className='hidden dark:block'>
          <img src="./src/assets/icon-sun.svg" alt="light mode icon" />
        </p>
      </span>
    </header>
  )
}

export default Header