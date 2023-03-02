import React from 'react'
import { Link} from 'react-router-dom'
import Product from '../../components/Product/Product'
import Slider from '../../components/Slider/Slider'
import "./Home.css";
import { productItems } from "../../static/data"

const Home = () => {


  return (
    <div className='home' id='home'>
     <Slider />
     <div className="  home__items">
      {  productItems.map((product,index)=>{
            return(
              <div className="home__detalls" key={index}>
              <Link to={`/view/${product.id}`} >
              <Product 
                id={product.id}
                title={product.title}
                image={product.image}
                  rating={product.rating}
                  />
            </Link>
            </div>
            )
          })
      }
       </div>
       
       
       
    </div>
  )
}

export default Home