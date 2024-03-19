import { useState } from 'react'
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import { GymContext } from '@/contexts/gymContext'
import { Pages } from '@/shared/types'
import CalcLayout from './Layout/CalcLayout'
import MainLayout from './Layout/MainLayout'
import BlogLayout from './Layout/BlogLayout'
import ProductLayout from './Layout/ProductLayout'
import Signup from './Layout/Signup'
import CheckoutLayout from './Layout/CheckoutLayout'


function App() {
  const [selectedPage, setSelectedPage] = useState(Pages.Home)
  const [isToggle, setToggle] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [currentUser, setCurrentUser] = useState({})
  const [total, setTotal] = useState(0)

  // const getCartProduct = (currentUser: any) => {
  //   const previousCart = window.localStorage?.getItem(currentUser.email)
  //     console.log(previousCart);
      
  //     return JSON.parse(previousCart) ? JSON.parse(previousCart) : []
  //     console.log('hyr');
    

  // }
  const [cartProduct, setCartProduct] = useState([])
  console.log(cartProduct)
  console.log(currentUser)


  const route = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='' element={<MainLayout />} />
        <Route path='calculators' element={<CalcLayout />} />
        <Route path='blogs' element={<BlogLayout />} />
        <Route path='products' element={<ProductLayout />} />
        <Route path='signup' element={<Signup />} />
        <Route path='checkout' element={<CheckoutLayout />} />
      </>
    )
  )

  return (
    <>
      <GymContext.Provider value={{ selectedPage, setSelectedPage, isToggle, setToggle, cartProduct, setCartProduct, quantity, setQuantity, total, setTotal, currentUser, setCurrentUser }}>
        <div>
          <RouterProvider router={route} />
        </div>
      </GymContext.Provider>
    </>
  )
}

export default App
