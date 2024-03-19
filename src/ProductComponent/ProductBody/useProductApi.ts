import axios from "axios";

export const useProductApi = async(setAllProductResponse: (value: any) => void) => {
    const res = await axios.get('https://everydayfit-backend.onrender.com/api/v1/product/getAllProduct')

    setAllProductResponse(res.data.data)
}