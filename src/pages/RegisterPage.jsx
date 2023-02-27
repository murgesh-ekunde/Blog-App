import React, { useState } from "react";
import { API } from "../data";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function register(e){
    e.preventDefault();
    const response = await fetch(`${API}/register`,{
      headers: {'Content-Type':'application/json'},
        method:'POST',
        body: JSON.stringify({username,password}),
    });
    if (response.status === 200){
        alert("Successfully Registered") 
    } else {
        alert('Registration Failed, Try Again!')
    }
  }
  return (
    <form className="register" onSubmit={register}>
      <h1>Register</h1>
      <input type="text" 
      placeholder="username" 
      value={username} 
      onChange={e=>setUsername(e.target.value)} 
      />

      <input type="password" 
      placeholder="password"
      value={password} 
      onChange={e=>setPassword(e.target.value)} 
      />
      <button> Register </button>
    </form>
  );
}

export default RegisterPage;
