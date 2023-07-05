import React from "react";

import "./TaskDetail.scss";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../atoms/Button";

interface TaskDetailProp {
  item: {
    id: number;
    task: string;
    details: string;
    packed: boolean;
  };
}

function TaskDetail({ item }: TaskDetailProp) {
  const navigate = useNavigate();

  return (
    <div className="task-detail">
      <Button onClick={() => navigate("..")}>Go back</Button>
      <h3 className="task-detail__heading">Task: {item.task}</h3>
      <p className="task-detail__description">Details: {item.details}</p>
    </div>
  );
}

export default TaskDetail;
