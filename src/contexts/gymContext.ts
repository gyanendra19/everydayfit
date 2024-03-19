import React, { useContext } from "react";
import { Pages } from "../shared/types";

export type gymContextType = {
    selectedPage: Pages,
    setSelectedPage: (value: Pages) => void,
    isToggle: boolean,
    setToggle: (value: boolean) => void
    cartProduct: any
    setCartProduct: (value: any) => void
    quantity: number
    setQuantity: (value: number) => void
    total: number
    setTotal: (value: any) => void
    currentUser: any | null 
    setCurrentUser: (value: any) => void
}

export const GymContext = React.createContext<gymContextType | null>(null)

export function useGymContext(){
    return useContext(GymContext)
}