interface InputProps{
  newTodo: string,
  setNewTodo: (newValue: string) => void;
}

const Input: React.FC<InputProps> = ({newTodo, setNewTodo}) => {
  console.log(newTodo)
  return (
    <div className='flex p-2 bg-white dark:bg-[#34414a] rounded-md mt-2'>
      <span className='text-3xl mx-2 text-[#d9e1ea] dark:text-[#475c68]'>○</span>
      
      <input 
        type="text" 
        placeholder='Create a new todo...'
        className=' ml-2 w-11/12 outline-none border-none bg-transparent dark:text-white'
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      {/* <img src="./src/assets/icon-cross.svg" alt="delete icon" /> */}
    </div>
  )
}

export default Input