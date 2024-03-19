import axios from "axios";

export const modalApi = async(setProduct: any, productName: String) => {
    
    const res = await axios({
        method: 'POST',
        url: "/api/v1/product/retrieveProduct",
        data: {
            productName
        }
    })

    
    setProduct(res.data.data)
    
}