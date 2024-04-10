import axios from "axios"

export const useBlogApi = async(topic: string, setBlogResponse: (value: any) => void) => {
    const res = await axios({
        method: 'POST',
        url: "https://everydayfit-backend.onrender.com/api/v1/blog/getBlog",
        data: {
            topic
        },
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    })

    setBlogResponse(res.data.data)
}

export const useGetAllBlog = async(setAllBlog: (value: any) => void) => {

    const res = await axios({
        method: 'GET',
        url: "https://everydayfit-backend.onrender.com/api/v1/blog/getAllBlogs",
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    })

    setAllBlog(res.data.data)
}