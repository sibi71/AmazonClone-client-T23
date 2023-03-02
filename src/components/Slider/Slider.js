import React from 'react'
import "./Slider.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap'
import { firstslide } from "../../static/data"
const Slider = () => {
  return (
    <Carousel >

    {firstslide.img.map((item,index)=>{
        return(
        <Carousel.Item interval={2000} key={index} className="slide__image" >

            <img className='d-block w-100'
            src={item.img} 
            alt="Ads"/>
            
        </Carousel.Item>
        )
    })}

    </Carousel>
    
  )
}

export default Slider