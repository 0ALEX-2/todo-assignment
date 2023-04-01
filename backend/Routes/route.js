import express from "express"
//import { getAllTodos } from "../../todo-app/src/Redux/Action.js"
import { addTodoController,getAllTodos  } from "../Controllers.js"

const route=express.Router()

route.post('/todos',addTodoController)
route.get('/todos',getAllTodos)


export default route