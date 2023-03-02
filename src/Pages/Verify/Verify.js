import React, { useEffect, useState } from 'react'
import "./Verify.css"
import { Link, useParams }  from "react-router-dom"
import axios from '../../axios'
const Verify = () => {
  const {token} = useParams()
  const [success ,setSuccess] = useState(false);
  const [loading,setLoading] =useState(true);

  const verifyUser = async()=>{
    try {
      const res = await axios.get(`/user/verify/${token}`);

      setSuccess(res.data.success)
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }

  };
  useEffect(()=>{
    if(token){
      verifyUser();
    }
  },[token]);
  
  if(loading){
    return <div className='verify__loading'>
    <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt='gif'/>
    </div>
  }
  return (
    <div className='verify'>
      <h2>Verifyied Successfully</h2>
      <img src="https://i.gifer.com/7efs.gif"  alt="success"
      className='verified'/>
      <Link to="/login" >
      <button>Login Now</button>
      </Link>
      
    </div>
  )
}

export default Verify