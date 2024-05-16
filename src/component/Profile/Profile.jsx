import React from 'react'

const Profile = () => {
  return (
    <div>
      <div className=''>
       
        <div className='flex mt-10'>

          <div className='bg-white w-99 rounded-lg ml-10'>
              <form action="">
                <div className='bg-white '>
                <div className='py-4'>
                <h3 className='mx-4 font-medium '>Basic Information</h3>
              </div>
                  <div className='flex my-4'>
                    <div className='w-99 mx-4 '>
                      <label htmlFor="" className='font-medium'>First Name</label><br />
                      <input type="text" placeholder='First Name'  className=' px-2 mt-2 h-22 outline-none border-1 border-gray w-100 rounded-lg'/><br />

                    </div>
                    <div className='w-99 mx-4'>
                      <label htmlFor="" className='font-medium'>Last Name</label><br />
                      <input type="text" placeholder='Last Name' className='h-22 px-2 mt-2 outline-none border-1 border-gray w-100 rounded-lg'/><br />

                    </div>

                    


                  </div>
                  
                </div>
                <div className='m-4'>
                  <label htmlFor="" className='font-medium'>Email Address</label><br />
                  <input type="text" placeholder='Email Address'  className='h-22 px-4 mt-2 outline-none border-1 border-gray w-100 rounded-lg'/><br />
                </div>
                <div className='m-4'>
                <label htmlFor="" className='font-medium'>Phone Number</label><br />
                <input type="text" placeholder='Phone Number' className='h-22 mt-2 px-2 outline-none border-1 border-gray w-100 rounded-lg ' /><br />

                </div>
               

                <div className=' font-medium text-sm float-right mx-4 my-4'>
                  <button className='py-8 px-6 rounded-lg mt-4 mb-10 bg-gradient-to-r from-red to-orange text-white '>Save Changes</button>

                </div>
                
                

              </form>



              
            
          </div>
          <div className='w-99 bg-white mx-10 h-35 rounded-lg'>
            <form action="">
              <h2 className='mx-4 font-medium  py-2'>Password</h2>
              <div className='mx-4'>
                <label htmlFor="" className='font-medium'>Current Password</label><br />
                <input type="text" placeholder='Current Password'  className='h-22 my-2 px-2 outline-none border-1 border-gray w-100 rounded-lg'/><br />

              </div>
              <div className='mx-4'>
                
                <label htmlFor="" className='font-medium' >New Password</label><br />
                <input type="text" placeholder='New Password' className='h-22 mt-2 px-2  outline-none border-1 border-gray w-100 rounded-lg' /><br />

              </div>
              <div className='mt-4 float-right mx-4 '>
                <button className='text-white bg-orange-300 py-8 px-10 rounded-lg mb-10'>Update Password</button>
              </div>
              

            </form>

          </div>
          

        </div>
        
      </div>
    </div>
  )
}

export default Profile