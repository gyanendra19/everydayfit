import { calcContextType, useCalcContext } from '@/contexts/calcContext'

type Props = {}

function CalcResults({ }: Props) {
    const { response, whichCalc } = useCalcContext() as calcContextType

    const resBodyOne = (res: string) => {
        return <div className='flex ml-6 gap-2 mb-3 md:text-2xl font-semibold'>
            <p className='text-[#9b2226]'>{`${res}`}:</p>
            <span className='text-yellow-400'>{response[`${res}`]} kg</span>
        </div>
    }

    const resBodyTwo = (resField: string, res: string) => {
        return <div className='flex mb-1 md:ml-4 pt-10 md:pt-0 w-4/6  md:text-2xl font-semibold'>
            <p className='m-0 text-[#9b2226]'>{`${resField}`}:</p>
            <span className='ml-3 text-yellow-400'>{response[`${res}`]}</span>
        </div>
    }

    const resBodyThree = (head: string, res: string) => {
        return <div className='flex mb-3 text-base justify-around w-10/12 font-semibold'>
            <div className='flex gap-3 mr-8'>
                <p className='text-[#9b2226]'>{`${head}`}:</p>
                <div className='flex flex-col justify-evenly'>
                    <div className='flex justify-between'>
                        <p className='mr-2'>Protein</p>
                        <span className='text-yellow-400'>{response[`${res}`].protein.toFixed(1)}</span>
                        <span className='text-sm ml-2 text-[#ffbe0b]'>gm</span>
                    </div>
                    <div className='flex justify-between'>
                        <p className='mr-2'>Fat</p>
                        <span className=' text-yellow-400 ml-5'>{response[`${res}`].fat.toFixed(1)}</span>
                        <span className='text-sm ml-2 text-[#ffbe0b]'>gm</span>
                    </div>
                    <div className='flex justify-evenly '>
                        <p className='mr-2'>Carbs</p>
                        <span className=' text-yellow-400'>{response[`${res}`].carbs.toFixed(1)}</span>
                        <span className='text-sm ml-2 text-[#ffbe0b]'>gm</span>
                    </div>
                </div>
            </div>
        </div>
    }

    const resBodyFour = (res: string, goal: string) => {
        return <div className='md:text-base text-sm ml-4 font-semibold'>
            <div className='mt-0'>
                <p className='text-[#9b2226]'>{`${res}`}:</p>
                <div className='flex flex-col gap-1 justify-between'>
                    <div className='flex'>
                        <p>{goal.charAt(0).toUpperCase()}{goal.slice(1)}:</p>
                        <span className='text-yellow-400'>{response.goals[`${res}`][`${goal}`]}</span>
                    </div>
                    <div className='flex'>
                        <p>Calory:</p>
                        <span className='text-yellow-400 ml-1'>{response.goals[`${res}`]['calory'].toFixed(1)}</span>
                    </div>
                </div>
            </div>
        </div>
    }

    return (
        <section className='md:py-28 w-full pt-16 md:pt-0 mb-10'>
            <div className='w-5/6 mx-auto'>
                <div className='relative text-white'>
                    <div className='before:absolute sm:before:content-resultsBox before:content-mobileResultsBox   sm:before:-top-20 before:-top-8 before:z-[-1]'>
                        <div className='md:flex h-[400px] md:h-fit overflow-y-scroll '>
                            {whichCalc === 'idealweight' && resBodyOne('Devine')}
                            {whichCalc === 'idealweight' && resBodyOne('Hamwi')}
                            {whichCalc === 'idealweight' && resBodyOne('Miller')}
                            {whichCalc === 'idealweight' && resBodyOne('Robinson')}

                            {whichCalc === 'bmi' && resBodyTwo('BMI', 'bmi')}
                            {whichCalc === 'bmi' && resBodyTwo('HEALTH', 'health')}
                            {whichCalc === 'bmi' && resBodyTwo('Healthy BMI Range', 'healthy_bmi_range')}

                            {whichCalc === 'bodyfat' && resBodyTwo('Body Fat (U.S. Navy Method)', 'Body Fat (U.S. Navy Method)')}
                            {whichCalc === 'bodyfat' && resBodyTwo('Body Fat Category', 'Body Fat Category')}
                            {whichCalc === 'bodyfat' && resBodyTwo('Body Fat Mass', 'Body Fat Mass')}
                            {whichCalc === 'bodyfat' && resBodyTwo('Lean Body Mass', 'Lean Body Mass')}
                            {whichCalc === 'bodyfat' && resBodyTwo('Body Fat (BMI method)', 'Body Fat (BMI method)')}

                            {whichCalc === 'macrocalculator' && resBodyThree('Balaced Diet', 'balanced')}
                            {whichCalc === 'macrocalculator' && resBodyThree('Protein Rich Diet', 'highprotein')}
                            {whichCalc === 'macrocalculator' && resBodyThree('Low Carbs Diet', 'lowcarbs')}
                            {whichCalc === 'macrocalculator' && resBodyThree('Low Fat Diet', 'lowfat')}

                            {whichCalc === 'dailycalorie' && resBodyFour('Extreme weight gain', 'gain weight')}
                            {whichCalc === 'dailycalorie' && resBodyFour('Extreme weight loss', 'loss weight')}
                            {whichCalc === 'dailycalorie' && resBodyFour('Mild weight gain', 'gain weight')}
                            {whichCalc === 'dailycalorie' && resBodyFour('Mild weight loss', 'loss weight')}
                            {whichCalc === 'dailycalorie' && resBodyFour('Weight gain', 'gain weight')}
                            {whichCalc === 'dailycalorie' && resBodyFour('Weight loss', 'loss weight')}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CalcResults