import React from "react";
import style from "@/styles/task-container.module.css";
import { useState } from "react";
export const TaskContainer = () => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();

    setUserInput(e.target.value);
    console.log(userInput);
  };
  return (
    <div className={style.taskContainer}>
      <h1>To-Do List </h1>
      <form>
        <input
          type="text"
          placeholder="Add a new task"
          maxLength={50}
          onChange={handleChange}
        />
        <button>Add</button>
      </form>
    </div>
  );
};
