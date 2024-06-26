import React from "react";

interface InputProps{
  newTodo: string,
  setNewTodo: (newValue: string) => void;
  handleEnter: React.KeyboardEventHandler<HTMLInputElement>;
  handleClick: () => void;
}

const Input: React.FC<InputProps> = ({newTodo, setNewTodo, handleEnter, handleClick}) => {
  return (
    <div className='flex px-2 py-3 bg-white dark:bg-[#25273c] rounded-md mt-2 mb-4 lg:mb-8 lg:py-5 '>
      <div 
        className="h-6 w-6 bg-transparent border-[#d9e1ea] dark:border-[#475c68] dark:hover:border-[#a7abae] border-2 rounded-full flex items-center justify-center mx-2 cursor-pointer"
        onClick={handleClick}
      >
        
      </div>
      
      <input 
        type="text" 
        placeholder='Create a new todo...'
        className=' ml-2 w-11/12 outline-none border-none bg-transparent dark:text-white'
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={handleEnter}
      />
      
    </div>
  )
}

export default Input