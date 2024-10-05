import styles from "./todoitem.module.css";

export default function TodoItem({ item }) {
  return (
    <div className={styles.itemcontainer}>
      <input className={styles.todocheckbox} type="radio" />
      <span className={styles.todotextname}>{item}</span>
      <span> <button className={styles.deleteButton}>x</button></span>
    </div>
  );
}
