import React, { useContext } from "react";

export type blogContextType = {
    blogToggle: boolean,
    setBlogToggle: (value: boolean) => void
    blogResponse: any
    setBlogResponse: (value: any) => void
    allBlog: any
    setAllBlog: (value: any) => void
}

export const BlogContext = React.createContext<blogContextType | null>(null)

export function useBlogContext(){
    return useContext(BlogContext)
}