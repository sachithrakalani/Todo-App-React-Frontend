import styles from "./todoitem.module.css";

export default function TodoItem({ item }) {
  function handleDelete(item) {
    console.log("Press Delete Button", item);
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
