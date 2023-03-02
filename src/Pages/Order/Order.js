import React, { useEffect, useState } from 'react'
import "./Order.css"
import axios from "../../axios";
import Orders from '../../components/Orders/Orders';

const Order = () => {

  const [order ,setOrder] = useState([])

  useEffect(()=>{
    const getOrder = async()=>{
      const {data} = await axios.get("/checkout/orders",{
        headers:{
          Authorization:localStorage.getItem("token"),
        }
      })
      setOrder(data)
    }
    getOrder()
  },[]);
  
  return (
    <div className='checkouts'>
      <div className='checkouts__left'>

      </div>
      {order.length === 0 ? (
          <div>
            <h2>Your orders is empty</h2>
            <p>you have not made any orders. First make an order.</p>
          </div>
        ):(
          <div>
            <h2 className='checkouts__title'>You order</h2>
            {order.map((order,index)=>{
              return(
            <Orders 
              key={index}
              id={order.order_id}
              items={order.items}
              total={order.total}
              createdAt={order.createdAt}
           
              />
              )
            })
            }
          </div>
        )
      }
    </div>
  )
}

export default Order