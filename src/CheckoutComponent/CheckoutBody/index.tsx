import { gymContextType, useGymContext } from "@/contexts/gymContext";
import { useState } from "react";

type Props = {}

function CheckoutBody({ }: Props) {
    const [renderCheckout , setRenderCheckout] = useState(false)
    const { cartProduct, total, setTotal} = useGymContext() as gymContextType
    
    return (
        <section className='py-8 w-full'>
            <div className='w-5/6 mx-auto'>
                <p className='w-1/2 text-center mx-auto text-[#B14343] text-5xl font-extrabold'>CART</p>

                <div className="flex flex-col md:flex-row md:justify-between pt-16 gap-28">
                    <div>
                        <div className="basis-3/5 max-h-fit bg-[#FFD6E0] rounded-md">
                            {cartProduct.length === 0 ? 
                            (<p className="text-4xl text-center bg-none">No Items in the Cart</p>)
                            :
                            (
                                cartProduct.map((item: any) => (
                                <>
                                    <div className="flex items-center gap-8 p-7 pb-8 border-b-2 border-[#B14343]">
                                        <img className="h-20" src={`/${item.photo}`} alt="" />
                                        <div className="md:flex gap-6 text-center mt-1">
                                            <div>
                                                <p className="font-bold mt-4 md:mt-0">PRODUCT</p>
                                                <p className="md:mt-5 font-semibold">{item.productName}</p>
                                            </div>
                                            <div>
                                                <p className="font-bold mt-4 md:mt-0">PRICE</p>
                                                <p className="md:mt-5 font-semibold">₹{item.price}</p>
                                            </div>
                                            <div>
                                                <p className="font-bold mt-4 md:mt-0">QUANTITY</p>
                                                <input onChange={(e) => {
                                                    if(Number(e.target.value) < 0) return
                                                    item.quantity = e.target.value
                                                    setRenderCheckout(!renderCheckout)
                                                }
                                            } 
                                                defaultValue={item.quantity} className="w-10 text-white pl-2 md:mt-5 rounded-sm bg-[#B14343]" type="number" />
                                            </div>
                                            <div>
                                                <p className="font-bold mt-4 md:mt-0">SUBTOTAL</p>
                                                <p  
                                                onChange={() => {
                                                    setTotal((prev:number) => prev + (item.price * item.quantity))
                                                    setRenderCheckout(!renderCheckout)
                                                }}                                       
                            
                                                className="md:mt-5 bg-[#FFD6E0] font-semibold">₹{item.price * item.quantity}</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )))
                        }
                        </div>
                    </div>

                    <div className="basis-2/5">
                        <div className="text-[#B14343] p-6 bg-[#FFD6E0] rounded-md flex flex-col gap-5">
                            <p className="text-3xl font-bold">CART TOTALS</p>
                            <div className="flex justify-between">
                                <p className="text-2xl font-bold">SUBTOTAL</p>
                                <span className="text-2xl font-bold">₹399</span>
                            </div>
                            <div className="flex justify-between">
                            <p className="text-xl font-medium">Shipping</p>
                            <span className="text-xl font-bold">₹100</span>
                            </div>
                            <p className="text-xl font-medium">Shipping to siliguri</p>
                            <div className="flex justify-between">
                                <p className="text-2xl font-bold">Total</p>
                                <span className="text-2xl font-bold">$399</span>
                            </div>
                            <button className="w-full py-2 rounded-md font-semibold text-xl bg-[#B14343] text-black">PAY NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CheckoutBody