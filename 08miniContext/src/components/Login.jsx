// From here our context is starting
import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext); // we have passed user, setUser to the UserContext by UserContext.Provider so we have access of user and setUser

  const handleSubmit = (event) => {
    event.preventDefault();
    setUser({ username, password });
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        
        placeholder="username"
      />
      {" "} 
      <input
        type="text"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Login;
