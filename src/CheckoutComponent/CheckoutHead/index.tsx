import NavRight from '@/shared/NavRight'
import MobileSidebar from '@/shared/mobileSidebar'
import LogoBlog from '@/assets/EVERYDAYFIT-BLOG.png'
import Payment from '@/assets/paymentHead.png'
import Logo from '@/assets/logo.png'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

type Props = {}

function CheckoutHead
    ({ }: Props) {
    return (
        <>
            <section className='py-6 w-full alert-active'>
                <div className='w-[90%] mx-auto'>
                    <div className='flex justify-between'>
                        <NavLink to='/'>
                            <img src={Logo} alt="logo" />
                        </NavLink>

                        {<NavRight featureOne={'blogs'} featureTwo={'products'} isCheckout={true} />}
                    </div>
                </div>

                {<MobileSidebar whichPageOne={'blogs'} whichPageTwo={'products'} isCheckout={true}/>}
            </section >

            <section className='py-14 w-full'>
                <div className='w-11/12 mx-auto'>
                    <div className='md:flex'>
                        <motion.div
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ amount: 0.5 }}
                            transition={{ duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0 }
                            }}
                            className='basis-4/5'>
                            <img src={LogoBlog} alt="" />
                            <img className='md:ml-[16rem]' src={Payment} alt="" />
                        </motion.div>
                    </div>
                </div>

            </section>
        </>


    )
}

export default CheckoutHead
