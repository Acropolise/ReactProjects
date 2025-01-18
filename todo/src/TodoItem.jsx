export function TodoItem(isCompleted, id, title) {
    return (        
    <li>
        <label>
          <input
            type="checkbox"
            checked={isCompleted}
          //   onChange={(e) => toggleTodo(id, e.target.checked)}
          />

          {title}
        </label>
        <button
          // onClick={() => deleteToDo(id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </li>
      )
}