import React from "react";
import { BsTrash } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";
import { deleteTodo, toggleTodo } from "../Redux/Action";
import { useDispatch } from "react-redux";
import { Draggable } from "react-beautiful-dnd";

const Todo = ({ todo, index }) => {
  const dispatch = useDispatch();
  // const done=useSelector((state)=>state.todos.done)
  //console.log(done);
  return (
    <>
      <Draggable draggableId={todo._id} index={index}>
        {(provided) => ( 
          <li className="flex justify-between border w-[400px] bg-slate-300 mt-2 p-3 m-auto text-center rounded-md items-center text-2xl" 
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          >
            {todo.done ? (
              <div className="line-through text-blue-600">{todo.data}</div>
            ) : (
              <div className="text-red-600">{todo.data}</div>
            )}
            <div className="flex gap-[5px] ">
              <div onClick={() => dispatch(toggleTodo(todo._id))}>
                {todo.done ? (
                  <TiTick className="cursor-pointer text-blue-700" />
                ) : (
                  <RxCross2 className="cursor-pointer text-red-700" />
                )}
              </div>

              <div onClick={() => dispatch(deleteTodo(todo._id))}>
                <BsTrash className="cursor-pointer " />
              </div>
            </div>
          </li>
        )}
      </Draggable>
    </>
  );
};

export default Todo;
