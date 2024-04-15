import { ReactSortable } from "react-sortablejs"

interface TodoListItemsProps{
  todoList: {
    id: string|number,
    newTodo: string,
    completed: boolean
  }[],
  setTodoList: () => void;
}

const TodoListItems: React.FC<TodoListItemsProps> = ({todoList, setTodoList}) => {
  return (
    <ReactSortable list={todoList} setList={setTodoList}>
            {todoList.map((task) => (
              <div key={task.id} className="flex p-4">
                <input type="radio" name="completed" id="" className="cursor-pointer" />
                <p>{task.newTodo}</p>
              </div>)
            )}
          </ReactSortable>
  )
}

export default TodoListItems