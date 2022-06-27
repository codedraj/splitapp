import React from "react";
import "./taskComp.css";
type Props = {
  task: any;
  onClick: any;
};

const TaskComo = (props: Props) => {
  const styleComp = {
    spanStyle: {
      display: "block",
    },
    spanStyleName: {
      display: "block",
    },
  };
  return (
    <div
      id="container"
      style={{
        width: "70%",
        textAlign: "center",
      }}
      className="task p-3 m-3"
      draggable
      onClick={props.onClick}
    >
      <span className="task" style={styleComp.spanStyleName}>
        {props.task.userName}
      </span>
      <span className="task" style={styleComp.spanStyle}>
        Task : {props.task.title}
      </span>
    </div>
  );
};

export default TaskComo;
