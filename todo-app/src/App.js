import "./App.css";
import AddTodo from "./components/AddTodo";
import DisplayTodos from "./components/DisplayTodos";
import { DragDropContext } from "react-beautiful-dnd";

function App() {
  return (
    <DragDropContext onDragEnd={()=>{}}>
      <div className="App mt-8">
        <h1 className="text-4xl underline underline-offset-4 font-sans font-bold text-slate-600">Todo App</h1>
        <AddTodo />
        <DisplayTodos />
      </div>
    </DragDropContext>
  );
}

export default App;
