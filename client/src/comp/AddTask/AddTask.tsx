import React, { useState } from "react";
import "./addtask.css";

type Props = {};

const AddTask = (props: Props) => {
  const [allEmployees, setAllEmployees] = useState(["Tom", "Jane", "Raj"]);
  const STATUS_ENUM = ["To-Do", "In Progress", "Completed"];
  return (
    <div>
      <form>
        <input
          placeholder="Task Title"
          type="text"
          className="p-1 m-2 inputClass"
        />
        <input
          placeholder="Task Description"
          type="text"
          className="p-1 m-2 inputClass"
        />
        <select className="p-1 m-2">
          <option value="" disabled selected>
            Assign Task To
          </option>
          {allEmployees.map((x) => (
            <option value={x}>{x}</option>
          ))}
        </select>
        <select className="p-1 m-2">
          <option value="" disabled selected>
            Status
          </option>
          {STATUS_ENUM.map((x) => (
            <option value={x}>{x}</option>
          ))}
        </select>
        <button type="submit" className="p-1 m-2">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
