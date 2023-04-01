import mongoose from "mongoose"

const connectDB=async ()=>{

    //for security purpose it is not safe to use confidential url, we should use .env 
    // const URI='mongodb://sakilahmed965:shakiltodoapp123@ac-mtx2wf6-shard-00-00.qapjxpm.mongodb.net:27017,ac-mtx2wf6-shard-00-01.qapjxpm.mongodb.net:27017,ac-mtx2wf6-shard-00-02.qapjxpm.mongodb.net:27017/todoApp?replicaSet=atlas-116cc3-shard-0&ssl=true&authSource=admin'
    
    try {
        const connect=await mongoose.connect(process.env.MONGO_URI)
        console.log(`Connected to MongoDB database ${connect.connection.host}`)
    } catch (error) {
        console.log(`Error in MongoDB ${error}`);
    }
}

export default connectDB