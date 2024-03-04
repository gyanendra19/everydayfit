import { calcContextType, useCalcContext } from '@/contexts/calcContext'
import React from 'react'

type Props = {
    children: string
}

function CalcLinks({children}: Props) {
    const {toggleCalc, setToggleCalc} = useCalcContext() as calcContextType
    const lowerCasePage = children.toLowerCase().replace(/ /g , "") as string

  return (
    <button
    className={`${toggleCalc === lowerCasePage ? "opacity-60" : ""} cursor-pointer`}
    onClick={() => setToggleCalc(lowerCasePage)}
    >
        {children}
    </button>
  )
}

export default CalcLinks