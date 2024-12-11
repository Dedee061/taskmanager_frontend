import React from "react";
import "./TaskItem.scss";

import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import { useAlert } from "react-alert";

export default function TaskItem({ task }) {
  const alert = useAlert();

  async function handlerDeleteTasks() {
    try {
      await axios.delete(`http://localhost:8000/tasks/${task._id}`);
    } catch (err) {
      alert.error("algo deu errado");
      console.log(err);
    }
  }

  return (
    <>
      <div className="task-item-container">
        <div className="task-description">
          <label
            className={
              task.isCompleted
                ? "checkbox-container-completed"
                : "checkbox-container"
            }
          >
            {task.description}
            <input type="checkbox" defaultChecked={task.isCompleted} />
            <span
              className={task.isCompleted ? "checkmark completed" : "checkmark"}
            ></span>
          </label>
        </div>
        <div className="delete">
          <AiFillDelete
            size={18}
            color="#f97474"
            onClick={handlerDeleteTasks}
          />
        </div>
      </div>
    </>
  );
}
