import React from "react";
import TaskComo from "./TaskComo";

type Props = {
  header: string;
  tasks: any;
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
      {props.tasks.map((x: any) => {
        return <h1>hello</h1>;
      })}
    </div>
  );
};

export default ColumnComp;
