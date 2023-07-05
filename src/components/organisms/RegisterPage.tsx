import React from "react";
import "./RegisterPage.scss";
import Form from "../molecules/Form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const RegsterPage = () => {
  const navigate = useNavigate();

  const isValidate = (username: string, password: string) => {
    let isProceed = true;
    let errorMessage = "Please enter the value in ";

    if (username === null || username === "") {
      isProceed = false;
      errorMessage += "Username";
    }

    if (password === null || password === "") {
      isProceed = false;
      errorMessage += " Password";
    }

    if (!isProceed) {
      toast.warning(errorMessage);
    }

    return isProceed;
  };

  const handleRegister = async (username: string, password: string) => {
    if (isValidate(username, password)) {
      const regObj = { "id": username, "password": password };
      try {
        const res = await fetch("http://localhost:8000/user", {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(regObj),
        });

        if (!res.ok) throw new Error("Something went wrong!");

        toast.success("Registered successfully!");
        navigate("/login");
      } catch (error: any) {
        toast.error("Failed: " + error.message);
      }
    }
  };
  return (
    <div className="register-page">
      <h1 className="register-page__title">Register</h1>
      <Form onSubmit={handleRegister} />
    </div>
  );
};

export default RegsterPage;
