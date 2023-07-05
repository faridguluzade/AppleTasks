import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

import Button from "./Button";

import "./TaskItem.scss";

interface TaskItem {
  item: {
    id: number;
    task: string;
    details: string;
    packed: boolean;
  };
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
}

const TaskItem = ({ item, onDeleteItem, onToggleItem }: TaskItem) => {
  const navigate = useNavigate();

  function handleNavigateDetails(id: number) {
    navigate(`${id}`, { state: item });
  }

  return (
    <li className="task-item">
      <input type="checkbox" onChange={() => onToggleItem(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.task}
      </span>
      <Button onClick={() => onDeleteItem(item.id)}>Remove</Button>
      <Button onClick={() => handleNavigateDetails(item.id)}>Details</Button>
    </li>
  );
};

export default TaskItem;
