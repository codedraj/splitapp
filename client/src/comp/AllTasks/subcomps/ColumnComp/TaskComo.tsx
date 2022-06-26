import React from "react";

type Props = {};

const TaskComo = (props: Props) => {
  const styleComp = {};
  return (
    <div
      style={{
        width: "70%",
        textAlign: "center",
        backgroundColor: "lightgray",
      }}
      className="p-3 m-3"
      draggable
    >
      TaskComo
    </div>
  );
};

export default TaskComo;
