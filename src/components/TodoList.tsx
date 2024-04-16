import { useState } from "react";
import TodoListItems from "./TodoListItems";

interface TodoListProps{
  navLinks: string[],
  todoList: {
    id: string|number,
    newTodo: string,
    completed: boolean
  }[],
  setTodoList: React.Dispatch<React.SetStateAction<{
    id: string | number;
    newTodo: string;
    completed: boolean;
  }[]>>,
  deleteTodoItem: (id: string | number) => void
}

const TodoList: React.FC<TodoListProps> = ({navLinks, todoList, setTodoList, deleteTodoItem}) => {
  const [remainingItems, setRemainingItems] = useState(0)

  return (
    <div className="bg-slate-400 dark:bg-[#34414a] rounded-md mb-8 " >
      <div className="bg-white dark:bg-[#34414a] items-center align-middle  justify-center border-b-2 dark:border-b-slate-600">
        {
          todoList.length === 0
          ?
          <p className="py-2 text-[#9394a5] hover:text-black dark:text-[#fafafa]">
            You don't have any tasks
          </p>
          :
          <TodoListItems todoList={todoList} setTodoList={setTodoList} deleteTodoItem={deleteTodoItem}/>
          }
      </div>
      <span className='flex justify-between p-4 h-10 bg-white dark:bg-[#34414a] align-middle items-center rounded-b-md' >
        <p className="text-[#9394a5] hover:text-black dark:text-[#8799a8] ">{todoList.length} item{todoList.length === 1 ? '' : 's'} left</p>
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