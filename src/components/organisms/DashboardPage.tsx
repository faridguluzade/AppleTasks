import React from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./DashboardPage.scss";

const DashboardPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    let username = localStorage.getItem("username");

    if (username === "" || username === null) {
      navigate("/login");
    }
  });

  return (
    <div className="dashboard-page">
      <h1 className="dashboard-page__title">Hello World</h1>
      <p className="dashboard-page__content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda,
        non.
      </p>
      <Link to="/login">Logout</Link>
    </div>
  );
};

export default DashboardPage;
