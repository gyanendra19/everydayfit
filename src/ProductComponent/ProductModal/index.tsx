import { gymContextType, useGymContext } from '@/contexts/gymContext'
import { productContextType, useProductContext } from '@/contexts/productContext'
import { Alert } from '@/shared/AuthApi'
import { RiShoppingCart2Fill, RiFlashlightFill } from '@remixicon/react'
import { useEffect } from 'react'
import { useCookies } from 'react-cookie'
type Props = {}

function ProductModal({ }: Props) {
  const cartStyle = `h-9 w-9 cursor-pointer flex justify-center items-center p-3 rounded-[50%] bg-text-primary text-black text-2xl`
  const { openCheckout, setOpenCheckout, product } = useProductContext() as productContextType
  const { setCartProduct, cartProduct, quantity, setQuantity, currentUser} = useGymContext() as gymContextType
  const [cookies] = useCookies(['access_token'])

  const addToCart = () => {
    setCartProduct((prev: object[]) => [...prev, { quantity, ...product }])
  }

  useEffect(() => {
    (() => {
      if(!cookies.access_token) return
      console.log(currentUser)
      if(Object.keys(currentUser).length !== 0) window.localStorage.setItem(`${currentUser.email}`, JSON.stringify(cartProduct))
    })()
  }, [cartProduct])


  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }
  
  const decreaseQuantity = () => {
    if(quantity === 0) return
    setQuantity(quantity - 1)
  }


  return (
    <div>
      {openCheckout &&
        <>
          <div onClick={() => setOpenCheckout(!openCheckout)} className="absolute z-30 bg-black w-full h-full opacity-70 blur-md"></div>
          <section className='fixed md:mt-44 mt-20 md:ml-[30%] flex-col justify-center items-center md:w-5/12 h-fit z-50'>
            <div className='w-full md:flex gap-6 ml-6 md:ml-0'>
              <div className='basis-2/5'>
                <img className='' src={`/${product.photo}`} alt="" />
              </div>

              <div className="basis-3/5">
                <p className='font-bold text-xl'>{product.productName}</p>
                <p className='mt-3 font-bold text-button-primary text-2xl'>$ {product.price}</p>
                <div className='flex gap-3 mt-3'>
                  <p onClick={() => {
                    decreaseQuantity()
                  }
                  }
                    className={`${cartStyle}`}>-</p>
                  <p className='px-6 flex justify-center items-center rounded-md bg-text-primary text-black'>{quantity}</p>
                  <span onClick={() => {
                    increaseQuantity()
                  }} className={`${cartStyle}`}>+</span>
                </div>
                <div className='flex gap-4 mt-6'>
                  <p
                    onClick={() => {
                      if(cartProduct.find((item:any) => product.productName === item.productName)) {
                        Alert('Item already in the cart')
                        return
                      }
                      addToCart()
                      Alert('Added to Cart')
                    }}
                    className='flex w-fit gap-2 whitespace-nowrap items-center font-semibold px-4 bg-[#FC6C6C] text-black rounded-md cursor-pointer'><RiShoppingCart2Fill size={20} color='black' /> Add to Cart</p>
                  <p className='cursor-pointer flex gap-2 whitespace-nowrap  font-semibold px-6 py-2 text-left bg-[#FFDD63] text-black rounded-md'><RiFlashlightFill />Buy now</p>
                </div>
              </div>
            </div>

            <div className='w-[110%] py-3 px-3 bg-text-primary text-white rounded-md mt-4'>{product.description}</div>
          </section>
        </>
      }
    </div>
  )
}

export default ProductModal