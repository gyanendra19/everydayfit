import Logo from '@/assets/logo.png'
import LogoBlog from '@/assets/EVERYDAYFIT-BLOG.png'
import Blog from '@/assets/BLOGS.png'
import Human from '@/assets/human-poly.png'
import { motion } from 'framer-motion'
import MobileSidebar from '@/shared/mobileSidebar'
import NavRight from '@/shared/NavRight'
import { NavLink } from 'react-router-dom'

type Props = {}

function BlogHead({ }: Props) {

    return (
        <>
            <section className='py-10 w-full alert-active'>
                <div className='w-[90%] mx-auto'>
                    <div className='flex justify-between'>
                        <NavLink to='/'>
                            <img src={Logo} alt="logo" />
                        </NavLink>

                    {<NavRight featureOne={'calculators'} featureTwo={'products'} isCheckout = {false}/>}
                    </div>
                </div>

                <MobileSidebar whichPageOne={'calculators'} whichPageTwo={'products'} isCheckout = {false}/>
            </section>


            <section className='py-6 w-full'>
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
                            <img className='md:ml-[29rem]' src={Blog} alt="" />
                            <p className='mt-10 md:w-[80%] leading-6 tracking-wider'>Today, more than ever, there is a renewed focus and awareness on health and fitness. People are truly beginning to understand how exercise not only helps your body, but your mind too. As a result, people are looking for more information on their journey to good health. But how do you find the right place to get quality information on health and fitness? Go nowhere else you are at the best page</p>
                        </motion.div>

                        <motion.div
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ amount: 0.4 }}
                            transition={{ duration: 0.5 }}
                            variants={{
                                hidden: { scale: 0.8 },
                                visible: { scale: 1 }
                            }}
                            className='md:mt-0 mt-12'>
                            <img src={Human} alt="" />
                        </motion.div>

                    </div>
                </div>

            </section>
        </>
    )
}

export default BlogHead