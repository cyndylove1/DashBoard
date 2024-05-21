import React from 'react'
import image from '../Image/images.jpg'
import { IoChevronForward } from "react-icons/io5";
import { IoChevronBackOutline } from "react-icons/io5";


const ProductTable = () => {
  return (
    <div>
        <div className='bg-white h-60 mx-10 rounded-2xl  mt-6'>
            <table className='w-full bg-white p-10 '>
              <thead className='bg-white border-b-1 border-grey h-10 '>
                <tr className='px-10 '>
                  <th className='font-medium tracking-wide text-left px-6'>Product Name</th>
                  <th className='font-medium tracking-wide text-left px-6'>Price</th>
                  <th className='font-medium tracking-wide text-left px-6'>Quantity Sold</th>
                  <th className='font-medium tracking-wide text-left px-6'>Date Added</th>
                  <th className='font-medium tracking-wide text-left px-6'>Details</th>
                </tr>

              </thead>
              
              
              <tr className='bg-white border-b-1 border-grey h-12'>
                <td className='px-6'>
                  <div className=''>
                    <div className='flex '>
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
                <td className='px-6'>
                  <h2>2 of 30</h2>
                </td>
                <td className='px-6'>
                  <h2>10-Aug-2024</h2>
                </td>
                <td className='px-6'>
                  <h2 className='border-grey border-1 text-center w-14 py-1 rounded-md '>View</h2>
                </td>

              </tr>
              
              <tr className='bg-white  border-b-1 border-grey h-12'>
                <td className='px-6'>
                  <div className='bd-white'>
                    <div className='flex '>
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
                <td className='px-6'>
                  <h2>2 of 30</h2>
                </td>
                <td className='px-6'>
                  <h2>10-Aug-2024</h2>
                </td>
                <td className='px-6 '>
                  <h2 className='border-grey border-1 text-center w-14 py-1 rounded-md'>View</h2>
                </td>

              </tr>
              
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
  )
}

export default ProductTable
