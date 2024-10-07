import styles from "./todoitem.module.css";

export default function TodoItem({ item , todos , setTodos }) {
  function handleDelete(item) {
    console.log("Press Delete Button", item);
    setTodos(todos.filter((todo)=> todo !== item));
  }
  return (
    <div className={styles.itemcontainer}>
      <input className={styles.todocheckbox} type="radio" />
      <span className={styles.todotextname}>{item}</span>
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
