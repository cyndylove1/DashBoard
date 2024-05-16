import React from 'react'
import Header from '../Header/Header'
import image from '../Image/images.jpg'
import { IoChevronForward } from "react-icons/io5";
import { IoChevronBackOutline } from "react-icons/io5";
import { NavLink, Outlet } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import ProductTable from '../ProductTable/ProductTable';
import AddToProduct from '../AddToProduct/AddToProduct';

const Product = () => {
  const [visible, setVisible] = useState(false)
  // const [showData, setShowData] = useState(false)

  const handleClick = () => {
      setVisible(!visible)
      
  }
  // const handleToggle = () => {
  //     setVisible(false)
  //     setShowData(true)
  // }
  
  
  const navigate = useNavigate();
  return (
    
    <section className=''>
      
        {/* <Header/> */}
        <div>
          <div className='flex justify-between  items-center mx-10 pt-10'>
            <div>
              <h2 className='font-medium text-2xl'>Products</h2>

            </div>
            <div className='py-8 px-4 bg-gradient-to-r from-red to-orange text-white rounded-md'>
              
                <button onClick={()=> navigate('/AddToProduct')}>Add Product</button>
               
              
              
            </div>

           
          </div>
          
        </div>
        <ProductTable/>
        
           {/* <AddToProduct/> */}
        

        
       
       

      </section>
  )
}

export default Product
