import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Split from "react-split";
import AddTask from "./comp/AddTask/AddTask";
import ColumnComp from "./comp/AllTasks/subcomps/ColumnComp/ColumnComp";
const STATUS_ENUM = ["To-Do", "In Progress", "Completed"];
function App() {
  return (
    <div className="App">
      <Split className="split" id="w-b" direction="vertical" sizes={[50, 50]}>
        <Split className="split-two" sizes={[30, 70]}>
          <div
            id="left-top"
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <AddTask />
          </div>
          <div
            style={{
              border: "1px solid black",
            }}
            className="d-flex flex-row justify-content-center align-items-center"
          >
            {STATUS_ENUM.map((x) => (
              <ColumnComp key={x} header={x} />
            ))}
          </div>
        </Split>
        <div>hello</div>
      </Split>
    </div>
  );
}
export default App;
