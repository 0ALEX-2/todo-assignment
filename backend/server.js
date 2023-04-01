import express from "express"
import connectDB from "./Config/db.js"
import cors from "cors"
import dotenv from "dotenv"
import route from "./Routes/route.js"

//config env
dotenv.config()

const app=express()

//Database config
connectDB()

//middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/",route)



//To secure the app we can import port number from env file.
//const PORT=process.env.PORT

const PORT=process.env.PORT || 8000

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})