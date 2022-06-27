import React, { useEffect, useState } from "react";
import { STATUS_ENUM } from "../../App";
import ColumnComp from "./subcomps/ColumnComp/ColumnComp";

type Props = {
  allTasks: any;
};

const AllTasks = (props: Props) => {
  const { allTasks } = props;
  return (
    <div>
      {STATUS_ENUM.map((x: string) => {
        let newTasksArray = allTasks.filter((y: any) => y.status === x);
        return <ColumnComp tasks={newTasksArray} header={x} key={x} />;
      })}
    </div>
  );

  return <h1>All Tasks</h1>;
};

export default AllTasks;
