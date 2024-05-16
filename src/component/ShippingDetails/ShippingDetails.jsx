import React from 'react'
import {  IoIosArrowDown } from "react-icons/io";

const ShippingDetails = () => {
  return (
    <div>
      <div>
        
        <div className='float-right -mt-24 mx-10  '>
          <button className='bg-gradient-to-r from-red to-orange  px-4 py-2 rounded-lg text-white'>Add New</button>
        </div>
      </div>
      <div className='w-99 bg-white h-78 mx-10 mt-10 rounded-lg'>
        <div>
          <h2 className='mx-3 py-4 font-medium'>How do you want to handle shipping?</h2>

        </div>
        <form action="">
          <div className='flex w-90 justify-between h-22 items-center px-4 border-1 border-gray rounded-lg ml-3 '>
            <div>
              <h2>Use Quickshop’s Shipping Partner (SHiiP)</h2>
            </div>
            <div>
              <h2> <IoIosArrowDown/></h2>

            </div>

          </div>
          
        </form>
      </div>

    </div>
  )
}

export default ShippingDetails