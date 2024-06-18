import React from "react";
import { Select } from "../select";
import "./style.css";

export const Task = () => {
  return (
    <div className="task">
      <span className="task_date">2024-06-18</span>
      <div className="task_text_contents">
        <h3 className="task_title">タスク名</h3>
        <p clasName="task_sentence">タスクの説明</p>
      </div>
      <div className="task_input_contents">
        <Select />
      </div>
    </div>
  );
};