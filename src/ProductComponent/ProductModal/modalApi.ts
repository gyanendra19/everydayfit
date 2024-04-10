import axios from "axios";

export const modalApi = async(setProduct: any, productName: String) => {
    
    const res = await axios({
        method: 'POST',
        url: "https://everydayfit-backend.onrender.com/api/v1/product/getProduct",
        data: {
            productName
        },
        headers: {
            "Access-Control-Allow-Origin": "https://everydayfit.vercel.app"
        }
    })

    
    setProduct(res.data.data)
    
}