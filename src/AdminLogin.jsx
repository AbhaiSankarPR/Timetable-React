import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "./Firebase.config";
import "./AdminLogin.css";

function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const login = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/EditTimeTable");
        } catch (error) {
            alert("Invalid Credentials");
            console.error("Login Error:", error.message);
        }
    };

    return (
        <div className="admin-login-container">
            <div className="admin-login-form">
                <h1 className="admin-login-title">Admin Login</h1>
                <label className="form-label" htmlFor="email">Email</label>
                <input
                    type="email"
                    className="form-input"
                    id="email"
                    placeholder="Enter Admin Email"
                    value={email}
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label className="form-label" htmlFor="password">Password</label>
                <input
                    type="password"
                    className="form-input"
                    id="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="login-button" onClick={login}>Login</button>
                <div className="login-info">
                    <p>If you are not an admin, please go back to the home page.</p>
                    <p>If not logged in, please <span className="signup-link" onClick={() => navigate("/CreatenewLogin")}>sign up</span>.</p>
                </div>
            </div>
        </div>
    );
}

export default AdminLogin;
