import { TodoItem } from "./TodoItem";

export function TodoList(todos) {
  return ( <ul className="list">
    {todos.length === 0 && "The list is empty!"}
    {todos.map((todo) => {
      return (
        <TodoItem id ={todo.id}
         isCompleted = {todo.isCompleted}
         title = {todo.title}
         key = {todo.key} />
      )
    })}
  </ul>
  )
}