import React, { useEffect,useState } from 'react'
import "./Header.css"
import { Link,useNavigate } from 'react-router-dom'
import { Search, ShoppingBasket } from '@mui/icons-material'
import { useDispatch, useSelector } from "react-redux"
import { getUser, handleLogin, logout } from "../../slices/userSlice"
import logo from "../../img/logo.png"
import { getBasket } from '../../slices/basketSlice'
import { productItems }  from "../../static/data"
const Header = () => {
  const [searchinput , setSearchinput] =  useState("")
    const user = useSelector(getUser);
    const basket = useSelector(getBasket)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    useEffect(()=>{
      let token = localStorage.getItem("token");
      if(token && !user){
        dispatch(handleLogin(token))
      }

    },[])

    const login =()=>{
      if(user){
        dispatch(logout())
         
      }
      else{
        navigate("/login")
      }
    }
    const data = () =>{
      productItems.filter((itemTitle) => {
          if(searchinput == " "){
            console.log(itemTitle);
            return (
              itemTitle
              )
            
          }else if(itemTitle.dept.toLowerCase().includes(searchinput.toLowerCase()))
          {
            return (
              navigate(`/search/${itemTitle.dept}`)
              
            )
          }
      })    
    }
  return (
    <nav className='header' id="header">
      <Link to="/">
        <img 
        className='header__logo'
        src={logo}
        alt='logo'
        />
      </Link>
      <div className='header__search' >
        <input type="test" className='header__searchInput' placeholder='Search Amazon.in' onChange={(e)=>setSearchinput(e.target.value)} />
        <Search className='header__searchIcon' onClick={data} />
      </div>
      <div className='header__nav'>
        <Link to ={!user && "/login"} className="header__link">
          <div className='header__option' onClick={login}>
            <span className='header__optionLineOne'>
              {user ? user?.email :"Hello"}
            </span>
            <span className='header__optionLineTwo'>{user?"sign Out":"sign In"}</span>
          </div>
        </Link>
        <Link to="/orders" className='header__link'>
        <div className='header__option'>
          <span className='header__optionLineOne'>Return</span>
          <span className='header__optionLineTwo'>& Orders</span>
        </div>
        </Link>
        <Link to="/" className='header__link'>
          <div className='header__option'>
            <span className='header__optionLineOne'>Your</span>
            <span  className="header__optionLineTwo">Price</span>
          </div>
        </Link>
        <Link to="/checkout" className='header__link'>
          <div className='header__optionBasket'>
            <ShoppingBasket />
            <span className='header__optionLineTwo header__basketCount'>{basket.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Header