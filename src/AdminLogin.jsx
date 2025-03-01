import React, { useState } from "react";
import "./AdminLogin.css";

function AdminLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function login() {
        if (username === "user" && password === "admin") {
            window.location.href = "/EditTimeTable";
        } else {
            alert("Invalid Credentials");
        }
    }

    return (
        <div className="login">
            <h1>Admin Login</h1>
            <label htmlFor="username">Username</label>
            <input
                type="text"
                id="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button className="login-button" onClick={login}>Login</button>
        </div>
    );
}

export default AdminLogin;
