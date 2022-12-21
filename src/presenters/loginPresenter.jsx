import LoginView from "../views/loginView";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function userEmail(string) {
    setEmail(string)
  }

  function userPassword(string) {
    setPassword(string)
  }

  async function handleLoginACB() {
    try {
      await props.model.signIn(email, password)
    }
    catch (error) {
      console.log(error.message)
      setError(error)
    }

    if (props.model.currentUser != null) {
      navigate("/Home");
    }
  }

  return <LoginView onUserLogIn={handleLoginACB} error={error} onUserEmail={userEmail} onUserPassword={userPassword} />;
}