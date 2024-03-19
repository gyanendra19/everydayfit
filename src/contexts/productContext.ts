import React, { useContext } from "react";

export type productContextType = {
    allProductResponse: any,
    setAllProductResponse: (value: any) => void,
    toggleVariety: String,
    setToggleVariety: (value: any) => void
    openCheckout: boolean,
    setOpenCheckout: (value: boolean) => void,
    product: any,
    setProduct: (value: any) => void,
    productName: String
    setProductName: (value: any) => void
}

export const ProductContext = React.createContext<productContextType | null>(null)

export function useProductContext(){
    return useContext(ProductContext)
}