import  { FeaturesButton } from '@/shared/ActionButton'
import Htext from '@/shared/Htext'
import calculator from '@/assets/calculator.png'
import product from '@/assets/product.png'
import bloog from '@/assets/bloog.png'
import useMediaQuery from '@/hooks/useMediaQuery'
import { motion } from 'framer-motion'
import { gymContextType, useGymContext } from '@/contexts/gymContext'
import { Pages } from '@/shared/types'

type Props = {}

function Features({ }: Props) {
    const {setSelectedPage} = useGymContext() as gymContextType
    const isAboveMediumScreen = useMediaQuery("(min-width:1024px)")


    return (
        <section id='features' className='pt-20 pb-10 w-full'>
            <motion.div
            onViewportEnter={() => setSelectedPage(Pages.Features)}
            className='w-5/6 mx-auto'>
                <div className='sm:flex'>
                    <motion.div 
                    initial = 'hidden'
                    whileInView='visible'
                    viewport={{amount:0.5}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden : {opacity: 0, x:-50},
                        visible : {opacity: 1, x:0}
                    }}
                    className='basis-3/5 mt-10 sm:flex flex-col'>
                        <Htext>CALCULATORS</Htext>
                        <p className='mt-5 sm:w-8/12 text-xl'>Use indicators like BMI, Ideal body weight, Number of Macros, Body fat percent, Daily calorie to track your fitness journey and achieve your desired goals</p>
                        <div className='mt-6'>
                            <FeaturesButton toPage='calculators'>EXPOLRE</FeaturesButton>
                        </div>
                    </motion.div>

                    <div className='flex justify-center mt-8 sm:mt-0'>
                        <img src={calculator} alt="" />
                    </div>
                </div>

                {isAboveMediumScreen ? (
                <div className='sm:flex'>
                    <div className='flex justify-center mt-8 md:mt-0 basis-4/5'>
                        <img src={product} alt="" />
                    </div>

                    <motion.div
                    initial = 'hidden'
                    whileInView='visible'
                    viewport={{amount:0.5}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden : {opacity: 0, x:50},
                        visible : {opacity: 1, x:0}
                    }}
                    className='basis-3/5 mt-14 sm:flex flex-col sm:ml-12'>
                        <Htext>PRODUCTS</Htext>
                        <p className='mt-5 sm:w-10/12 text-xl'>Buy Products like protein shaker, dumbbells, yoga mats and many more to enhance your fitness experience as we have the best quality products in the market.</p>
                        <div className='mt-6'>
                            <FeaturesButton toPage='products'>EXPOLRE</FeaturesButton>
                        </div>
                    </motion.div>
                </div>
                )
                 :
                 (
                    <div className='sm:flex'>
                    <div className='basis-3/5 mt-14 sm:flex flex-col sm:ml-12'>
                        <Htext>PRODUCTS</Htext>
                        <p className='mt-5 sm:w-10/12 text-xl'>Buy Products like protein shaker, dumbbells, yoga mats and many more to enhance your fitness experience as we have the best quality products in the market.</p>
                        <div className='mt-6'>
                            <FeaturesButton toPage='products'>EXPOLRE</FeaturesButton >
                        </div>
                    </div>

                    <div className='flex justify-center mt-8 md:mt-0 basis-4/5'>
                        <img src={product} alt="" />
                    </div>
                </div>
                 )}



                <div className='sm:flex'>
                    <motion.div 
                    initial = 'hidden'
                    whileInView='visible'
                    viewport={{amount:0.5}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden : {opacity: 0, x:-50},
                        visible : {opacity: 1, x:0}
                    }}
                    className='basis-3/5 mt-6 sm:flex flex-col'>
                        <Htext>BLOGS</Htext>
                        <p className='mt-5 sm:w-9/12 text-xl'>Wanna read articles and blogs to increase your knowledge on fitness? Here we are with the best articles there is to make your journey interesting and knowledgeable.</p>
                        <div className='mt-6'>
                            <FeaturesButton toPage='blogs'>EXPOLRE</FeaturesButton>
                        </div>
                    </motion.div>

                    <div className='flex justify-center mt-8 sm:mt-0'>
                        <img src={bloog} alt="" />
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Features