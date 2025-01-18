import { useState } from "react";

export function NewTodoForm(onSubmit) {
  // Variables definition
  const [newItem, setNewItem] = useState("");

  // Functions
  function handleSubmit(e) {
    e.preventDefault();

    if (newItem !== "") {
      onSubmit(newItem);

      setNewItem("");
    }
  }

  // Logic

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>

      <button className="btn">Add</button>
    </form>
  );
}
