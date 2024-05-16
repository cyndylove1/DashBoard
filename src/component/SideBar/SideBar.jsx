import React from 'react'
// import { NavLink } from 'react-router-dom'
import logo from '../Image/cN1g46Vw_400x400.png'
import { TbLogout2 } from "react-icons/tb";
import { DashBoardLinks } from '../Navigation';
import { NavLink } from 'react-router-dom';
import { MdHeadset } from "react-icons/md";
import { useLocation } from 'react-router-dom';

const SideBar = () => {
  const {pathname} = useLocation()
  return (
    <div>
      <aside className=" w-[211px] top-0 border-r-2 border-grey ">
      <div className=''>
                <div className=' pt-2 pb-10 px-2'><img src={logo} alt="" className='inline-block w-10'/><h2 className='inline-block text-2xl font-bold'>Quick<span className='text-red'>Shop</span></h2></div>

            </div>
            {
                DashBoardLinks.map((items)=>{
                    return(
                        <div className='' key={items.key}>
                            <div>
                                {/* <h2>{items.Label}</h2> */}

                            </div> 
                            <div className='flex-col '>
                                <div className='py-2'>
                                    <div className={('my-2 flex-1 text-dark-gray ', pathname === items.path ? 'text-red bg-orange-100': 'text-dark-gray' )}>
                                        <NavLink to={items.path}>
                                            <h2 className='py-2  px-4 w-[250px] hover:bg-orange-100 hover:text-red '><span className='inline-block mx-2 '>{items.icon}</span>{items.Label}</h2>
                                        
                                            
                                        </NavLink>

                                    </div>
                                    
                                </div>
                            

                            </div>
                           


                        </div>
                        

                    )

                })
            }
            {/* <div className='pt-10 '>
                <div className='hover:bg-orange-100 hover:text-red w-100 my-2'>
                    <h2 className='text-dark-gray hover:text-red py-2 px-6  '><LuLayoutDashboard   className='inline-block mx-2'/>Dashboard</h2>
                 </div>
                <div className='hover:bg-orange-100 hover:text-red w-100 my-2'>
                    <h2 className='text-dark-gray hover:text-red py-2 px-6 '><BiStoreAlt className='inline-block mx-2'/>Products</h2>
                 </div>
                <div className='hover:bg-orange-100 hover:text-red w-100 my-3'>
                    <h2 className='text-dark-gray hover:text-red py-2 px-6 '><IoBagOutline  className='inline-block mx-2'/>Orders</h2>
                 </div>
                <div className='hover:bg-orange-100 hover:text-red w-100 my-2'>
                    <h2 className='text-dark-gray hover:text-red py-2 px-6 '><AiOutlineInbox  className='inline-block mx-2'/>Transactions</h2>
                 </div>
                <div className='hover:bg-orange-100 hover:text-red w-100 my-2 '>
                    <h2 className='text-dark-gray hover:text-red py-2 px-6 '><IoSettingsOutline  className='inline-block mx-2'/>Settings</h2>
                </div>
                
                

            </div> */}
            <div className='mt-25'>
              <div className='p-4 bg-orange-100 rounded-xl w-48 ml-2 mt-21 '>
                <h2 className='text-red text-xs'><MdHeadset className='inline-block' /><span className='mx-1 font-medium'>Need Help?</span></h2>
                <p className='text-xs'>Share your concerns with us <br /> via +234 9077883377 or <br />
                  support@quickshop.com</p>
              </div>
              <div className='pt-20 px-2'>
                <h2 className='text-dark-gray'><TbLogout2 className='inline-block mx-2' />Logout</h2>

            </div>
            </div>
            
            
      
     
    </aside>
  
    </div>
  )
}

export default SideBar