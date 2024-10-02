import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos = { todos }, setTodos = { setTodos } }) {
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }
  return (
    <div>
      <form className={styles.todoForm} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <input
            className={styles.inputField}
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
            type="text"
            placeholder="Enter Todo item..."
          />
          <button className={styles.submitButton} type="submit">
            {" "}
            Add{" "}
          </button>
        </div>
      </form>
    </div>
  );
}
