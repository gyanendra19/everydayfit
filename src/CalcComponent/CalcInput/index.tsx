import CalcRun from '@/assets/run.png'
import DailyCalorie from './EachInput/DailyCalorie'
import { calcContextType, useCalcContext } from '@/contexts/calcContext'
import IdealWeight from './EachInput/IdealWeight'
import BMI from './EachInput/BMI'
import Macros from './EachInput/Macros'
import BodyFatPercent from './EachInput/BodyFatPercent'

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
    console.log(toggleCalc);
    
    return (
        <section className='py-10 w-full'>
            <div className='w-5/6 mx-auto md:flex justify-between items-center'>
                {
                    calculators.map(item => (
                        item.calc === toggleCalc && item.calcPage
                    ))
                }
                <div className='mt-8 mr-8 md:mr-0 md:mt-0'>
                    <img src={CalcRun} alt="run" />
                </div>
            </div>
        </section>
    )
}

export default CalcInput