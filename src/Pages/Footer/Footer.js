import React from 'react'
import "./Footer.css"
import logo from "../../img/logo.png"
export const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer__refresh'>
        <a href='#home'>Back to Top</a>
        </div>
        <hr></hr>
        <div className='footer__detall'>
        <div className='footer__feedback'>
            <p>Get to Know Us</p>
            <a href='# '>About Us</a>
            <a href='# '>Careers</a>
            <a href='# '>Press Releases</a>
            <a href='# '>Amazon Science</a>
        </div>
        <div className='footer__feedback'>
            <p>Connect with Us</p>
            <a href='# '>Facebook</a>
            <a href='# '>Twitter</a>
            <a href='# '>Instagram</a>
        </div>
        <div className='footer__feedback'>
            <p>Make Money with Us</p>
            <a href='# '>Sell on Amazon</a>
            <a href='# '>Sell under Amazon Accelerator</a>
            <a href='# '>Protect and Build Your Brand</a>
            <a href='# '>Amazon Global Selling</a>
        </div>
        <div className='footer__feedback'>
            <p>Let Us Help You</p>
            <a href='# '>COVID-19 and Amazon</a>
            <a href='# '>100% Purchase Protection</a>
            <a href='# '>Help</a>
            <a href='# '>Advertise Your Products</a>
        </div>
        </div>
        <hr></hr>
        <div className='footer__image'>
            <img src ={logo} alt="logo" />
        </div>
        
    </div>
  )
}
