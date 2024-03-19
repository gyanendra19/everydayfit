import axios from "axios"

export const useBlogApi = async(topic: string, setBlogResponse: (value: any) => void) => {
    const res = await axios({
        method: 'POST',
        url: "/api/v1/blog/getBlog",
        data: {
            topic
        }
    })

    setBlogResponse(res.data.data)
}

export const useGetAllBlog = async(setAllBlog: (value: any) => void) => {

    const res = await axios({
        method: 'GET',
        url: "/api/v1/blog/getAllBlogs"
    })

    setAllBlog(res.data.data)
}