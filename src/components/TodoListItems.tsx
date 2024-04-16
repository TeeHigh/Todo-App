import { useState } from "react";
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

const TodoListItems: React.FC<TodoListItemsProps> = ({ todoList, setTodoList, deleteTodoItem }) => {
  const [completed, setCompleted] = useState(false)

  return (
    <ReactSortable list={todoList} setList={setTodoList} delay={1} animation={200}>
      {todoList.map((task) => (
        <div key={task.id} className="flex px-2 py-4 border-b-2 dark:border-b-slate-600 cursor-grab items-center">
          <div className="h-6 w-6 mx-2 bg-transparent border-[#d9e1ea] dark:border-[#475c68] hover:border-x-[#57ddff] hover:border-y-[#c058f3] border-2 rounded-full flex items-center justify-center cursor-pointer">
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9" className="">
                    <path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6"/>
                  </svg> */}
          </div>
          <p
            className="dark:text-white ml-2"
          >
            {task.newTodo}
          </p>
          <div className="cursor-pointer ml-auto h-5 w-5" onClick={() => deleteTodoItem(task.id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              className=""
              >
              <path
                fill="#eff4f9"
                fill-rule="evenodd"
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
{/* <input 
                  type="checkbox" 
                  name="completed" 
                  id="" 
                  className="cursor-pointer mx-2 che " 
                /> */}