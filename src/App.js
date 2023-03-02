import React from 'react';
import "./App.css"
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Home from "./Pages/Home/Home"
import Order from "./Pages/Order/Order"
import Payment from "./Pages/Payment/Payment"
import Login from "./Pages/Login/Login"
import Checkout from "./Pages/Checkout/Checkout"
import Verify from "./Pages/Verify/Verify"
import Header from './components/Header/Header';
import Private from './components/Private/Private';
import View from './Pages/View/View';
import Search from './Pages/Search/Search';
import { Footer } from './Pages/Footer/Footer';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Private />}>
        <Route path='/orders' element={<><Header/><Order /></>} />
        <Route path='/checkout' element={<><Header/><Checkout/></>} />
        <Route path='/pay/:id' element={<><Header/> <Payment /></>} />
        </Route>
        <Route path='/' element={
          <>
          <Header/>
           <Home />
           <Footer />
          </>
       
        } />
        <Route path='/view/:id' element ={<><Header /><View /> </>}/>
        <Route path='/search/:title' element ={<><Header /><Search /></>}/>
        <Route path='/login' element={<Login  />} />
        <Route path='/user/verify/:token' element={<Verify />} />
      </Routes>
    </Router>
    
  )
}

export default App