import React, { useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';
// import Header from '../Header/Header';
import { FaFileUpload } from "react-icons/fa";
import TipTap from '../TipTap';
import { BsTrash3 } from "react-icons/bs";
// import classNames from 'classnames';

const AddToProduct = () => {
    // const [isSelected, setIsSelected] = useState(false)
  return (
    <div>
    
        <div className='bg-grey h-91' id='AddToProduct'>
        <div className='flex items-center mx-10  text-dark-gray py-6'>
            <div className='hover:text-red '>
                <Link to='/Products'>Products</Link>
                
            </div>
            {/* <div className=''> */}
                <span className='inline-block'><IoIosArrowForward /></span>
                <div className='hover:text-red inline-block'>
                    <Link to='/Business'>Add a Product</Link>

                </div>
                
        </div>
        <div className='mx-10 py-4 text-lg font-medium'>
            <h2>Add a Product</h2>
        </div>
        <div>
            <div className='bg-white h-35 rounded-lg mx-10'>
                <h3 className='text-sm mx-4 py-2'>Upload Product Images</h3>
                <div>
                    <div>
                        <div className=' flex pt-5 ml-5 '>
                            <form className='border-dashed border-grey border-2 h-30 w-31 mx-2 rounded-lg '>
                                <div className='ml-10 mt-20 '>
                                    <input type="file" id="upload" accept=".doc, .docx, .Pdf"  className='input-field' hidden />
                                        <div className='text-red flex py-2 ml-24 rounded-full'>
                                            <h2><FaFileUpload  className=' '/></h2>
                                            
                                        </div>
                                    
                                    <p className='text-sm'><span className='text-red font-medium'>Click to Upload or drag and drop</span> </p>

                                </div>
                                    
                                    
                                    
                                
                            
        
                            </form>
                            <form className=' border-dashed border-grey border-2 h-30 w-31 mx-2 rounded-lg'>
                                <div className='ml-10 mt-20'>
                                    <input type="file" id="upload" accept=".doc, .docx, .Pdf"  className='input-field' hidden />
                                        <div className='text-red flex  py-2 ml-24 rounded-full'>
                                            <h2><FaFileUpload  className=' '/></h2>
                                            
                                        </div>
                                    
                                    <p className='text-sm'><span className='text-red font-medium'>Click to Upload or drag and drop</span> </p>
                                
                            
                                    
                                </div>
                                    
                                    
                                    
        
                            </form>
                            <form className='border-dashed border-grey border-2 h-30 w-31 mx-2 rounded-lg'>
                                <div className='ml-10 mt-20'>
                                    <input type="file" id="upload" accept=".doc, .docx, .Pdf"  className='input-field' hidden />
                                        <div className='text-red flex py-2 ml-24 rounded-full'>
                                            <h2><FaFileUpload  className=' '/></h2>
                                            
                                        </div>
                                    
                                    <p className='text-sm'><span className='text-red font-medium'>Click to Upload or drag and drop</span> </p>
                                    

                                </div>
                                    
                                    
                                    
                            
        
                            </form>

                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div className='flex mx-10 mt-10'>
            <div className='bg-white w-99 py-10 rounded-lg'>
                <div className='mx-4 text-sm font-medium'>
                    <h2>Product Details</h2>
                </div>
                <div className='mx-4'>
                    <label htmlFor="" className='text-sm font-medium'>Product Name</label><br />
                    <input type="text" placeholder='Your Product Name' className='w-97 outline-none h-10 border-1 border-grey px-4 rounded-lg text-sm my-2'/> <br />

                </div>
                <div className='mx-4'>
                    <label htmlFor="" className='text-sm font-medium'>Product Description</label><br />
                    <div className='border-1 border-grey rounded-lg my-2'>
                        <TipTap/>

                    </div>
                    
                       
                    <label htmlFor="" className='font-medium text-sm'>Product Category</label><br />
                    <select name="" id="" className='w-97 outline-none border-1 border-grey h-10 rounded-lg px-4 text-sm my-2'>
                        <option value="">Select a Category</option>

                    </select>
                    <div>
                        <div className='flex'>
                            <div>
                                <label htmlFor="" className='font-medium text-sm'>Selling Price</label>
                                <div className='flex border-1 outline-none border-grey rounded-lg h-10 w-90 mr-2 '>
                                    <div className='border-r-1 border-grey px-4'>
                                        <h2>&#8358;</h2>
                                    </div>
                                    <div>
                                        <input type="text" placeholder='Your Selling Price' className='outline-none' />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="" className='font-medium text-sm'>Discount Price</label>
                                <div className='flex border-1 outline-none border-grey rounded-lg h-10 w-90 mr-2 '>
                                    <div className='border-r-1 border-grey px-4'>
                                        <h2>&#8358;</h2>
                                    </div>
                                    <div className=''>
                                        <input type="text" placeholder='Your Discount Price '  className='outline-none'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                
                    
                   
                   
                </div>
                <div className='mx-4'>
                    <label htmlFor="" className='text-sm font-medium'>Number of items in Stock</label><br />
                    <input type="text" placeholder='how many items do you have?' className='w-97 outline-none h-10 border-1 border-grey px-4 rounded-lg text-sm my-2'/><br />

                </div>
                <div className=''>
            <div className='text-sm'>
                <h2>Enable Pickup</h2>
                <p>Buyers will be able to pickup from your address</p>
                <h3>No 9, Fola Agoro Street, Yaba, Lagos</h3>

            </div>
            <div className='flex w-10 h-5 bg-lightGray rounded-full mx-32'> 
                <span className='h-5 w-5 bg-red rounded-full'></span>

               

               
            </div>
            
        </div>
                
                
                
            </div>
            <div className='ml-10 '>
                <div className='bg-white h-60 rounded-lg'>
                    <div className='flex justify-between items-center w-full'>
                        <div className='px-4'>
                            <h3 className='font-medium text-sm pt-10'>Product Options</h3>
                            <p className='text-sm '>Use this if your product includes colors and sizes.</p>
                        </div>
                        <div className='  mx-4'>
                            <button className=' bg-gradient-to-r from-red to-orange px-4 py-1 mt-2 rounded-lg text-white font-medium '>Add</button>
                        </div>
                    </div>
                    <div className='flex mt-10'>
                        <div className='w-40 mx-2 border-1 border-grey h-10 rounded-lg'>
                            <select name="" id="" className='outline-none w-full px-4'>
                                <option value="" className='w-full'>Color</option>
                            </select>
                        </div>
                        <div className='w-40 border-1 border-grey outline-none mx-2 rounded-lg'>
                            <input type="text" placeholder='Add a Color' className='px-4' />
                        </div>
                        <div className='w-7 h-7 rounded-full bg-BlushPink flex justify-center ml-2'>
                            <h2 className='text-red text-sm py-1'><BsTrash3/></h2>

                        </div>
                    </div>
                   

                </div>
                <div className='bg-white h-77 rounded-lg mt-4'>
                    <div className='flex items-center'>
                        <div className='px-4'>
                            <h3 className='font-medium text-sm pt-10'>Product Variants Table</h3>
                            <p className='text-sm '>Edit your product combinations from selected options</p>
                        </div>
                        
                        <div className='mx-4'>
                            <button className='bg-gradient-to-r from-red to-orange px-4 py-1 mt-2 rounded-lg text-white font-medium'>Add</button>
                        </div>
                    </div>
                    <table>
                        <thead>
                            <tr className='px-10'>
                                <th className='font-medium tracking-wide text-left px-4'>Options</th>
                                <th className='font-medium tracking-wide text-left px-4'>Price</th>
                                <th className='font-medium tracking-wide text-left px-6'>Stock Count</th>
                                <th className='font-medium tracking-wide text-left px-6'>Status</th>
                            </tr>
                        </thead>
                        <tr>
                            <td className='px-4'>Blue, Large</td>
                            <td className='px-4'>&#8358;2000</td>
                            <td className='px-6'>20</td>
                            <td className='px-4'>
                                <select name="" id="">
                                    <option value="">In Stock</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td className='px-4'>Blue, Large</td>
                            <div className='rounded-lg mt-2'>
                                <td className='px-4 border-1 border-grey h-10 mt-2 w-4 pt-2'>2000</td>

                            </div>
                            
                            {/* <div className=''>
                                <td className='px-6 border-1 border-grey h-10 mt-2 w-4 pt-2'>2000</td>

                            </div> */}
                           
                            
                            
                        </tr>
                    </table>
                </div>
            </div>
            
            
        </div>
        
            
        
        </div>
    </div>
  )
}

export default AddToProduct