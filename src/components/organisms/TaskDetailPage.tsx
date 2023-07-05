import React from "react";
import { useLocation } from "react-router-dom";
import TaskDetail from "../molecules/TaskDetail";

function TaskDetailPage() {
  const { state } = useLocation();

  return (
    <div>
      <TaskDetail item={state} />
    </div>
  );
}

export default TaskDetailPage;
