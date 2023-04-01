import { ADD_TODO, GET_TODOS, TOGGLE_TODO, DELETE_TODO } from "./ActionType";

export const todoReducer=(state=[],action)=>{
switch(action.type){
   case ADD_TODO:
    return [...state,action.payload]
   case GET_TODOS:
    return action.payload
    case TOGGLE_TODO:
        return state.map(ele =>(  
            ele._id === action.payload._id ? {...ele, done: !ele.done} : ele
        ))
    case DELETE_TODO:
        return state.filter(ele=>ele._id !== action.payload._id)
    default:
        return state;
}
}