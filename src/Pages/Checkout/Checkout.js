import React from 'react'
import "./Checkout.css"
import { Link, useNavigate} from "react-router-dom"
import { useDispatch ,useSelector} from "react-redux"
import { getBasket } from "../../slices/basketSlice"
import CheckoutProduct from '../../components/Checkoutproduct/CheckoutProduct'
import Subtotal from '../../components/Subtotal/Subtotal'
const Checkout = () => {
const basket = useSelector(getBasket)
const Navigate= useNavigate()

  return (
    <div className='checkout'>
      <div className='checkout__left'>
      {basket.length === 0 ? (
        <div className='checkout__info'>
          <h1>Your Shopping Cart is empty</h1>
          <p>you have no <span>Items</span> in your cart. to buy or more items, click "Add
          to cart" next to the item</p>
          <Link to="/">
            <button>Add Product</button>
          </Link>
          
        </div>
      ):(
          <div className='checkout__items'>
            <h2 className='checkout__title'>
              Shopping Cart
            </h2>
            {
              basket.map((item,index)=>{
                return(
              <CheckoutProduct 
                key={index}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                />
                )
              })
            }
          </div>
      )
      }
      </div>
      {
        basket.length > 0 && (
          <div className='checkout__right'>
            <Subtotal />
          </div>
        )
      }
    </div>
  )
}

export default Checkout