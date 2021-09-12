import { useState } from "react";
import "./App.css";
import AddToDo from "./input/AddToDo";
import ToDoList from "./todolist/ToDoList";

function App() {
  const [todos,updatetodos] = useState([]);
  const addHandler = (toDoItem) => {
    updatetodos([...todos,{id:toDoItem.id,title:toDoItem.title}]);
  }
  return (
    <div className="App">
      <header className="App-header">
        <AddToDo onAdd = {addHandler}/>
        <ToDoList todos = {todos}/>
      </header>
    </div>
  );
}

export default App;
