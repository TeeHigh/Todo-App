import React from "react"

interface NavBarProps{
  navLinks: string[]
}

const NavBar: React.FC<NavBarProps> = ({navLinks}) => {
  return (
    <>
      {
        navLinks.map((navLink) => (
          <p className='cursor-pointer text-[#9394a5] hover:text-black dark:text-[#8799a8] dark:hover:text-white' key={navLink}>{navLink}</p>
        ))
      }
    </>
  )
}

export default NavBar
