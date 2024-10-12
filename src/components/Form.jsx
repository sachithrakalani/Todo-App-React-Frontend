import { useEffect, useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos = { todos }, setTodos = { setTodos } }) {
  const [todo, setTodo] = useState("");
  const [date, setDate] = useState("");

  
  function handleSubmit(e) {
    
    e.preventDefault();
    setTodos([...todos, {todo,date}]);
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
          <input className={styles.date} type="date" onChange={(e) => setDate(e.target.value)} value={date}></input>
          <button className={styles.submitButton} type="submit">
            {" "}
            Add{" "}
          </button>
        </div>
      </form>
    </div>
  );
}
