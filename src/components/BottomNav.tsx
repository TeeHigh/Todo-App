import {FC, ReactNode} from 'react'
import NavBar from './NavBar'

interface BotomNavProps{
  navLinks: string[]

}

const BottomNav: FC<BotomNavProps> = ({navLinks}) => {
  return (
    <div className='md:hidden flex p-2 bg-white dark:bg-[#34414a] rounded-md mt-2 justify-center gap-7 font-bold '>
      <NavBar navLinks={navLinks}/>
    </div>
  )
}

export default BottomNav