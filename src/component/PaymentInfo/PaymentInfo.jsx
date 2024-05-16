import React from 'react'


const PaymentInfo = () => {
  return (
    <div>
      <div>
        
        <div className='float-right -mt-24 mx-10  '>
          <button className='bg-gradient-to-r from-red to-orange  px-4 py-2 rounded-lg text-white'>Add New</button>
        </div>
        <div className='h-78 bg-white mx-10 '>
          <div className='h-78 rounded-lg'>
                <table className='mt-10 '>
                <thead className='bg-white border-b-1 border-grey h-10'>
                  <tr className='pt-10 bg-white border-b-1 border-grey h-10 pt-10'>
                    <th className='font-medium tracking-wide font-medium px-10 text-sm'>Account Number</th>
                    <th className='font-medium tracking-wide font-medium px-10 text-sm'>Account Bank</th>
                    <th className='font-medium tracking-wide font-medium px-10 text-sm'>Account Name</th>
                    <th className='font-medium tracking-wide font-medium px-10 text-sm'>Currency</th>
                    <th className='font-medium tracking-wide font-medium px-10 text-sm'>Details</th>

                  </tr>
                  
                </thead>
                <tr className='bg-white border-b-1 border-grey h-56'>
                  <td className='px-10 text-sm'>2079865678</td>
                  <td className='px-10 text-sm'>Olutade Adeboye Joseph</td>
                  <td className='px-10 text-sm'>United Bank for Africa</td>
                  <td className='px-10 text-sm'>Naira</td>
                  <td className='px-10 '>
                    <h2 className='border-gray border-1 text-center w-14 py-1 rounded-md'>Delete</h2>
                  </td>
                  
                </tr>
                <tr className='bg-white border-b-1 border-grey h-56'>
                  <td className='px-10 text-sm'>2079865678</td>
                  <td className='px-10 text-sm'>Olutade Adeboye Joseph</td>
                  <td className='px-10 text-sm'>United Bank for Africa</td>
                  <td className='px-10 text-sm'>Naira</td>
                  <td className='px-10 '>
                    <h2 className='border-gray border-1 text-center w-14 py-1 rounded-md'>Delete</h2>
                  </td>
                  
                </tr>
              </table>

          </div>
        </div>
       
      </div>
    </div>
  )
}

export default PaymentInfo