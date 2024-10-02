import { useState } from "react";
import styles from './form.module.css';

export default function Form({todos={todos} ,setTodos={setTodos}}) {
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }
  return (
    <div>
      <form className={styles.todoForm} onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          type="text"
        />
        <button type="submit"> Add </button>
      </form>
    </div>
  );
}
