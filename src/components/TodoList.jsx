import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";

export default function  TodoList({todos,setTodos}) {
  return (
    <div className={styles.list} >
      {todos.map((item) => (
        // console.log("Hi ITEM",item)
        <TodoItem key={item} item={item} todos={todos} setTodos={setTodos}/>
      ))}
    </div>
  );
}
