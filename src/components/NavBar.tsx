import React from "react"

interface NavBarProps {
  navLinks: string[],
  currentTab: string,
  setCurrentTab: (newValue: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ navLinks, setCurrentTab, currentTab }) => {
  return (
    <>
      {
        navLinks.map((navLink) => (
          <p key={navLink} onClick={() => setCurrentTab(navLink.toLowerCase())} className={`cursor-pointer  ${currentTab === navLink.toLowerCase() ? 'text-blue' : 'text-[#9394a5] hover:text-black dark:text-[#8799a8] dark:hover:text-white' } `} >
            {navLink}
          </p>
        ))
      }
    </>
  )
}

export default NavBar
