import axios from "axios";

export const modalApi = async(setProduct: any, productName: String) => {
    
    const res = await axios({
        method: 'POST',
        url: "http://127.0.0.1:4555/api/v1/product/retrieveProduct",
        data: {
            productName
        }
    })

    
    setProduct(res.data.data)
    
}