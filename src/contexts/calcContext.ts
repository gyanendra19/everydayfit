import React, { useContext } from "react";

export type calcContextType = {
    toggleCalc: string,
    setToggleCalc: (value: string) => void
}

export const calcContext = React.createContext<calcContextType | null>(null)

export function useCalcContext(){
    return useContext(calcContext)
}