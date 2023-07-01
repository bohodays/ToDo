import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./AddTodo.module.css";

const AddTodo = ({ setTodos }) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim().length) {
      setTodos((prev) => [
        ...prev,
        { id: uuidv4(), text: todo.trim(), status: "active" },
      ]);
      setTodo("");
    }
  };

  return (
    <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
      <input
        className={styles.input}
        placeholder="Add Todo"
        type="text"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button className={styles.button}>Add</button>
    </form>
  );
};

export default AddTodo;
