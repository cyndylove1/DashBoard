import React from 'react'

import SideBar from '../SideBar/SideBar';
import NavPage from '../NavPage/NavPage';
// import LinksData from '../LinksData/LinksData';


const Main = () => {
  return (
    <div className=''>
     <section>
        <div className='grid grid-cols-12'>
          <div className='col-span-2 bg-white h-screen'>
            <SideBar/>
          </div>

          <div className='col-span-10 bg-grey h-90 w-100'>
          
            <NavPage/>
            
            
            
            
          </div>

        </div>
      </section>

          
    </div>
  )
}

export default Main
