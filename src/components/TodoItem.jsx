import styles from "./todoitem.module.css";

export default function TodoItem({ item }) {
    return (
      <div className={styles.itemcontainer}>
        <input type="radio"/>
        <span>{item}</span>
      </div>
    );
}
