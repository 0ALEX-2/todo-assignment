import { ADD_TODO, GET_TODOS } from "./ActionType";

export const todoReducer=(state=[],action)=>{
switch(action.type){
   case ADD_TODO:
    return [...state,action.payload]
   case GET_TODOS:
    return action.payload
    default:
        return state;
}
}