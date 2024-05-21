import React from 'react'
// import Main from '../Main/Main'
import { BiStoreAlt } from "react-icons/bi";
import { IoBagOutline } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import clsx from  'clsx';
import { IoCloseOutline } from "react-icons/io5";
import { FaFileUpload } from "react-icons/fa";


const DashBoard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)  
  const [isOpen, setIsOpen] = useState(false)  
  return (
    <div className =''>
      
  
      
      
      
        <div className=''>
          <div className=' '>
            <div className='flex justify-between items-center py-10 mx-10'>
              <div className=''>
                <h2 className='text-xl font-medium'>Let’s set up your store, Theshoeshop.</h2>
                <p>Here are some things you need to do before you can sell on Quickshop</p>

              </div>
              <div>
                <Link to='/dashboard/dashboard2'>
                  <IoIosArrowRoundForward/>
                </Link>

              </div>

            </div>
            
            <div className='flex mx-4 '>
              <Link>
                <div className='bg-white rounded-2xl mx-4' onClick={()=> setIsMenuOpen(true)}>
                  <div className=' p-6 '>
                    <h2 className='bg-skyBlue pt-7 text-blue w-10 h-16 pl-5 text-lg rounded-full'><BiStoreAlt className='' /></h2>
                    <h2 className='py-2 font-medium'>Store Details</h2>
                    <p className='text-sm pb-4'>Update your store information so you can <br /> start selling your products.</p>
                  </div>
                  
                </div>
                </Link>
              
              <Link>
                <div className='bg-white rounded-2xl mx-4'  onClick={()=> setIsOpen(true)}>
                  <div className='p-6'>
                    <h2 className='bg-lightGreen pt-7 text-darkGreen w-10 h-16 pl-5 text-lg rounded-full'><IoBagOutline className='' /></h2>
                    <h2 className='py-2 font-medium'>Add Payment Information</h2>
                    <p className='text-sm pb-4'>Verify your BVN and set up the account <br /> you will like to receive payments.</p>
                  </div>
                  
                </div>
            </Link>
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

        

        <div className={clsx('fixed bg-black/10 t  transition-all backdrop-blur-sm top-0 right-0 w-full h-full -translate-x-full', isMenuOpen && 'translate-x-0')}>
            <div className='text-black bg-white absolute right-0 top-0 h-screen w-full z-50 '>
                
                <div className='flex mt-4 ml-10'>
                  <div className='cursor-pointer'>
                      <IoCloseOutline onClick={()=>setIsMenuOpen(false)} className='text-4xl bg-skyBlue text-black rounded-full '/>
                      

                  </div>
                  <div>
                    <h2 className='mx-4 text-xl'>Complete your store setup</h2>
                  </div>

                </div>
                <div className='flex justify-center'>
                  <div>
                    <div className=' text-center '>
                      <h2 className='text-2xl font-medium'>Store Documents</h2>
                      <p className='py-2'>Upload these documents to set up your store.</p>
                    </div>
                  <div className='flex'>

                      <div className='flex flex-col'>
                        <div>
                          <h2> <h3 className=' ml-7 pb-2 text-sm font-medium'>Store logo</h3></h2>
                        </div>
                        
                        <div className=' bg-skyBlue w-10 h-10 mx-10 rounded-full'>
                          <h2 className=' py-2 mx-3 text-sm font-medium'>LO</h2>
                          </div>
                        

                      </div>
                      <div>
                            <form className='border-1 border-gray w-60 p-10 mb-6 text-center rounded-lg'>
                                
                                  
                                    <input type="file" id="upload" accept=".doc, .docx, .Pdf"  className='input-field' hidden />
                                    <div className='bg-amber text-red flex justify-center w-10 h-10 ml-24 rounded-full'>
                                        <h2><FaFileUpload  className=' mt-2 pt-3'/></h2>
                                        
                                    </div>
                                   
                                <p className='text-sm'><span className='text-red font-medium'>Click to Upload </span>or drag and drop <br /> Minimum of 2MB required</p>
                                
                             
        
                            </form>
                              <form action="">
                                    <b><label htmlFor="" className=' py-2'>Identification Type</label> <br /></b> 
                                    <select name="" id="" className='h-22 border-1 border-gray w-60 px-4 my-4 rounded-md outline-none'>
                                         <option value="">Select an Identification Type</option>
                                    </select>
                                    <div>
                                        <b><label htmlFor="">Upload Certificate of Incorporation</label></b>
                                        <input type="text" placeholder='Click to Upload a document ' className='w-60 h-22 border-1 border-gray w-100 px-4 mt-2 rounded-md outline-none' />
                                            
                                    </div>
                                    <div className='-mt-9 mx-4'>
                                        <h2 className='ml-21 text-gray'><FaFileUpload/></h2>
                                            
                                    </div>
                                    
                                        
                                    <div className='w-60 py-8 mt-10 mb-32 text-center bg-orange-300 rounded-lg'>
                                        <button className='w-99 font-medium text-white'>Continue</button>
                                    </div>

                                    
                                </form>
                        </div>



                    </div>
                    
                    
                    
                  </div>

                </div>
               
                
                
            </div>
           
        </div>
        

        <div className={clsx('fixed bg-black/10 t  transition-all backdrop-blur-sm top-0 right-0 w-full h-full -translate-x-full', isOpen && 'translate-x-0')}>
            <div className='text-black bg-white absolute right-0 top-0 h-screen w-full z-50 '>
                
                <div className='flex mt-4 ml-10'>
                  <div className='cursor-pointer'>
                      <IoCloseOutline onClick={()=>setIsOpen(false)} className='text-4xl bg-skyBlue text-black rounded-full '/>
                      

                  </div>
                  <div>
                    <h2 className='mx-4 text-xl'>Complete your Payment setup</h2>
                  </div>

                </div>
                <div className=''>
                  <div className='text-center py-4 '>
                    <h2 className='text-2xl '>Add Your Payment Information</h2>
                    <p className='py-2'>Fill in these details to set up payment processing.</p>

                  </div>
                  
                  <form action="" className='ml-46'>
                    <div className ='my-4'>
                      <label htmlFor="" className='font-medium'>Bank Name</label><br />
                      <select name="" id="" className='w-99 outline-none border-1 border-grey h-12 px-2 rounded-lg mt-2'>
                        <option value="">Select your Bank</option>
                      </select><br />
                    </div>
                    <div className='my-4'>
                      <label htmlFor="" className='font-medium'>Account Number</label><br />
                      <input type="text" placeholder='Account Number' className='w-99 outline-none border-1 border-grey h-12 px-2 rounded-lg mt-2' /> <br />
                    </div>
                    <div className='my-4'>
                      <label htmlFor="" className='font-medium'>Bank Verification Number (BVN)</label><br />
                      <input type="text" placeholder='Bank Verification Number (BVN)'  className='w-99 mt-2 outline-none border-1 border-grey h-12 px-2 rounded-lg'/> <br />
                    </div>
                      <div className='my-4'>
                        <button className='bg-orange-300 text-center w-99 h-12 rounded-lg my-4 text-white font-medium'>Continue</button>
                      </div>
                    
                  </form>

                </div>
                
               
                
            </div>
           
        </div>
        
      
         
      
      

          
       
    </div>
  )
}

export default DashBoard