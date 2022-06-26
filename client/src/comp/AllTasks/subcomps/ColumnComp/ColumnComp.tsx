import React from "react";
import TaskComo from "./TaskComo";

type Props = {
  header: string;
};

const ColumnComp = (props: Props) => {
  const styleObj = {
    flex: 1,

    backgroundColor: "lightcoral",
    border: "1px solid white",
    height: "100%",
  };
  return (
    <div
      style={styleObj}
      className="mt-2 d-flex flex-column align-items-center"
    >
      <h1 className="mt-5">{props.header}</h1>
      <TaskComo />
      <TaskComo />
      <TaskComo />
      <TaskComo />
      <TaskComo />
      <TaskComo />
    </div>
  );
};

export default ColumnComp;
