import React from 'react'
import { BsTrash } from "react-icons/bs";

const Todo = ({todo}) => {
  return (
    <li className='flex justify-between border w-[400px] bg-slate-300 mt-2 p-3 m-auto text-center rounded-md items-center'>
        <div className=''>{todo.data}</div>
        <div className='cursor-pointer flex '>
        <BsTrash/>
        </div>
    </li>
  )
}

export default Todo