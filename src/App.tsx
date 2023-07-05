import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import DashboardPage from "./components/organisms/DashboardPage";
import LoginPage from "./components/organisms/LoginPage";
import RegisterPage from "./components/organisms/RegisterPage";
import TaskPage from "./components/organisms/TaskPage";
import TaskDetailPage from "./components/organisms/TaskDetailPage";

import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/tasks",
    children: [
      {
        index: true,
        element: <TaskPage />,
      },
      {
        path: ":id",
        element: <TaskDetailPage />,
      },
    ],
  },
]);

const App: React.FC = () => {
  return (
    <div>
      <ToastContainer></ToastContainer>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
