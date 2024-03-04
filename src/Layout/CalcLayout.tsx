import CalcHead from "@/CalcComponent/CalcHead"
import CalcInput from "@/CalcComponent/CalcInput"
import CalcResults from "@/CalcComponent/CalcResults"
import Footer from "@/components/Footer"
import {calcContext} from '@/contexts/calcContext'
import { useState } from "react"

function CalcLayout() {
  const [toggleCalc, setToggleCalc] = useState('dailycalorie')

  return (
      <>
      <calcContext.Provider value={{toggleCalc, setToggleCalc}}>
      <CalcHead />
      <CalcInput />
      <CalcResults />
      <Footer/>
      </calcContext.Provider>
    </>
  )
}

export default CalcLayout