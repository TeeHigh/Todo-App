interface TodoListProps{
  navLinks: string[]
}

const TodoList: React.FC<TodoListProps> = ({navLinks}) => {
  return (
    <div className="bg-red-100" >
      <span className='hidden md:flex justify-between p-6' >
        <p>X items left</p>
        <div className="flex gap-3">
          {
            navLinks.map((navLink) => (
              <p className=' cursor-pointer text-[#9394a5] hover:text-black dark:text-[#8799a8] dark:hover:text-white' key={navLink}>{navLink}</p>
            ))
          }
        </div>
        <button className="cursor-pointer text-[#9394a5] hover:text-black dark:text-[#8799a8] dark:hover:text-white">Clear completed</button>
      </span>
    </div>
  )
}

export default TodoList