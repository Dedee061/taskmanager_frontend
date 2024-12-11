import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Tasks.scss";
import TaskItem from "./TaskItem";
import AddTask from "./AddTask";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const fetchTask = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/tasks");
      setTasks(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTask();
  }, []);

  return (
    <div className="task-container">
      <h2>Minhas tarefas</h2>
      <div className="last-tasks">
        <h3>Ultimas Tarefas</h3>
        <AddTask fetchTask={fetchTask} />
        <div className="tasks-list">
          {tasks
            .filter((task) => task.isCompleted === false)
            .map((lastTask) => (
              <TaskItem task={lastTask} />
            ))}
        </div>
      </div>

      <div className="completed-tasks">
        <h3>Tarefas Concluidas</h3>
        <div className="tasks-list">
          {tasks
            .filter((task) => task.isCompleted)
            .map((completedTask) => (
              <TaskItem task={completedTask} />
            ))}
        </div>
      </div>
    </div>
  );
}
