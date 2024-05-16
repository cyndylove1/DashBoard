import React from 'react'
import { FaFileUpload } from "react-icons/fa";

const StoreDetails = () => {
  return (
    <div>
      <div className='flex'>
        <div className='bg-white w-99 mt-10 rounded-lg ml-10'>
          <h2 className='mx-4 font-medium py-6'> About Store</h2>
          <div className='flex'>
            <div className='flex flex-col mx-4'>
              <div>
                <h2>Store Logo</h2>
              </div>
              <div className=' bg-skyBlue w-10 h-10 mx-4 rounded-full'>
                <h2 className=' py-2 mx-3 text-sm font-medium'>LO</h2>
              </div>

            </div>
              
            <div className='flex items-center '>
              <h4 className='border-1 mt-4 px-4 rounded-lg py-2'><FaFileUpload className='inline-block'/><span className=''>Change Photo</span></h4>

            </div>
          </div>
          <form action="">
            <div className='m-4'>
              <label htmlFor="" className='font-medium'>Business Name</label><br />
              <input type="text" placeholder='Business Name' className='h-22 mt-2 px-2 outline-none border-1 border-gray w-100 rounded-lg'/><br />

            </div>
            <div className='m-4'>
              <label htmlFor="" className='font-medium'>Store Category</label><br />
              <input type="text" placeholder='Store Category'  className='h-22 px-2 mt-2 outline-none border-1 border-gray w-100 rounded-lg' /><br />

            </div>
            <div className='m-4'>
              <label htmlFor="" className='font-medium'>Country</label><br />
              <input type="text" placeholder='Country'  className='h-22 mt-2 px-2 outline-none border-1 border-gray w-100 rounded-lg' /><br />

            </div>
            <div className='m-4'>
              <label htmlFor="" className='font-medium'>Store Description</label><br />
              <input type="text" placeholder='Store Description'  className='h-22 px-2 mt-2 outline-none border-1 border-gray w-100 rounded-lg' /><br />

            </div>
            <div className='float-right mx-4 mt-2 mb-12'>
              <button className='bg-gradient-to-r from-red to-orange py-8 px-7 rounded-lg text-white font-medium'>Save Changes</button>
            </div>
            
          </form>
        </div>
        <div className='mt-10 w-99 mx-10 h-35'>
          <div className=''>
            <div className='bg-white rounded-lg h-17'>
              <h2 className='font-medium mx-4 pt-6'>Social Media Handles</h2>
              <form action="">
                <div className='m-4'>
                  <label htmlFor="" className='font-medium'>X (fka as Twitter) URL</label><br />
                  <input type="text" placeholder='X (fka as Twitter) URL' className='h-22  px-2 my-2 outline-none border-1 border-gray w-100 rounded-lg' /><br />

                </div>
                <div className='mt-4 mx-4 mb-10'>
                  <label htmlFor="" className='font-medium'>Instagram URL</label><br />
                  <input type="text" placeholder='Instagram URL' className='h-22 my-2 px-2 outline-none border-1 border-gray w-100 rounded-lg' /><br />
                </div>
                
                
              </form>
            </div>
          </div>
          <div className='bg-white rounded-lg h-17 mt-6'>
            <h2 className='font-medium mx-4 pt-6'>Documents</h2>
          <div className=''>
            <form action="">
              <div className='m-4'>
                <label htmlFor="" className='font-medium'>Identification Type</label> <br />
                <input type="text" placeholder='Identification Type' className='h-22 my-2 px-2 outline-none border-1 border-gray w-100 rounded-lg' /><br />

              </div>
              <div className='m-4'>
                <label htmlFor="" className='font-medium'>Certificate of Incorporation</label><br />
                <input type="text" placeholder='Certificate of Incorporation' className='h-22 my-2 px-2 outline-none border-1 border-gray w-100 rounded-lg' /><br />
              </div>
              
            </form>
          </div>
        </div>

        </div>
        


        
      </div>
    </div>
  )
}

export default StoreDetails
