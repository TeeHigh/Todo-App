import {FC, ReactNode} from 'react'
// import NavBar from './NavBar'

interface BotomNavProps{
  children: ReactNode

}

const BottomNav: FC<BotomNavProps> = ({children}) => {
  return (
    <div className='md:hidden flex p-2 bg-white dark:bg-[#25273c] rounded-md mt-2 justify-center gap-7 font-bold '>
      {children}
    </div>
  )
}

export default BottomNav