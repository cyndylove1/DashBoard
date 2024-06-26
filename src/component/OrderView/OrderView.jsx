import React from 'react'
import { RxSlash } from "react-icons/rx";
import { Link } from 'react-router-dom';
import image from '../Image/images.jpg'
import { GoCheckCircleFill } from "react-icons/go";

const OrderView = () => {
  return (
    <div>
        <div className='bg-grey '>
            <div className='pt-4'>
                <div className='flex items-center mx-10'>
                    <div className=' text-sm'>
                        <Link to='/'>Orders</Link>
                        
                    </div>
                    
                    <span className='inline-block'><RxSlash/></span>
                        <div className=' inline-block text-sm'>
                        <Link to='/Business'>Order 1403</Link>

                    </div>
                        
                </div>
            </div>
            <div>
                <div>
                    <div className='flex items-center justify-between py-6 mx-10'>
                        
                        <div>
                            <h2 className='text-xl font-medium'>Order 401</h2>
                        </div>
                        <div className=''>
                             <select name="" id="" className='bg-BlushBlue text-navy rounded-xl px-5 py-8 outline-none'>
                                <option value="">Pending</option>
                                <option value="">Completed</option>
                             </select>
                        </div>

                    </div>
                    
                    <div>
                        <div>
                            <div className=' flex ml-10'>
                                
                                <div className='w-99 pb-6 bg-white rounded-lg'>
                                    <div className='px-6 py-4 text-sm font-medium'>
                                         <h3>Order Summary</h3>
                                     </div>
                                    <div className='flex items-center justify-between pt-4'>
                                        <div className='flex mx-4'>
                                            
                                            <div>
                                                <img src={image} alt="" className='w-12 h-12 mx-2 rounded-md'/>

                                            </div>
                                            <div>
                                                <h3 className='text-sm font-medium'>2021 Nike Airforces</h3>
                                                
                                                <h3 className=' text-sm'>Orange, Size 41</h3>
                                            
                                            </div>
                                            
                                            

                                        </div>
                                        <div className=' ml-10 mr-4'>
                                            <h2 className='text-red ml-3 text-sm font-medium'>&#8358;45,000</h2>
                                            <h2 className=' text-sm'>Quantity :1</h2>
                                        </div>
                                        

                                    </div>
                                    <div>
                                        <div className='flex justify-between py-2 mx-4'>
                                            <div>
                                                <h3 className=' text-sm'>Date Placed</h3>
                                            </div>
                                            <div className='text-sm'>24-Aug-2023 19:00 PM</div>
                                        </div>
                                        <div className='flex justify-between px-4 py-2'>
                                            <div>
                                                <h2 className=' text-sm'>SubTotal</h2>
                                            </div>
                                            <div>
                                                <h2 className='text-sm'>&#8358;45,000</h2>
                                            </div>

                                        </div>
                                        <div className='flex justify-between py-2 mx-4'>
                                            <div>
                                                <h3 className=' text-sm'>Shipping</h3>
                                            </div>
                                            <div>
                                                <h4 className='text-sm'>&#8358;5000</h4>
                                            </div>
                                        </div>
                                        <div className='flex justify-between py-2 mx-4'>
                                            <div>
                                                <h5 className=' text-sm'>Total</h5>
                                            </div>
                                            <div>
                                                <h6 className='text-sm'>&#8358;50,000</h6>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                                <div className='w-99 h-20 mx-6 bg-white rounded-lg'>
                                    <div>
                                        <h2 className='px-4 py-4 text-sm font-medium'>Billing Details</h2>
                                    </div>
                                    <div className='flex justify-between px-4 py-2'>
                                        <div>
                                            <h2 className='text-sm'>Customer Name</h2>
                                        </div>
                                        <div>
                                            <h4 className='text-sm'>Fiyinfoluwa Olubiyi</h4>
                                        </div>
                                    </div>
                                    <div className='flex justify-between px-4 py-2'>
                                        <div>
                                            <h3 className=' text-sm'>Contact Number</h3>
                                        </div>
                                        <div>
                                            <h2 className='text-sm'>09066889966</h2>
                                        </div>
                                    </div>
                                    <div className='flex justify-between px-4 py-2' >
                                        <div>
                                            <h5 className=''>Address</h5>
                                        </div>
                                        <div>
                                            <h4 className='text-sm'>Road 31, Herbert Macaulay, Ikota Villa Estate,<br />Lagos, Nigeria 100216</h4>
                                                          
                                        </div>
                                    </div>
                                </div>

                            </div>
                           
                           
                            
                            

                        </div>
                    </div>
                    <div className='w-45 mx-10 mt-10 bg-white rounded-lg'>
                        <div>
                            <h2 className='px-4 py-4 text-sm font-medium'>OrderTracking Log</h2>

                        </div>
                        <div>
                            <div className='flex justify-between px-4 py-2'>
                                <div>
                                    <h5 className='text-sm'>Estimated Delivery Date</h5>
                                </div>
                                <div>
                                    <h2 className='text-sm'>24-Aug-2023</h2>
                                </div>
                            </div>
                            <div className='flex items-center justify-between px-4 py-4'>
                                <div className=' flex'>
                                    <div className=' mt-1'>
                                        <h2 className=' text-green-100'><GoCheckCircleFill/></h2>
                                                        
                                    </div>
                                    <div className='mx-2 text-sm'>
                                        <h2>Order Received</h2>
                                        <p>Status was set to received</p>
                                    </div>
                                        
                                
                                    
                                </div>
                                <div>
                                    <h2 className='text-sm'>24-Aug-2023</h2>
                                </div>

                        </div>
                        
                            <div className='flex items-center justify-between px-4 pb-4'>
                                <div  className='flex'>
                                    <div className=' mt-1'>
                                        <h2 className=' text-green-100'><GoCheckCircleFill/></h2>
                                                        
                                    </div>
                                    <div className=' mx-2 text-sm'>
                                        <h2>Order Received</h2>
                                        <p>Status was set to received</p>
                                    </div>
                                        
                                
                                    
                                </div>
                                <div>
                                    <h2 className='text-sm'>24-Aug-2023</h2>
                                </div>

                            </div>
                        
                        </div>

                    </div>
                </div>
            
           
            

            </div>
        </div>
    </div>
  )
}

export default OrderView