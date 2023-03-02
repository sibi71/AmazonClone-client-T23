import React, { useState } from 'react'
import "./Login.css"
import { Link,useNavigate } from "react-router-dom";
import axios from "../../axios"
import { useDispatch } from "react-redux"
import { handleLogin } from '../../slices/userSlice';


const Login = () => {


  const [email,setEmail] = useState("");
  const [password ,setPassword] = useState("");

  const dispatch = useDispatch()
  const navigate = useNavigate();


  const login = async(e)=>{
    e.preventDefault();
    const res = await axios.post("/user/login", 
    {
      email,
      password
    });
    localStorage.setItem("token",res.data.token);
    dispatch(handleLogin(res.data.token));
    navigate("/");
  }
  const reqister = async(e)=>{
    e.preventDefault(); 
    try {
      const res = await axios.post("/user/signup",
    {
      email,
      password,
    });
    alert(res.data?.msg)
      
    } catch (error) {
      console.log(error);
    }
    
  } 
  

  return (
    <div className='login'>
      <Link to="/" >
        <img src="https://thumbs.dreamstime.com/b/amazon-155631949.jpg" alt="logo" className='login__logo' />
      </Link>
      <div className='login__container'>
        <h1>sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="email" 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />
          <h5>password</h5>
          <input type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          />
          <button type='submit' className='login__signInButton' onClick={login}>Sign In</button>
        </form>
        <p>
          By singning-in you agree to Amazon's conditions of Use & sale.
          please see our Privacy Noticy ,our Cookies Notice and Internet-Based Ads
          Notice
        </p>
        <button className='Login__registerButton' onClick={reqister}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  )
}

export default Login