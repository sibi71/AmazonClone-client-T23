import React, { useState } from 'react'
import "./Search.css"
import { useDispatch } from "react-redux"
import { Link, useNavigate, useParams } from 'react-router-dom';
import { productItems } from '../../static/data';
import {addToBasket } from "../../slices/basketSlice"
const Search = () => {
    const { title } = useParams();
    const navigate = useNavigate
  
    const FindSearchItem = productItems.filter((items)=>{
        return(
            items.dept == title
        )
    })  
    
  return (
    <>
      {
        FindSearchItem.map((SearchItems,index)=>{
          return(
            <div className='search' key={index}>
             
              <div className='search__image'>
                <img src={SearchItems.image} alt={SearchItems.dept}  />
              </div>
              <div className='search__detalls'>
                <h3>{SearchItems.title}</h3>
                <div className='search__rating'>
                {
                    Array(SearchItems.rating).fill().map((_,index)=>{
                        return(
                        <span key={index}>⭐</span>
                        )
                    })
                  
                }
                <span>{SearchItems.rating} ratings</span>

            </div >
              <p className='search__price'>
                Price :
              <small>₹</small>
              <strong>{SearchItems.price}</strong>
              </p>
               <Link to={`/view/${SearchItems.id}`} >
                <button >View Detalls</button>
                </Link>
              </div>

            </div>
          )
        })
      }
       
    </>
  )
}

export default Search