import { useState } from 'react'
import {createBrowserRouter, Route, RouterProvider, createRoutesFromElements} from 'react-router-dom'
import { GymContext } from '@/contexts/gymContext'
import { Pages } from '@/shared/types'
import CalcLayout from './Layout/CalcLayout'
import MainLayout from './Layout/MainLayout'

function App() {
  const [selectedPage, setSelectedPage] = useState(Pages.Home)


  const route = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path='' element= {<MainLayout />} />
      <Route path='calculators' element ={<CalcLayout />} />
      </>
    )
  )

  return (
    <>
    <GymContext.Provider value={{selectedPage, setSelectedPage}}>
      <div>
        <RouterProvider router={route} />
      </div>
    </GymContext.Provider>
    </>
  )
}

export default App
