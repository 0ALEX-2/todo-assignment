import axios from "axios"
import { ADD_TODO, GET_TODOS } from "./ActionType";

const url="http://localhost:8000";

export const addTodos=(data)=>async(dispatch)=>{
    try {
       const res=await axios.post(`${url}/todos`,{data}) 
       dispatch({type:ADD_TODO, payload:res.data})
    } catch (error) {
        console.log(error);
    }
}

export const getAllTodos=()=>async(dispatch)=>{
    try {
        const res=await axios.get(`${url}/todos`)
        dispatch({type:GET_TODOS, payload:res.data})
    } catch (error) {
        console.log(error);
    }
}