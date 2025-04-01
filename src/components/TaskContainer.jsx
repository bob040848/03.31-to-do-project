import React from "react";
import style from "@/styles/task-container.module.css";
import { useState } from "react";
export const TaskContainer = () => {
  const [todoList, setTodoList] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [filter, setFilter] = useState("all");

  const handleTaskAdd = (e) => {
    e.preventDefault();

    if (!userInput) {
      alert("Please enter a task");
      return;
    }

    const newTask = {
      id: Date.now(),
      title: userInput,
      isCompleted: false,
    };

    setTodoList([...todoList, newTask]);

    setUserInput("");
  };

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const toggleTask = (todoId) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const removeTask = (todoId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (confirmDelete) {
      setTodoList(todoList.filter((todo) => todo.id !== todoId));
    }
  };

  const clearCompleted = () => {
    setTodoList(todoList.filter((todo) => !todo.isCompleted));
  };

  const filteredTasks = todoList.filter((todo) => {
    if (filter === "active") return !todo.isCompleted;
    if (filter === "completed") return todo.isCompleted;
    return true;
  });

  const completedCount = todoList.filter((todo) => todo.isCompleted).length;

  // const handleDelete = (id) => {
  //   const updatedArr = todoList.filter((todo) => todo.id !== id);

  //   setTodoList(updatedArr);
  // };

  return (
    <div className={style.taskContainer}>
      <h1>To-Do List </h1>
      <form>
        <input
          type="text"
          value={userInput}
          placeholder="Add a new task"
          maxLength={50}
          onChange={handleChange}
        />
        <button onClick={handleTaskAdd}>Add</button>
      </form>

      <div className={style.buttonsContainer}>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>

      {filteredTasks.length === 0 ? (
        <p>No tasks yet. Add one above!</p>
      ) : (
        <ul style={{ listStyle: "none" }}>
          {filteredTasks.map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={() => toggleTask(todo.id)}
              />

              <span
                style={{
                  textDecoration: todo.isCompleted ? "line-through" : "none",
                  marginLeft: "10px",
                }}
              >
                {todo.title}
              </span>

              <button onClick={() => removeTask(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
      <div>
        <p>
          {completedCount} of {todoList.length} tasks completed
        </p>
        <button onClick={clearCompleted}>Clear Completed</button>
      </div>
      {/* <ul>
        {todoList.length >= 1
          ? todoList.map(({ title, id, isCompleted }, index) => {
              return (
                <li
                  key={index}
                  className={todoList.isCompleted ? "completed" : ""}
                >
                  <input type="checkbox" name="" id="" />
                  {title}
                  <button
                    onClick={() => {
                      handleDelete(id);
                    }}
                  >
                    Delete
                  </button>
                </li>
              );
            })
          : ""}
      </ul> */}
    </div>
  );
};
