import React from 'react'
import "./Payment.css"
import { useParams,Navigate } from "react-router-dom"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import PaymentForm from '../../components/PaymentForm/PaymentForm'

const stripePromise = loadStripe(
  "pk_test_51MetGoSFm3mHHDpfVuqYS4OSLcYGXchlSLvMn2eXOoHRoOvK2ncvGwAiB4cxRgDhhe1qjHZHJzyzwgbpCIbsI9M100HULu4gMM"

)

const Payment = () => {
  const { id }  = useParams();

  const option={
    clientSecret:id,
    appearance:{
      theme:"stripe"
    },
  }
  if(!id){
    return<Navigate to="/"/>
  }
  return (
    <div className='payment'>
      <Elements options={option} stripe={stripePromise} >
      <PaymentForm secretKey={id} />
    </Elements>
    </div>
  )
}

export default Payment