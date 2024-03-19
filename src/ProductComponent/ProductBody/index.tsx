import { productContextType, useProductContext } from '@/contexts/productContext'
import { useEffect } from 'react'
import { useProductApi } from './useProductApi'
import VarietyBtn from './varietyBtn'
import { modalApi } from '../ProductModal/modalApi'

type Props = {}

function ProductBody({ }: Props) {
    const { allProductResponse, setAllProductResponse, toggleVariety, setOpenCheckout, openCheckout, productName, setProductName, setProduct, product} = useProductContext() as productContextType

    const filteredResponse = allProductResponse.filter((item: any) => {
        if(toggleVariety === 'ALL PRODUCTS') return item.variety
        return item.variety.toUpperCase() === toggleVariety
    })

    
    useEffect(() => {
        useProductApi(setAllProductResponse)
        modalApi(setProduct, productName)
    }, [productName])

    const showCheckout = (product: String) => {
        setOpenCheckout(!openCheckout)
        setProductName(product)
    }

    return (
        <section className='py-6 w-full'>
            <div className='w-5/6 mx-auto'>
                <div className='md:w-fit w-full mx-auto py-3 bg-[#FFD6E0] rounded-md flex flex-col md:flex-row md:gap-8 px-10 gap-2 justify-center'>
                    <VarietyBtn>ALL PRODUCTS</VarietyBtn>
                    <VarietyBtn>NUTRITION</VarietyBtn>
                    <VarietyBtn>GYM EQUIPMENTS</VarietyBtn>
                    <VarietyBtn>BOOKS</VarietyBtn>
                    <VarietyBtn>ACCESSORIES</VarietyBtn>
                </div>

                <div className='flex'>
                    <div className='md:basis-1/5'>

                    </div>

                    <div className='grid md:grid-cols-3 grid-cols-2 gap-12 md:basis-4/5 py-16'>
                        {filteredResponse.map((item: any) => (
                            <a
                            onClick={() => showCheckout(item.productName)}
                            className='cursor-pointer flex items-center flex-col justify-end'>
                            <div>
                                <img src={`/${item.photo}`} alt="" />
                                <p className='mt-4 text-center text-[#B14343] font-bold'>{item.productName}</p>
                            </div>                         
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductBody