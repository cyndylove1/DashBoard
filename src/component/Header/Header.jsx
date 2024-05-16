import React from 'react';
import { IoSearchOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div>
      <div className=' w-100 bg-white px-10'>
            <div className='flex justify-between'>
              <div className='h-12 relative flex items-center focus-within:text-black '>
                    <IoSearchOutline  className='absolute ml-4 pointer-events-none'/>
                    <input type="text" className='pl-10 h-10 w-100 border-2 border-gray rounded-md px-32  outline-none' placeholder='Search for any thing'/>
                                        
                                  
                </div>  
                <div className='py-2'>
                    <h2 className='h-8 w-8 rounded-full bg-orange-100 text-red text-center pt-3 inline-block mx-2'>T</h2>
                    <span className='font-medium'>Theshoeshop</span>

                </div>

            </div>
            
              
        </div>
    </div>
  )
}

export default Header