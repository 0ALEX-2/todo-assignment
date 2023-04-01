import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../Redux/Action";
import Todo from "./Todo";
import { Droppable } from "react-beautiful-dnd";

const DisplayTodos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);


  useEffect(() => {
    dispatch(getAllTodos());
  }, []);
  //console.log(todos);
  return (
    <div className="lg:flex lg:justify-evenly mt-[60px] pb-[100px]">

      {/* Active Todos */}
      <Droppable droppableId="TodosList">
        {(provided) => ( 
          <div
            className="border p-[10px] rounded-lg w-fit m-auto"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="text-[25px] font-bold text-blue-600">
              Active Todos
            </span>

            {todos && todos.map((ele,index) => <Todo todo={ele} key={ele._id} index={index}/>)}
          </div>
        )}
      </Droppable>

      {/* Completed Todos  */}
      <Droppable droppableId="TodosCompleted">
        {(provided) => ( 
          <div
            className="mt-5 lg:mt-0 border p-[10px] rounded-lg w-fit m-auto"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="text-[25px] font-bold text-red-600">
              Completed Todos
            </span>
            {todos && todos.map((ele,index) =>{  
               if(ele.done===true){
               return <Todo todo={ele} key={ele._id} index={index}/>
               }
              })}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default DisplayTodos;
