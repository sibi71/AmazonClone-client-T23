import React from 'react'
import "./Product.css"

const Product = ({id,title,image,rating}) => {
   
  return (
    <div className='product' >
        <div className='product__info'>
            <p>{title}</p>
            <div className='product__rating'>
                {
                    Array(rating).fill().map((_,index)=>{
                        return(
                        <span key={index}>⭐</span>
                        )
                    })
                }

            </div >
        </div>
         <img src={image} alt="productItems"/>
    </div>

  )
}

export default Product