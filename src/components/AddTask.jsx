import React, { useState } from "react";
import CustomIput from "./CustomInput";
import "./AddTask.scss";
import CustomButton from "./CustomButton";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import { useAlert } from "react-alert";

export default function AddTask() {
  const [task, setTask] = useState("");
  const alert = useAlert();

  const onChange = (e) => {
    setTask(e.target.value);
  };
  async function handlerAddTask() {
    try {
      if (task === "") {
        alert.error("Tarefa não pode ser vazia");
        return;
      }
      await axios
        .post("http://localhost:8000/tasks", {
          description: task,
          isCompleted: false,
        })
        .then(() => {
          alert.success("Tarefa adicionada com sucesso");
          setTask("");
        });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="add-task-container">
      <CustomIput
        label="Adicionar Nova Tarefa..."
        value={task}
        onChange={onChange}
      />
      <CustomButton onClick={handlerAddTask}>
        <FaPlus size={14} color="#fff" />
      </CustomButton>
    </div>
  );
}
