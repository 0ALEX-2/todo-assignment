import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../Redux/Action";
import Todo from "./Todo";

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
      <div className="border p-[10px] rounded-lg w-fit m-auto">
        <span className="text-[25px] font-bold text-blue-600">Active Todos</span>

        {todos && todos.map((ele) => <Todo todo={ele} key={ele._id} />)}
      </div>

      {/* Completed Todos */}
      <div className="mt-5 lg:mt-0 border p-[10px] rounded-lg w-fit m-auto">
        <span className="text-[25px] font-bold text-red-600">Completed Todos</span>
        {todos && todos.map((ele) => <Todo todo={ele} key={ele._id} />)}
      </div>
    </div>
  );
};

export default DisplayTodos;
