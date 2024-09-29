import { useState } from "react";

export function Todo() {
    const [todo , setTodo] = useState(todo);
  return (
    <div>
      <form>
        <input value = {"Hello"} type = "text" />
        <button type = "submit"> Add </button>
      </form>
    </div>
  );
}
