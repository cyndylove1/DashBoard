import React from 'react'
import { BiStoreAlt } from "react-icons/bi";
import { IoBagOutline } from "react-icons/io5";



const DashBoard2 = () => {
  return (
    <div className =''>
      
      
      
        <div className=''>
          <div className=' '>
            <div className='flex justify-between items-center py-10 mx-10'>
              <div className=''>
                <h2 className='text-xl font-medium'>Good afternoon, Theshoeshop.</h2>
                <p>Here are some things you need to do before you can sell on Quickshop</p>

              </div>
              {/* <div>
                <Link to='/Store'>
                  <IoIosArrowRoundForward/>
                </Link>

              </div> */}

            </div>
            
            <div className='flex mx-4 '>
              <div className='bg-white rounded-2xl mx-4 w-34'>
                <div className=' p-6 '>
                  <h2 className='bg-orange-100 pt-7 text-red w-10 h-16 pl-5 text-lg rounded-full'><BiStoreAlt className='' /></h2>
                  <h2 className='py-2 '>Total Sales</h2>
                  <b>10000</b>
                  
                </div>
                
              </div>
              <div className='bg-white rounded-2xl mx-4 w-34'>
                <div className='p-6'>
                  <h2 className='bg-skyBlue pt-7 text-blue w-10 h-16 pl-5 text-lg rounded-full'><IoBagOutline className='' /></h2>
                  <h2 className='py-2 '>Pending Orders</h2>
                  <b>5</b>
                </div>
                
              </div>
              <div className='bg-white rounded-2xl mx-4 w-34'>
                <div className='p-6'>
                  <h2 className='bg-lightGreen pt-7 text-darkGreen w-10 h-16 pl-5 text-lg rounded-full'><IoBagOutline className='' /></h2>
                  <h2 className='py-2 '>Completed Orders</h2>
                  <b>24</b>
                  
                </div>
                
              </div>
            </div>

            <div className='mx-10 mt-6 pb-4'>
              <h2 className='font-medium text-xl'>Recent Transactions</h2>
              <p className='pt-2'>Your store overview will appear here once you start selling.</p>
            </div>

            <div>
              <div className=''>
                <div className=' h-14 mx-6 rounded-md bg-white'>

                </div>

              </div>
            </div>

          </div>
          
          

        </div>
         
      
      

          
       
    </div>
  )
}

export default DashBoard2