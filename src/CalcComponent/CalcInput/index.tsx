import CalcRun from '@/assets/run.png'
import DailyCalorie from './EachInput/DailyCalorie'
import { calcContextType, useCalcContext } from '@/contexts/calcContext'
import IdealWeight from './EachInput/IdealWeight'
import BMI from './EachInput/BMI'
import Macros from './EachInput/Macros'
import BodyFatPercent from './EachInput/BodyFatPercent'
import { motion } from 'framer-motion'

type Props = {}

function CalcInput({ }: Props) {
    const calculators = [
        {
            calc: 'dailycalorie',
            calcPage : <DailyCalorie />
        },
        {
            calc: 'idealweight',
            calcPage : <IdealWeight />
        },
        {
            calc: 'bmi',
            calcPage : <BMI />
        },
        {
            calc: 'macros',
            calcPage : <Macros />
        },
        {
            calc: 'bodyfatpercent',
            calcPage : <BodyFatPercent />
        },
        ]

    const {toggleCalc} = useCalcContext() as calcContextType
    
    return (
        <section className='py-10 w-full'>
            <motion.div
            initial = 'hidden'
            whileInView= 'visible'
            viewport={{once: true, amount: 0.4}}
            transition={{delay: 0.2, duration: 0.3}}
            variants={{
              hidden:  {opacity: 0, y: 50},
              visible:  {opacity: 1, y: 0}
            }}
            className='w-5/6 mx-auto md:flex justify-between items-center'>
                {
                    calculators.map(item => (
                        item.calc === toggleCalc && item.calcPage
                    ))
                }
                <div className='mt-8 mr-8 md:mr-0 md:mt-0'>
                    <img src={CalcRun} alt="run" />
                </div>
            </motion.div>
        </section>
    )
}

export default CalcInput