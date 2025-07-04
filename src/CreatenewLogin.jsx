import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./Firebase.config";
import { useNavigate } from 'react-router-dom';
import "./createnewLogin.css";

function CreatenewLogin() {
    // const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [secretid, setSecretid] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const createAccount = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        if(secretid !=="SCT27"){
            alert("Not an Admin!");
            return;
        }
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            await updateProfile(user, { displayName: name });

            console.log("User Created:", user.email);
            console.log("Name Set:", user.displayName);

            alert("Account created successfully!");
            navigate("/AdminLogin");
        } catch (error) {
            console.error("Error creating account:", error.message);
            alert(error.message);
        }
    };

    return (
        <div className="create-login-container">
            <div className="create-login-form">
            <h1 className="create-login-title">Create Admin Login</h1>
            <label className="form-label" htmlFor="name">Name</label>
            <input 
                type="text" 
                className="form-input"
                value={name} 
                placeholder="Enter your name" 
                onChange={(e) => setName(e.target.value)} 
            />
            {/* <label htmlFor="username">Username</label>
            <input 
                type="text" 
                value={username} 
                placeholder="Enter your username" 
                onChange={(e) => setUsername(e.target.value)} 
            /> */}
            
            <label className="form-label" htmlFor="email">Email</label>
            <input 
                type="email" 
                value={email} 
                className="form-input"
                placeholder="Enter your email" 
                onChange={(e) => setEmail(e.target.value)} 
            />
            
            <label className="form-label"  htmlFor="password">Password</label>
            <input 
                type="password" 
                className="form-input"
                value={password} 
                placeholder="Enter your password" 
                onChange={(e) => setPassword(e.target.value)} 
            />
            
            <label className="form-label" htmlFor="confirm-password">Confirm Password</label>
            <input 
                type="password" 
                className="form-input"
                value={confirmPassword} 
                placeholder="Re-enter your password" 
                onChange={(e) => setConfirmPassword(e.target.value)} 
            />
            <label className="form-label" htmlFor="Secret">Secret ID</label>
            <input 
                type="password" 
                className="form-input"
                value={secretid}
                placeholder="Secret ID" 
                onChange={(e) => setSecretid(e.target.value)}/>   
            <button className="create-button" onClick={createAccount}>Create Account</button>
        </div>
        </div>
    );
}

export default CreatenewLogin;
