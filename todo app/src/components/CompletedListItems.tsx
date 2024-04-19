import { FC } from 'react'

interface CompletedListItemsProps {
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

const CompletedListItems: FC<CompletedListItemsProps> = ({ todoList, setTodoList, deleteTodoItem }) => {

  function markComplete(id: string | number) {
    setTodoList(
      (item) => item.map((listItem) => (
        listItem.id === id ? { ...listItem, completed: !listItem.completed } : listItem
      ))
    )
  }

  return (
    <div>
      {
        todoList.map((item) => item.completed).length === 0 ?
          <p className="py-4 text-[#62636d] dark:text-[#fafafa]">
            You don't have any completed tasks
          </p>
          :
          todoList.filter((item) => item.completed).map((task) => (
            <div key={task.id} className="flex px-2 pr-4 py-4 dark:bg-[#25273c] lg:py-5 border-b-2 dark:border-b-slate-600 cursor-default items-center">
              <div className="h-6 w-6 p-[0.5px] rounded-full mx-2 bg-[#d9e1ea] dark:bg-transparent dark:border-[#475c68] dark:border-2 dark:hover:border-0 hover:bg-gradient-to-tr from-[#57ddff] to-[#c058f3] dark:p-[0.1px] flex items-center justify-center">
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
              <p
                className={` ml-2 ${task.completed ? 'line-through text-[#d2d3db] dark:text-[#9394a5]' : 'dark:text-[#e4e5f1]'}`}
              >
                {task.newTodo}
              </p>
              <div className="cursor-pointer ml-auto h-5 w-5" onClick={() => deleteTodoItem(task.id)}>
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
    </div>
  )
}

export default CompletedListItems
