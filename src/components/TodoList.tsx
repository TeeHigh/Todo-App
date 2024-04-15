import { ReactSortable } from "react-sortablejs"
import TodoListItems from "./TodoListItems";

interface TodoListProps{
  navLinks: string[],
  todoList: {
    id: string|number,
    newTodo: string,
    completed: boolean
  }[],
  setTodoList: () => void;
}

const TodoList: React.FC<TodoListProps> = ({navLinks, todoList, setTodoList}) => {
  return (
    <div className="bg-slate-400 dark:bg-[#34414a] rounded-md mb-8 " >
      <div className="bg-white dark:bg-[#34414a] items-center align-middle  justify-center border-b-2 dark:border-b-slate-600">
        {
          todoList 
          ?
          <TodoListItems todoList={todoList} setTodoList={setTodoList}/>
          :
          <p className="h-12">You don't have any tasks</p>
          }
      </div>
      <span className='flex justify-between p-4 h-10 bg-white dark:bg-[#34414a] align-middle items-center rounded-b-md' >
        <p className="text-[#9394a5] hover:text-black dark:text-[#8799a8] ">X items left</p>
        <div className="gap-3 hidden md:flex">
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