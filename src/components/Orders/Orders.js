import React, { useState } from 'react'
import "./Orders.css"
import cart from "../../img/cart.png"

const Orders = ({id,items,total,createdAt}) => {
    const [showProducts , setShowProduct] = useState(false);
    
  return (
    <div className='order'>
        <img src={cart} className ="order__image"  alt=''/>
        <div className='order__info'>
            <p className='order__title'>Order Id : {id}</p>
            <p className='order__price'>
            <small>₹</small>
            <strong>{total}</strong>
            </p>
            <div className='order__showProducts'>
              <p>Number pf product orders:{items.length}</p>
              <button onClick={()=>{setShowProduct((curr)=>!curr)}}>
                {showProducts ? "Hide All" : "Show All"}
              </button>
            </div>
            <p>
              Order At:{" "}
              <strong>{new Date(createdAt).toString().slice(0,25)}</strong>
            </p>
            {showProducts && (
              <div className='order__products'>
                   {items.map((item,index)=>{
                    console.log(item);
                      return(
                        <div className='order__product' key={index}>
                          <img src={item.image} alt=""/>
                        <div className='order__productTop'>
                          <h4>{item.title}</h4>
                          <p>
                          <small>₹</small>
                        <strong>{item.price}</strong>
                          </p>
                          <div className='order__rating'>
                        {Array(item.rating).fill().map((_,index)=>{
                          return (<span key={index} role="img" aria-label='rating'>⭐</span>)
                        })}
                        </div>
                        </div>
                        </div>
                      );
                    })} 
                  </div>
              )}
        </div>
    </div>
  )
}

export default Orders