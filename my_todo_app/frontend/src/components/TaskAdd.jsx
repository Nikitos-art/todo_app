import React, { useState } from "react";



function TaskForm() {
  const [task, setTask] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      task: task,
      details: details
    };

    fetch("http://127.0.0.1:8000/api/tasks/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    })
      .then((response) => response.json())
      .then(() => {
        setTask("");
        setDetails("");
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="form-input">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task"
          maxLength={22}
          required
        />
        <input
          type="text"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="Enter details"
          maxLength={22}
          required
        />
        <button className="add-button" type="submit">Add Task</button>
      </form>
    </div>
    );
}

export default TaskForm;
