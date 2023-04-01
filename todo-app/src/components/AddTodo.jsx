import React, { useState } from 'react'
import { addTodos } from '../Redux/Action'
import { useDispatch } from 'react-redux'

const AddTodo = () => {
    const [todo,setTodo]=useState("")
    const dispatch=useDispatch()

    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(addTodos(todo)); 

        setTodo("");
    }
  return (
    <div>
        <form action="" className='mt-[50px]' onSubmit={handleSubmit}>
            <input type="text" value={todo} placeholder='Add todo' className='w-[400px] appearance-none border-b-2 rounded  py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline' onChange={(e)=>setTodo(e.target.value)}/>
            <input type="submit" value="ADD" className="ml-[10px] shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer text-[18px]" />
        </form>
    </div>
  )
}

export default AddTodo