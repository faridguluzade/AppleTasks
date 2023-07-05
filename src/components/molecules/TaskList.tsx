import React, { FormEvent, useState } from "react";
import TaskItem from "../atoms/TaskItem";
import { useNavigate } from "react-router-dom";

import "./TaskList.scss";
import { toast } from "react-toastify";
import Button from "../atoms/Button";

const DUMMY_TASK = [
  {
    id: 1,
    task: "Add LoginPage",
    details: "User can enter their username and password to log in",
    packed: false,
  },
  {
    id: 2,
    task: "Add RegisterPage",
    details: " New users can register by providing a username and password.",
    packed: false,
  },
];

function TaskList() {
  const [items, setItems] = useState(DUMMY_TASK);
  const [task, setTask] = useState("");
  const [details, setDetails] = useState("");

  function handleDeleteItem(id: number) {
    setItems((items) => items.filter((item) => item.id !== id));
    toast.success(`Item successfully removed`);
  }

  function handleToggleItem(id: number) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleAddItems(item: any) {
    setItems((items) => [...items, item]);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!details || !task) {
      toast.warning("Enter valid value!");
      return;
    }

    const newItem = {
      task,
      details,
      packed: false,
      id: Date.now(),
    };
    handleAddItems(newItem);

    setTask("");
    setDetails("");
  }

  return (
    <div className="tasks">
      <form onSubmit={handleSubmit} className="tasks__form">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <textarea
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          cols={30}
          rows={10}
        ></textarea>
        <Button onClick={() => {}}>Add Item</Button>
      </form>
      <ul className="tasks__list">
        {items.map((item) => (
          <TaskItem
            key={item.id}
            item={item}
            onDeleteItem={handleDeleteItem}
            onToggleItem={handleToggleItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
