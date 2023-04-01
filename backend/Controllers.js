
import { todo } from "./Models.js"

export const addTodoController=async(req,res)=>{
   try {
    const newTodo=await todo.create({
        data:req.body.data,
        time:Date.now()
    })

    await newTodo.save()

   return res.status(200).json(newTodo)
   } catch (error) {
    return res.status(500).json(error.message)
   }
}

export const getAllTodosController=async(req,res)=>{
    try {
        const todos=await todo.find({}).sort({"time":-1})

        return res.status(200).json(todos)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

//Toggle Todo
export const toggleTodoController=async(req,res)=>{
    try {
        const selectedTodo=await todo.findById(req.params.id)

        const Todo=await todo.findByIdAndUpdate(
            {_id:req.params.id},
            {done:!selectedTodo.done}
        )
        await Todo.save()
        return res.status(200).json(Todo)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

// Delete Todo

export const deleteTodoController = async (req, res) => {
    try {
        const Todo = await todo.findByIdAndDelete(req.params.id)

        return res.status(200).json(Todo);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}