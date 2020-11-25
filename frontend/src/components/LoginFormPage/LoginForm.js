import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./LoginForm.css";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      (res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      }
    );
  };

  const demoLogin = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.demoLogin({ credential, password })).catch(
      (res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      }
    );
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <label className="field-label">
        <input
          placeholder="Username or Email"
          className="field-label__input"
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
        />
      </label>
      <label className="field-label">
        <input
          placeholder="Password"
          className="field-label__input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit" className="login-button">
        Log In
      </button>
      <button className="demo-login" onClick={demoLogin}>Demo Login</button>
    </form>
  );
};

export default LoginForm;
