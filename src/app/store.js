import { configureStore } from "@reduxjs/toolkit"
import  basketSlice from "../slices/basketSlice"
import  userReducer from "../slices/userSlice"




const store = configureStore({
    reducer:{
        userInfo:userReducer,
        basketItem:basketSlice,
        
    }
})



export default store