import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getAllTodos } from '../Redux/Action'
import Todo from './Todo'

const DisplayTodos = () => {


    const dispatch=useDispatch()
    const todos=useSelector(state=>state.todos)

    useEffect(()=>{
      dispatch(getAllTodos())
    },[])
    console.log(todos);
  return (
    <div>
        <h1>YOUR todo list</h1>

        <div>
            <ul>
                {
                    todos && todos.map(ele=>(
                       <Todo
                       todo={ele}
                       key={ele._id}
                       />
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default DisplayTodos