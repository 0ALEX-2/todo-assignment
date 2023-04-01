import express from "express"
//import { getAllTodos } from "../../todo-app/src/Redux/Action.js"
import { addTodoController,deleteTodoController,getAllTodosController, toggleTodoController  } from "../Controllers.js"

const route=express.Router()

route.post('/todos',addTodoController)
route.get('/todos',getAllTodosController)
route.get('/todos/:id',toggleTodoController)
route.delete('/todos/:id', deleteTodoController)

export default route