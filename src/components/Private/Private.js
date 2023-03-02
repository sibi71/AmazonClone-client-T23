import React, { useEffect, useState } from 'react'
import { useDispatch ,useSelector} from "react-redux"
import { Navigate, Outlet } from 'react-router-dom'
import { getUser , handleLogin } from "../../slices/userSlice"
import "./Private.css"
const Private = () => {
    const user = useSelector(getUser)
    const [loading,setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(()=>{
        let token = localStorage.getItem("token");
        if(token && !user){
            dispatch(handleLogin(token))
        }
        setTimeout(()=>{
            setLoading(false)
        },500)
    },[])

    if(loading){
        // eslint-disable-next-line jsx-a11y/alt-text
        return  (<div className='private'><img src='https://i.gifer.com/YCZH.gif' /></div>)
    }
    if(!user){
        return <Navigate to="/login" />
    }

  return (
    <Outlet />
  )
}

export default Private