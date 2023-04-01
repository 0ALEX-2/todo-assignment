
import './App.css';
import AddTodo from './components/AddTodo';
import DisplayTodos from './components/DisplayTodos';

function App() {
  return (
    <div className="App">
     <h1 className='text-4xl underline underline-offset-4'>Todo App</h1>
<AddTodo/>
<DisplayTodos/>
    </div>
  );
}

export default App;
