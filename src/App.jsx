
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Wishlist from './PAGES/Wishlist'
import Home from './PAGES/Home'
import Cart from './PAGES/Cart'
import View from './PAGES/View'
import Pnf from './PAGES/Pnf'
import Footer from './Components/Footer'

function App() {
 

  return (
    <>
   <div className="flex flex-col min-h-screen" >
      <Routes >
        <Route path='/'  element={ <Home/> } />
        <Route path='/wishlist'  element={ <Wishlist/> } />
        <Route path='/cart'  element={ <Cart/> } />
        <Route path='/:id/view'  element={<View/> } />
        <Route path='/*'  element={<Pnf/> } />
  
        </Routes>
   </div>
      <Footer/>
    </>
        

  )
}

export default App
