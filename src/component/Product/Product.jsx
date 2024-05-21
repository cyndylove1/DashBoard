import React from 'react'
import { useNavigate } from "react-router-dom";
import ProductTable from '../ProductTable/ProductTable';


const Product = () => {
  
  
  const navigate = useNavigate();
  return (
    
    <section className=''>
      
        {/* <Header/> */}
        <div>
          <div className='flex justify-between  items-center mx-10 pt-10'>
            <div>
              <h2 className='font-medium text-2xl'>Products</h2>

            </div>
            <div className='py-8 px-4 bg-gradient-to-r from-red to-orange text-white rounded-md'>
              
                <button onClick={()=> navigate('/AddToProduct')}>Add Product</button>
               
              
              
            </div>

           
          </div>
          
        </div>
        <ProductTable/>
        
           {/* <AddToProduct/> */}
        

        
       
       

      </section>
  )
}

export default Product
