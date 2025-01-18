import { NewTodoForm } from "./NewTodoForm";
import "./styles.css";
import { useState } from "react";
import { TodoList } from "./TodoList";

export default function App() {
  // Variables definition
  const [todos, setTodos] = useState([]);

  // Functions
  function toggleTodo(id, isCompleted) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted };
        }

        return todo;
      });
    });
  }

  function addTodo(title) {
    setTodos((currentTodos) => {
      return[
         ...currentTodos,
        {
          id: crypto.randomUUID(),
          title,
          isCompleted: false
        },
      ]
    })
  }

  function deleteToDo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  // Logic
  return (
    <>
      <NewTodoForm onSubmit={addTodo}/>

      <h1 className="header"> ToDo List</h1>
      <TodoList todos={todos}/>
    </>
  );
}
