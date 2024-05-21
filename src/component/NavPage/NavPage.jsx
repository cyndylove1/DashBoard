import React from 'react'
import DashBoard from '../DashBoard/DashBoard'
import DashBoard2 from '../DashBoard2/DashBoard2'
import Product from '../Product/Product'
import Orders from '../Orders/Orders'
import {Routes, Route} from 'react-router-dom'
import Transaction from '../Transaction/Transaction'
import Settings from '../Settings/Settings'
import AddToProduct from '../AddToProduct/AddToProduct'
import Header from '../Header/Header'
import OrderView from '../OrderView/OrderView'



const NavPage = () => {
  return (
    <div className=''>
      <Header/>
      {/* <Main/> */}
        
        <Routes>
            <Route path='/' element={<DashBoard/>}/>
            <Route path='/dashboard' element={<DashBoard/>}/>
            <Route path='/dashboard/dashboard2' element={<DashBoard2/>}/>
            <Route path='/products' element={<Product/>}/>
            <Route path='/AddToProduct' element={<AddToProduct/>}/>
            <Route path="/orders" element={<Orders/>}/>
            <Route path="/orderView" element={<OrderView/>}/>
            <Route path="/transaction" element={<Transaction/>}/>
            <Route path="/settings" element={<Settings/>}/>
            
            
          
        </Routes>
       
    </div>
  )
}

export default NavPage