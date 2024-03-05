import CalcHead from "@/CalcComponent/CalcHead"
import CalcInput from "@/CalcComponent/CalcInput"
import CalcResults from "@/CalcComponent/CalcResults"
import Footer from "@/components/Footer"
import {calcContext} from '@/contexts/calcContext'
import { useState } from "react"

function CalcLayout() {
  const [toggleCalc, setToggleCalc] = useState('dailycalorie')
  const [response, setResponse] = useState({})
  const [whichCalc, setWhichCalc] = useState('')

  return (
      <>
      <calcContext.Provider value={{toggleCalc, setToggleCalc, response, setResponse, whichCalc, setWhichCalc}}>
      <CalcHead />
      <CalcInput />
      <CalcResults />
      <Footer/>
      </calcContext.Provider>
    </>
  )
}

export default CalcLayout