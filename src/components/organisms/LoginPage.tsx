import { useEffect } from "react";
import "./LoginPage.scss";
import Form from "../molecules/Form";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear();
  });

  const validate = (username: string, password: string) => {
    let result = true;

    if (username === "" || username === null) {
      result = false;
      toast.warning("Please enter Username");
    }

    if (password === "" || password === null) {
      result = false;
      toast.warning("Please enter Password");
    }

    return result;
  };

  const handleLogin = async (username: string, password: string) => {
    if (validate(username, password)) {
      try {
        const res = await fetch("http://localhost:8000/user/" + username);

        if (!res.ok) throw new Error("Something went wrong! Try Again");

        const data = await res.json();

        if (Object.keys(data).length === 0) {
          toast.error("Please enter valid username");
        } else {
          if (data.password === password) {
            toast.success("Success!");
            localStorage.setItem("username", username);
            navigate("/tasks");
          } else {
            toast.error("Please enter valid credentials");
          }
        }
      } catch (error: any) {
        toast.error("Login Failed due to :" + error.message);
      }
    }
  };

  return (
    <div className="login-page">
      <h1 className="login-page__title">Login</h1>
      <div>
        Don't have account? <Link to="/register">Register</Link>
      </div>
      <Form onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
