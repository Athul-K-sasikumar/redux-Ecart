import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../redux/slices/productSlice'
import pq from '../assets/9gu9.gif'

const Home = () => {
  const dispatch =useDispatch()
  const {allProducts,loading,error} = useSelector(state=>state.productReducer )
  const [currentPage,setCurrentPage]=  useState(1)
  const productPerPage= 8
  const totalPages = Math.ceil(allProducts?.length/productPerPage)
  const currentPageLastProductIndex = currentPage *productPerPage
  const currentPageStartProductIndex = currentPageLastProductIndex -productPerPage
  const visibleProductsCard =  allProducts?.slice(currentPageStartProductIndex,currentPageLastProductIndex)

 // console.log(allProducts);
  


  useEffect(()=>{
    dispatch(fetchAllProducts())
  },[])

const navigateToNextPage = () => {
  if(currentPage!= totalPages){
    setCurrentPage(currentPage+1)
  }
}

const navigateToPrevPage = () => {
  if(currentPage!=1){
    setCurrentPage(currentPage-1)
  }
}


  return (
    <>
      <Header insideHome={true}/>
      <div style={{marginTop:'20px'}} className='container mx-auto px-4 p-2'> 
        {
        loading ?
        <div style={{height:'60VH'}}  className='flex justify-center items-center font-bold'> <img className=' h-[150px]'  src={pq} alt="" /></div>
       
        :
 
      <>
          <div className="grid grid-cols-4 gap-4 ">
            {
              allProducts.length>0 ?
             visibleProductsCard?.map(product=>(
            <div key={product?.id} className="border-red-600 rounded border p-2 shadow mb-[10px] ml-[10px]">
              <img style={{width:'100%', height:'200px',paddingTop:'10px',paddingRight:'10px',paddingLeft:'10px'}} src={product?.thumbnail} alt="" />
              <div className='text-center'>
             <h3 className="text-xl font-bold p-2">{product?.title}</h3>
             <Link className='bg-green-600 text-white p-1 inline-block rounded ' to={`/${product?.id}/view`}> View More</Link>
              </div>
            </div>
  ))
            :
            <div className='font-bold text-center mt-5 mb-5 text-red-500'>Product not found!!</div>
            }
          </div>
          <div className="flex justify-center mt-5 mb-5">
            <span onClick={navigateToPrevPage} style={{cursor:'pointer'}}><i className='fa-solid fa-backward me-5 cursor-pointer'></i></span>
            <span className='font-bold'>{currentPage} /{totalPages}</span>
            <span onClick={navigateToNextPage} style={{cursor:'pointer'}}><i className='fa-solid fa-forward ms-5 cursor-pointer'></i></span>
          </div>
      </>
      }
      </div>
      </>
  )
}

export default Home