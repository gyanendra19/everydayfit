import Htext from "@/shared/Htext"
import OurServices from "./ourServices"
import { motion } from "framer-motion"
import { gymContextType, useGymContext } from "@/contexts/gymContext"
import { Pages } from "@/shared/types"

type Props = {}

const service = [
{
    head: 'FITNESS CALCULATORS',
    description: 'Calculate different fitness indicators to get an idea of how fit you are'
},
{
    head: 'FITNESS PRODUCTS',
    description: 'Shop our best quality fitness products to get the best out of your body'
},
{
    head: 'FITNESS BLOGS',
    description: 'Read interesting blogs on fitness and health to get motivated and to get the best practices'
}
]

function Services({}: Props) {
    const {setSelectedPage} = useGymContext() as gymContextType

  return (
    <section
    id="ourservices"
    className='w-full py-12'
    >
        <motion.div 
        onViewportEnter={() => setSelectedPage(Pages.OurServices)}
        className='w-[80%] mx-auto'>
            <Htext>OUR SERVICES</Htext>
            <div className="flex flex-col mt-8 md:flex-row items-center justify-between gap-32">
            {service.map((serve, i) => (
                <OurServices
                key={i}
                head = {serve.head}
                description = {serve.description}
                />
            ))}       
            </div>
        </motion.div>
    </section>
  )
}

export default Services