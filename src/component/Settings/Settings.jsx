import React from 'react'
import { useState } from 'react'
import Profile from '../Profile/Profile'
import ShippingDetails from '../ShippingDetails/ShippingDetails'
import PaymentInfo from '../PaymentInfo/PaymentInfo'
import StoreDetails from '../StoreDetails/StoreDetails'

const Settings = () => {
  const [selected, setSelected] = useState(1)
  
  
  return (
    <div>
      <div>
        <div className='mx-10 mt-6 pb-4 font-medium text-xl'>
          <h2>Settings</h2>
        </div>
        <div className='flex list-none mx-10 border-b-1 w-full border-gray pb-4'>
          <div>
            <ul className='flex cursor-pointer'>
              <li className='mx-2 text-dark-gray' onClick={()=>setSelected(1)} >Profile</li>
              <li className='mx-2 text-dark-gray ' onClick={()=>setSelected(2)} >Shipping</li>
              <li className='mx-2 text-dark-gray ' onClick={()=>setSelected(3)} >Store Details</li>
              <li className='mx-2 text-dark-gray ' onClick={()=>setSelected(4)} >Payment Information</li>
            </ul>
            
          </div>
         
        </div>
        {selected === 1 && <Profile/>}
        {selected === 2 && <ShippingDetails/>}
        {selected === 3 && <StoreDetails/>}
        {selected === 4 && <PaymentInfo/>}
      </div>
    </div>
  )
}

export default Settings