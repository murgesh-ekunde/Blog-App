import React, { useContext, useState } from "react";
import { Navigate } from 'react-router-dom'
import { API } from "../data";
import { UserContext } from "../UserContext";
 
function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false)
  const {setUserInfo} = useContext(UserContext)

  async function login(e){
    e.preventDefault();
    const response = await fetch(`${API}/login`,{
      headers:{"Content-Type":"application/json"},
      method: "POST",
      body:JSON.stringify({username,password}),
      credentials:"include"
    });

    if(response.ok){
      response.json().then(userInfo =>{
        setUserInfo(userInfo);
        setRedirect(true);
      })
    }else{
      alert("Wrong username or password")
    }
  }
  if(redirect===true){
    return <Navigate to={"/"}/>
  }
  return (
    <form className="login" onSubmit={login}>
      <h1>Login</h1>
      <input 
      type="text" 
      placeholder="username" 
      value={username} 
      onChange={e=>setUsername(e.target.value)}
      />
      <input 
      type="password" 
      placeholder="password" 
      value={password} 
      onChange={e=>setPassword(e.target.value)}
      />
      <button> Login </button>
    </form>
  );
}

export default LoginPage;
