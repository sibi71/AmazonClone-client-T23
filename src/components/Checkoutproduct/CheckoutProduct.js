import React from 'react'
import "./CheckoutProduct.css"
import { Delete }from '@mui/icons-material';
import { useDispatch } from "react-redux"
import { removeFromBasket } from '../../slices/basketSlice';
const CheckoutProduct = ({id,title,image,price,rating}) => {

    const dispatch = useDispatch();
    const Remove = ()=>{
        dispatch(removeFromBasket(id))

    };
  return (

    <div className='checkoutproduct'>
        
        <img src={image} alt="productitems" className='checkoutproduct__image'/>
        <div className='checkoutproduct__info'>
            <p className='checkoutproduct__title'>{title}</p>
            <p className='checkoutproduct__price'>
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            <div className='checkoutproduct__rating'>
                {Array(rating).fill().map((_,index)=>{
                   return (<span key={index}>⭐</span>)
                })}
            </div>
            <button onClick={Remove}><Delete/> Remove Cart</button>
        </div>
        
    </div>
  )
}

export default CheckoutProduct