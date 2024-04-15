import React from "react"

interface NavBarProps{
  navLinks: string[]
}

const NavBar: React.FC<NavBarProps> = ({navLinks}) => {
  return (
    <div className='md:hidden flex p-2 bg-white dark:bg-[#34414a] rounded-md mt-2 justify-center gap-7 font-bold '>
      {
        navLinks.map((navLink) => (
          <p className='cursor-pointer text-[#9394a5] hover:text-black dark:text-[#8799a8] dark:hover:text-white' key={navLink}>{navLink}</p>
        ))
      }
    </div>
  )
}

export default NavBar
