import React from 'react'

const StoreItems = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)  
  return (
    <div>
        <div className={clsx('fixed bg-black/10 t  transition-all backdrop-blur-sm top-0 right-0 w-full h-full -translate-x-full', isMenuOpen && 'translate-x-0')}>
            <div className='text-black bg-white absolute right-0 top-0 h-screen w-30 z-50 flex justify-between '>
                <div className='flex'>
                    <div>
                        Home <span className='inline-block'><RxSlash/></span>
                    </div>
                    <div>
                        <h2 className='text-red'>Cart</h2>
                    </div> 
                    {/* <div className='text-red'>{product.name}</div> */}
                
                </div>
                {/* <div>
                    <h4 className='text-2xl text-black'>Your Cart</h4>
                </div> */}
                <div className=''>
                    <IoCloseOutline onClick={()=>setIsMenuOpen(false)} className='text-2xl'/>
                    

                </div>
                
            </div>
        </div>
    </div>
  )
}

export default StoreItems
