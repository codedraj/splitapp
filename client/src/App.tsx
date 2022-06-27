import React, { createContext, useState } from "react";
import "./App.css";
import Split from "react-split";
import AddTask from "./comp/AddTask/AddTask";

import getAllTasksApi from "./comp/AllTasks/getAllTasksAPI";

import { useQuery } from "react-query";
import TaskComo from "./comp/AllTasks/subcomps/ColumnComp/TaskComo";

import MyVerticallyCenteredModal from "./comp/ModalComp/ModalComp";
import { Args } from "./comp/EditTask/editTaskAPI";

export const AppContext = createContext({});
export const STATUS_ENUM = ["To-Do", "In Progress", "Completed"];
const styleObj = {
  flex: 1,
  height: "100%",
};
function App() {
  const [allEmployees, setAllEmployees] = useState(["Tom", "Jane", "Raj"]);
  const [counter, setCounter] = useState(0);
  const [taskForEdit, setTaskForEdit] = useState({});
  const [allTasks, setAllTasks]: any = useState([]);
  const [modalShow, setModalShow] = React.useState(false);

  const { data, error, isLoading, refetch } = useQuery(
    "tasks",
    getAllTasksApi,
    {
      onSuccess: (data) => {
        setAllTasks(data.results);
        console.log(allTasks);
      },
      retry: false,
      refetchOnWindowFocus: false,
    }
  );
  const handleUpdateClick = (x: Args) => {
    console.log(x);
    setTaskForEdit(x);
    setModalShow(true);
  };

  if (error) return <h1>Something Went Wrong</h1>;
  if (isLoading) return <h1>Loading.......</h1>;

  return (
    <AppContext.Provider
      value={{
        allEmployees,
        setAllEmployees,
        STATUS_ENUM,
        refetch,
        counter,
        setCounter,
      }}
    >
      <div className="App">
        <Split className="split" id="w-b" direction="vertical" sizes={[50, 50]}>
          <Split className="split-two" sizes={[30, 70]}>
            <div
              id="left-top"
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <AddTask />

              {modalShow && (
                <MyVerticallyCenteredModal
                  task={taskForEdit}
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              )}
            </div>
            <div className="d-flex flex-row justify-content-center align-items-center">
              <div
                style={styleObj}
                className="mt-2 d-flex flex-column align-items-center overflow-scroll"
              >
                <h1 className="pt-5 ">{STATUS_ENUM[0]}</h1>

                {data ? (
                  allTasks.map((x: any, i: number) => {
                    if (x.status === STATUS_ENUM[0]) {
                      return (
                        <TaskComo
                          onClick={() => {
                            handleUpdateClick(x);
                          }}
                          task={x}
                          key={i}
                        />
                      );
                    }
                  })
                ) : (
                  <h1>No Tasks</h1>
                )}
              </div>
              <div
                style={styleObj}
                className="mt-2 d-flex flex-column align-items-center overflow-scroll"
              >
                <h1 className="mt-5">{STATUS_ENUM[1]}</h1>
                {data ? (
                  allTasks.map((x: any, i: number) => {
                    if (x.status === STATUS_ENUM[1]) {
                      return (
                        <TaskComo
                          onClick={(x: Args) => {
                            handleUpdateClick(x);
                          }}
                          task={x}
                          key={i}
                        />
                      );
                    }
                  })
                ) : (
                  <h1>No Tasks</h1>
                )}
              </div>
              <div
                style={styleObj}
                className="mt-2 d-flex flex-column align-items-center overflow-scroll"
              >
                <h1 className="mt-5">{STATUS_ENUM[2]}</h1>
                {data ? (
                  allTasks.map((x: any, i: number) => {
                    if (x.status === STATUS_ENUM[2]) {
                      return (
                        <TaskComo
                          onClick={(x: Args) => {
                            handleUpdateClick(x);
                          }}
                          task={x}
                          key={i}
                        />
                      );
                    }
                  })
                ) : (
                  <h1>No Tasks</h1>
                )}
              </div>
            </div>
          </Split>
          <div className="mt-2 d-flex flex-column justify-content-center align-items-center overflow-scroll">
            <h1
              style={{
                fontSize: "5vw",
              }}
            >
              Add and Update Counter
            </h1>
            <h1
              style={{
                fontSize: "10rem",
              }}
            >
              {counter}
            </h1>
          </div>
        </Split>
      </div>
    </AppContext.Provider>
  );
}
export default App;
