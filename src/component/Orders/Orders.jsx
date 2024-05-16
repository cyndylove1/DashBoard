import React from 'react'
import image from '../Image/images.jpg'
import { IoChevronForward } from "react-icons/io5";
import { IoChevronBackOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Orders = () => {
  // const {pathname} = useLocation()
  return (
    <div className=''>
      <div>
        <h2 className='mx-10 mt-10 font-medium text-xl'>Orders</h2>
        <div className='flex mt-10 mx-10'>
          <div className=''>
            <h2 className='ml-2'>All Orders <span className='text-xs h-4 px-2 bg-red text-white rounded-lg'>O</span></h2>
            <div className='border-b-1 border-red w-32 h-2'></div>
            
          </div>
          <div className='text-dark-gray'>
            <h2 className='mx-6'>Pending Orders <span className='text-xs h-4 px-2 bg-dark-gray text-white rounded-lg'>O</span></h2>
            
          </div>
          <div className='text-dark-gray'>
            <h2 className='mx-6'>Completed Orders <span className='text-xs h-4 px-2 bg-dark-gray text-white rounded-lg'>O</span></h2>
            
          </div>

        </div>
        <div className='bg-white h-78 mx-10 rounded-lg' >
          <div className='rounded-lg'>
            <table className=' mt-10 rounded-lg'>
              <thead className='bg-white border-b-1 border-grey h-10'>
                <tr className='pt-10 bg-white border-b-1 border-grey h-10 pt-10 '>
                  <th className=' font-medium tracking-wide font-medium px-6 '>Order ID</th>
                  <th className=' font-medium tracking-wide font-medium px-6 '>Product Name</th>
                  <th className=' font-medium tracking-wide font-medium px-6'>Cost</th>
                  <th className=' font-medium tracking-wide font-medium px-6 '>Quantity</th>
                  <th className=' font-medium tracking-wide font-medium px-6'>Order Date</th>
                  <th className=' font-medium tracking-wide font-medium px-6'>Status</th>
                  <th className=' font-medium tracking-wide font-medium px-6'>Details</th>
                </tr>
                <tr className='bg-white border-b-1 border-grey h-56'>
                  <td className='px-6'>1456</td>
                  <td className='px-6'>
                    <div className=''>
                      <div className='flex px-6 '>
                        <div>
                          <img src={image} alt="" className='h-6 w-6 mx-2 rounded-md' />
                        </div>
                        <div>
                          <h2>2021 NikeAirForce</h2>
                        </div>

                      </div>

                    </div>
                </td>
                <td className='px-6'>
                  <h2>&#8358;45,000</h2>
                </td>
                <td className='px-6'>1</td>
                <td className='px-6'>
                  <h2>10-Aug-2024</h2>
                </td>
                <div className='px-6 text-sm bg-lemon text-darkLemon rounded-lg py-2 my-2'>
                  <td className=''>Completed</td>

                </div>
                
                <td className='px-6 '>
                  <h2 className='border-grey border-1 text-center w-14 py-1 rounded-md'>View</h2>
                </td>
                
                  
                </tr>
                <tr className='bg-white border-b-1 border-grey h-56 mt-2'>
                  <td className='px-6'>1456</td>
                  <td className='px-6'>
                    <div className=''>
                      <div className='flex px-6 '>
                        <div>
                          <img src={image} alt="" className='h-6 w-6 mx-2 rounded-md' />
                        </div>
                        <div>
                          <h2>2021 NikeAirForce</h2>
                        </div>

                      </div>

                    </div>
                </td>
                <td>
                  <h2 className='px-6'>&#8358;45,000</h2>
                </td>
                <td className='px-6'>1</td>
                <td className='px-6'>
                  <h2>10-Aug-2024</h2>
                </td>
                <div className='my-2 pl-6 text-sm bg-BlushBlue text-navy rounded-lg py-2'>
                  <td className=''>Order Placed</td>
                  </div>
                  
                    <td className='px-6 '>
                      <Link to='/OrderView'><h2 className='border-grey border-1 text-center w-14 py-1 rounded-md'>View</h2></Link>
                    </td>
                  
                
                
                  
                </tr>
              </thead>
            </table>
            <div className='float-right flex items-center mr-10 mt-6'>
              <div className='mx-3'>
                <h2>Page 1 of 1</h2>

              </div>
              <div className='flex border-1 border-grey py-2 rounded-md'>
                <div>
                 <h2 className='mx-2'><IoChevronBackOutline /></h2>
                  

                </div>
                <div>
                  <h2 className='mx-2'><IoChevronForward/></h2>
                  
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
  
    </div>
  )
}

export default Orders