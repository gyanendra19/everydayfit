import axios from "axios";

export const useProductApi = async(setAllProductResponse: (value: any) => void) => {
    const res = await axios.get('http://127.0.0.1:4555/api/v1/product/getAllProduct')

    setAllProductResponse(res.data.data)
}