import React, { useContext, useState } from "react";
import { ArrayBindingOrAssignmentPattern } from "typescript";
import { AppContext } from "../../App";
import { Args } from "../AddTask/addTaskAPI";
import getAllTasksApi from "../AllTasks/getAllTasksAPI";
import "./edittask.css";
import editTaskAPI, { Args as ArgsState } from "./editTaskAPI";

type Props = {
  task: {
    title: string;
    description: string;
    status: string;
    userName: string;
    _id: string;
  };
};

const EditTask = (props: Props) => {
  const { task } = props;
  const [inputs, setInputs] = useState<Args>({
    title: task.title,
    description: task.description,
    status: task.status,
    userName: task.userName,
  });

  const {
    allEmployees,
    setAllEmployees,
    STATUS_ENUM,
    refetch,
    counter,
    setCounter,
  }: any = useContext(AppContext);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (data: ArgsState) => {
    const responseData = await editTaskAPI(data);
    if (responseData.responseBool) {
      setCounter((prev: number) => prev + 1);
      refetch();
    }
    refetch();
  };

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          let args = {
            title: inputs.title,
            description: inputs.description,
            status: inputs.status,
            userName: inputs.userName,
            _id: task._id,
          };
          await handleSubmit(args);
        }}
      >
        <input
          placeholder="Task Title"
          type="text"
          name="title"
          onChange={handleChange}
          className="p-1 m-2 inputClass"
        />
        <input
          placeholder="Task Description"
          onChange={handleChange}
          type="text"
          name="description"
          className="p-1 m-2 inputClass"
        />
        <select onChange={handleChange} name="userName" className="p-1 m-2">
          <option value="" disabled selected>
            Assign Task To
          </option>
          {allEmployees.map((x: string) => (
            <option value={x}>{x}</option>
          ))}
        </select>
        <select onChange={handleChange} name="status" className="p-1 m-2">
          <option value="" disabled selected>
            Status
          </option>
          {STATUS_ENUM.map((x: string) => (
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

export default EditTask;
