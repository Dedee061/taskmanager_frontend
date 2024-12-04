import React, { useState } from "react";
import CustomIput from "./CustomInput";
import "./AddTask.scss";
import CustomButton from "./CustomButton";

export default function AddTask() {
  const [task, setTask] = useState("");
  const onChange = (e) => {
    setTask(e.target.value);
  };
  return (
    <div className="add-task-container">
      <CustomIput
        label="Adicionar Nova Tarefa..."
        value={task}
        onChange={onChange}
      />
      <CustomButton>+</CustomButton>
    </div>
  );
}
