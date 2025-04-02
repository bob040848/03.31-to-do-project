import React from "react";

export const ClearCompleted = (todoList, setTodoList) => {
  const completedCount = todoList.filter((todo) => todo.isCompleted).length;

  const clearCompleted = () => {
    setTodoList(todoList.filter((todo) => !todo.isCompleted));
  };
  return (
    <div>
      <p>
        {completedCount} of {todoList.length} tasks completed
      </p>
      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  );
};
