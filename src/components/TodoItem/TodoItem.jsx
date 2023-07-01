import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import styles from "./TodoItem.module.css";

const TodoItem = ({ item, onUpdate, onDelete }) => {
  const { id, text, status } = item;
  const handleChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...item, status });
  };

  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id={id}
        checked={status === "completed"}
        onChange={handleChange}
      />
      <label className={styles.text} htmlFor={id}>
        {text}
      </label>
      <span className={styles.icon}>
        <button className={styles.button} onClick={() => onDelete(item.id)}>
          <FaTrashAlt />
        </button>
      </span>
    </li>
  );
};

export default TodoItem;
