import ProductBody from '@/ProductComponent/ProductBody'
import ProductHead from '@/ProductComponent/ProductHead'
import ProductModal from '@/ProductComponent/ProductModal'
import ScrollToTop from '@/ScrollToTop'
import Footer from '@/components/Footer'
import { ProductContext } from '@/contexts/productContext'
import  { useState } from 'react'

type Props = {}

function ProductLayout({}: Props) {
    const [allProductResponse, setAllProductResponse] = useState([])
    const [toggleVariety, setToggleVariety] = useState('ALL PRODUCTS')
    const [openCheckout, setOpenCheckout] = useState(false)
    const [product, setProduct] = useState(false)
    const [productName, setProductName] = useState('HAND GRIPPER')


  return (
    <ProductContext.Provider value={{allProductResponse, setAllProductResponse, toggleVariety, setToggleVariety, openCheckout, setOpenCheckout, product, setProduct, productName, setProductName}}>
    <div className='relative'>
        <ScrollToTop />
        <ProductModal />
        <ProductHead />
        <ProductBody />
        <Footer />
    </div>
    </ProductContext.Provider>
  )
}

export default ProductLayout