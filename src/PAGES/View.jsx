import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'

const View = () => {
 const myWishlist = useSelector(state=>state. wishlistReducer)
 const myCart =useSelector(state=>state.cartReducer)

 const dispatch  =useDispatch()
  const [product,setProduct]=useState({})
  const {id} = useParams()
 // console.log(id);


  useEffect(() =>{
    if(sessionStorage.getItem("allProducts")){
      const allProducts = JSON.parse(sessionStorage.getItem("allProducts"))
      setProduct(allProducts.find(item=>item.id==id))
    }
  },[])
  //console.log(product);
  
  const handleWishlist =(product)=>{
    if(myWishlist?.includes(product)){
      alert("product already in your wishlist")
    }
    else{
      dispatch(addToWishlist(product))
    }
  }

  const handleAddToCart =(product)=>{
   const existingProduct = myCart?.find(item=>item.id==product.id)
   if(existingProduct){
    dispatch(addToCart(product))
    alert("product quantity is incrementing")
   }else{
    dispatch(addToCart(product))
   }
  }
  
  return (
    <>
    <Header/>
    <div style={{minHeight:'90vh'}} className="flex justify-center items-center mx-5">
<div className='grid grid-cols-2 items-center'>
<img style={{width:'100%', height:'500px',paddingTop:'10px',paddingRight:'10px',paddingLeft:'10px'}} src={product?.thumbnail} alt="" />
<div>
  <h3 className='text-center'> PID: {product?.id}</h3>
  <h1 className="text-3xl font-bold">{product?.title}</h1>
  <h4 className='font-bold text-red-500 text-xl'>$ {product?.price}</h4>
  <p><span className='font-bold'>Discription</span> {product?.description}</p>
  <div className='flex justify-between m-5'>
  <button onClick={()=>handleWishlist(product)} className='bg-blue-600 text-white p-2 rounded' >Add to wishlist</button>
  <button onClick={()=>handleAddToCart(product)}  className='bg-green-600 text-white p-2 rounded'>Add to cart</button>
  </div>
</div>
</div>

    </div>
    
    </>
  )
}

export default View