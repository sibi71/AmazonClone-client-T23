import React from 'react'
import "./View.css"
import { useDispatch } from "react-redux"
import { useParams } from 'react-router-dom';
import { productItems } from "../../static/data"
import {addToBasket } from "../../slices/basketSlice"
import ReactImageMagnify from 'react-image-magnify';


const View = () => {
const { id } = useParams();
 const FindProduct = productItems.find((data)=>{
       return data.id == id;

 });

 const dispatch = useDispatch();

 const addToBas = ()=>{
     dispatch(
         addToBasket({
             id:FindProduct.id,
             title:FindProduct.title,
             image:FindProduct.image,
             price:FindProduct.price,
             rating:FindProduct.rating,
         })
     )
 }

  return (
    <div className='view'>
      <div className='view__img'>
      <ReactImageMagnify {...{
    smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: true,
        src:FindProduct.image
    },
    largeImage: {
        src: FindProduct.image,
        width: 1200,
        height: 1800
    }
}} />

      </div>
      <div className='view__detalls'>
      <h3>{FindProduct.title}</h3>
        <div className='view__rating'>
                {
                    Array(FindProduct.rating).fill().map((_,index)=>{
                        return(
                        <span key={index}>⭐</span>
                        )
                    })
                  
                }
                <span>{FindProduct.rating} ratings</span>

            </div >
            <hr></hr>
            <p className='view__price'>
              Price :
            <small>₹</small>
            <strong>{FindProduct.price}</strong>
            </p>
            <div className="view__productdetalls">
              <h5>Detalls :</h5>
              {
                FindProduct.detalls.map((data,index)=>{
                  return(
                  <p key={index}>{data.item}</p>
                  )
                })
              }
            </div>
      </div>
      <div className='view__basket'>
        
          <p>
          Price :
            <small>₹</small>
            <strong>{FindProduct.price}</strong>
            </p>
            <h3>
            In stock
            Sold by Zeus Fabrics and Fulfilled by Amazon.
            </h3>

            <button onClick={addToBas}>Add to cart</button>
      </div>
     
    </div>
  )
}

export default View