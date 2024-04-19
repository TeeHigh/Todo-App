import { ReactSortable } from "react-sortablejs"

interface TodoListItemsProps {
  todoList: {
    id: string | number,
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

const darkMode = localStorage.getItem('theme') === 'dark' ? true : false

const TodoListItems: React.FC<TodoListItemsProps> = ({ todoList, setTodoList, deleteTodoItem }) => {

  function markComplete(id: string | number) {
    setTodoList(
      (prev) => prev.map((listItem) => (
        listItem.id === id ? { ...listItem, completed: !listItem.completed } : listItem
      ))
    )
  }

  return (
    <ReactSortable list={todoList} setList={setTodoList} animation={150} >
      {todoList.map((task) => (
        <div key={task.id} className="flex px-2 pr-4 py-4 dark:bg-[#25273c] lg:py-5 border-b-2 dark:border-b-slate-600 cursor-grab items-center">

          {/* Check button */}
          <div 
            className="h-[25px] w-[25px] p-[0.5px] rounded-full mx-2 bg-[#d9e1ea] dark:bg-transparent dark:border-[#475c68] dark:border-2 dark:hover:border-0 hover:bg-gradient-to-tr from-[#57ddff] to-[#c058f3] dark:p-[0.1px] flex items-center justify-center"
          >
            <div
              className={`h-[90%] w-[90%] bg-white dark:bg-[#25273c] rounded-full flex items-center justify-center cursor-pointer ${task.completed ? 'bg-gradient-to-tr from-[#57ddff] to-[#c058f3] ' : ''} `}
              onClick={() => markComplete(task.id)}
            >
              {task.completed === true &&
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9" className="">
                  <path fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6" />
                </svg>
              }
            </div>
          </div>

          {/*Todo list items text */}
          <div className={`w-9/12 ml-2 `}>
            <p
              className={`w-fit text-wrap text-left cursor-pointer ${task.completed ? 'line-through text-[#d2d3db] dark:text-[#9394a5]' : 'dark:text-[#e4e5f1]'}`}
              onClick={() => markComplete(task.id)}
            >
              {task.newTodo}
            </p>
          </div>

          {/*Delete Icon */}
          <div className={`cursor-pointer ml-auto h-5 w-5`} onClick={() => deleteTodoItem(task.id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
            >
              <path
                fill={darkMode ? '#606c80' : '#9394a5'}
                fillRule="evenodd"
                d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
              />
            </svg>
          </div>
        </div>)
      )}
    </ReactSortable>
  )
}

export default TodoListItems

// border-[#d9e1ea] dark:border-[#475c68] hover:border-l-[#57ddff] hover:border-b-[#57ddff] hover:border-r-[#c058f3] hover:border-t-[#c058f3] border-2