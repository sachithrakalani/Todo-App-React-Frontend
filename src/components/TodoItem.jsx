import { useState } from "react";
import styles from "./todoitem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  const [isChecked, setIsChecked] = useState(false);
  function handleDelete(item) {
    console.log("Press Delete Button", item);
    setTodos(todos.filter((todo) => todo !== item));
  }

  function handleClicked() {
    setIsChecked(!isChecked);
  }

  return (
    <div className={styles.itemcontainer}>
      <input
        className={styles.todocheckbox}
        type="radio"
        checked={isChecked}
        onClick={handleClicked}
      />
      <span
        className={`${styles.todotextname} ${
          isChecked ? styles.strikethrough : ""
        }`}
      >
        {item}
      </span>
      <span>
        {" "}
        <button
          onClick={() => handleDelete(item)}
          className={styles.deleteButton}
        >
          x
        </button>
      </span>
    </div>
  );
}



