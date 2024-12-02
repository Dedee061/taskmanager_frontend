import React, { useState } from "react";
import CustomIput from "./CustomInput";
import "./AddTask.scss";

export default function AddTask() {
  const [task, setTask] = useState("");
  const onChange = (e) => {
    setTask(e.target.value);
  };
  return (
    <div className="add-task-cotainer">
      <CustomIput
        label="Adicionar Nova Tarefa..."
        value={task}
        onChange={onChange}
      />
    </div>
  );
}
