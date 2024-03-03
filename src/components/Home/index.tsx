import headLogo from '@/assets/headLogo.png'
import ActionButton from '@/shared/ActionButton'
import cycle from '@/assets/cycle.png'
import { motion } from 'framer-motion'
import { gymContextType, useGymContext } from '@/contexts/gymContext'
import { Pages } from '@/shared/types'

type Props = {}

function Home({}: Props) {
  const {setSelectedPage} = useGymContext() as gymContextType
  return (
    <section
    id='home'
    className='w-full pt-36'
    >
    <motion.div 
    onViewportEnter={() => setSelectedPage(Pages.Home)}
    className='w-5/6 mx-auto md:flex gap-10 justify-between'>
        <motion.div
        initial = 'hidden'
        whileInView='visible'
        viewport={{amount: 0.4}}
        transition={{duration: 0.5}}
        variants={{
          hidden: {opacity: 0, x:-50},
          visible: {opacity: 1, x:0}
        }}
        className='basis-2/5 md:pt-10 relative z-10'>
            <div className='before:absolute before:-top-3 before:-left-10 md:before:content-everydayfit'>
                <img src={headLogo} alt="" />
            </div>
            <p className='mt-4'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore necessitatibus totam, adipisci, deleniti consequatur placeat porro, cum fugiat dolor beatae vitae excepturi veniam nihil cupiditate reprehenderit quis rerum dolore quaerat?</p>
            <div className='mt-5'>
            <ActionButton>Join now</ActionButton>
            </div>
        </motion.div>

        <div className='flex justify-center mt-10 md:mt-0'>
            <img src={cycle} alt="cycle" />
        </div> 
    </motion.div>
    </section>
  )
}

export default Home