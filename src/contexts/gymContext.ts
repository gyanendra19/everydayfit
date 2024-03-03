import React, { useContext } from "react";
import { Pages } from "../shared/types";

export type gymContextType = {
    selectedPage: Pages,
    setSelectedPage: (value: Pages) => void
}

export const GymContext = React.createContext<gymContextType | null>(null)

export function useGymContext(){
    return useContext(GymContext)
}