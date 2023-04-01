import React from 'react'

const Todo = ({todo}) => {
  return (
    <li>
        <span>{todo.data}</span>
    </li>
  )
}

export default Todo