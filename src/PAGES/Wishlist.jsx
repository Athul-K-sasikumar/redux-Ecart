import React from 'react'
import Header from '../Components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishlistItem } from '../redux/slices/wishlistSlice'
import p1 from '../assets/y6.gif'
import { addToCart } from '../redux/slices/cartSlice'

const Wishlist = () => {
  const myWishlist = useSelector(state => state.wishlistReducer)
  const myCart =useSelector(state=>state.cartReducer)

  const dispatch = useDispatch()


  const handleAddToCart =(product)=>{
    const existingProduct = myCart?.find(item=>item.id==product.id)
    if(existingProduct){
     dispatch(addToCart(product))
     dispatch(removeWishlistItem(product.id))
     alert("product quantity is incrementing")
    }else{
      dispatch(removeWishlistItem(product.id))
     dispatch(addToCart(product))
    }
   }


  return (
    <>
      <Header />
      <div style={{ marginTop: '20px' }} className='container mx-auto px-4 flex-grow   '>
        {
          myWishlist.length > 0 ?
            <>
              <h1 className='text-center font-bold text-5xl text-gray-800 pb-[40px]'>Your Wishlist</h1>
              <div className="grid grid-cols-4 gap-4 ">
                {
                  myWishlist?.map(product => (



                    <div key={product?.id} className="rounded border p-2 shadow ">
                      <img style={{ width: '100%', height: '200px', paddingTop: '10px', paddingRight: '10px', paddingLeft: '10px' }} src={product?.thumbnail} alt="" />
                      <div className='text-center'>
                        <h3 className="text-xl font-bold">{product?.title}</h3>
                        <div className="flex justify-evenly mt-3">
                          <button onClick={() => dispatch(removeWishlistItem(product?.id))} className='text-xl' ><i className="fa-solid fa-heart-circle-xmark text-red-600"></i></button>
                          <button onClick={()=>handleAddToCart(product)}  className='text-xl'><i className="fa-solid fa-heart-circle-xmark text-green-600"></i></button>

                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </> :
            <div className=' flex flex-col justify-center items-center ' >
              <h2 className='text-center text-blue-950 font-bold text-5xl pl-[30px] pb-[20px] pt-[20px] '>Your wishlist is empty</h2>

              <img className='justify-center' src={p1} alt="" />
            </div>
        }

      </div>
    </>
  )
}

export default Wishlist