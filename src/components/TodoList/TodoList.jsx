import React, { useEffect, useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import AddTodo from "../AddTodo/AddTodo";
import styles from "./TodoList.module.css";

const TodoList = ({ filter }) => {
  // 아래와 같이 작성하면 useState가 호출될 때마다 함수를 호출해서 반환된 값을 초기값으로 전달한다.
  // 이는 함수를 계속 호출하기 때문에 문제가 있다. 따라서 두 번째와 같이 작성해야 한다. (콜백함수 활용)
  // useState는 내부적으로 값을 기억하고 있다. 그래서 콜백함수를 사용하면 useState가 초기값이 필요할때만 함수를 호출한다.
  // const [todos, setTodos] = useState(readTodosFromLocalStorage());
  const [todos, setTodos] = useState(() => readTodosFromLocalStorage());

  const handleUpdate = (updated) => {
    setTodos(todos.map((item) => (item.id === updated.id ? updated : item)));
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const filterd = getFilteredItems(todos, filter);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filterd.map((item) => (
          <TodoItem
            item={item}
            key={item.id}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo setTodos={setTodos} />
    </section>
  );
};

const getFilteredItems = (todos, filter) => {
  if (filter === "all") return todos;
  return todos.filter((item) => item.status === filter);
};

const readTodosFromLocalStorage = () => {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(localStorage.getItem("todos")) : [];
};

export default TodoList;
