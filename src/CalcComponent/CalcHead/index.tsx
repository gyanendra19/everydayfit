import Logo from '@/assets/logo.png'
import Htext from '@/shared/Htext'
import CalcLinks from './CalcLinks'
import { calcContextType, useCalcContext } from '@/contexts/calcContext'
import { motion } from 'framer-motion'
import MobileSidebar from '@/shared/mobileSidebar'
import NavRight from '@/shared/NavRight'
import { NavLink } from 'react-router-dom'

type Props = {}

const heads = [
  {
    name: 'dailycalorie',
    title: 'DAILY CALORIE',
    about: 'The Calorie Calculator can be used to estimate the number of calories a person needs to consume each day.On average, a woman should eat 2000 calories per day to maintain her weight, and she should limit her caloric intake to 1500 or less in order to lose one pound per week. For the average male to maintain his body weight, he should eat 2500 calories per day, or 2000 a day if he wants to lose one pound per week.'
  },
  {
    name: 'idealweight',
    title: 'IDEAL WEIGHT',
    about: 'Ideal body weight (IBW) refers to how much a person should weigh according to his or her age, gender, height and other factors. There are various formulas to determine the ideal body weight of a person, such as the Robinson formula, Miller formula, Devine formula and Hamwi formula. While calculating IBW, factors such as body fat or muscle mass aren’t taken into consideration. Therefore, it is not a perfect measure of the health of a person.'
  },
  {
    name: 'macros',
    title: 'MACROS',
    about: `Counting macros has become popular over the last few years, especially among people looking to lose weight and gain muscle. Counting macros involves breaking down your caloric intake into individual macronutrients—carbs, protein and fats. Some people track this via an app, or some may even do it by hand. Each person's needs will be a bit different based on their activity level, gender, weight, age and medical conditions.`
  },
  {
    name: 'bodyfatpercent',
    title: 'BODY FAT PERCENT',
    about: `Body fat percent is the percent of total body weight that is composed of body fat in proportion to lean mass, organs, tissues and water.Body fat is an important factor in overall wellness, and too much can be problematic. In fact, high levels of body fat, or obesity, raises your risk of developing many of the common chronic health conditions linked to premature, preventable death, according to the Centers for Disease Control and Prevention (CDC).`
  },
  {
    name: 'bmi',
    title: 'BMI',
    about: `BMI is a measurement of a person's leanness or corpulence based on their height and weight, and is intended to quantify tissue mass. It is widely used as a general indicator of whether a person has a healthy body weight for their height. Specifically, the value obtained from the calculation of BMI is used to categorize whether a person is underweight, normal weight, overweight, or obese depending on what range the value falls between.`
  },
]

function CalcHead({ }: Props) {
  const { toggleCalc } = useCalcContext() as calcContextType;

  return (
    <>
      <section className='py-6 w-full alert-active'>
        <div className='w-[90%] mx-auto'>
          <div className='flex justify-between'>
            <NavLink to='/'>
              <img src={Logo} alt="logo" />
            </NavLink>

            {<NavRight featureOne={'blogs'} featureTwo={'products'} isCheckout={false} />}
          </div>
        </div>

        {<MobileSidebar whichPageOne={'blogs'} whichPageTwo={'products'} isCheckout={false} />}
      </section >


      <section className='md:pt-28 pt-10 w-full'>
        <div className='w-5/6 mx-auto'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
            className='relative text-[#B14343] font-bold text-base md:text-xl'>
            <div className='before:absolute md:before:content-CalcNameBox before:content-mobileNameBox md:before:-left-12 md:before:-top-24 before:-top-4 before:-left-6 before:z-[1]'>
              <div className='flex md:flex-row flex-col gap-10 md:gap-4 justify-evenly relative z-10'>
                <div className='flex gap-3 md:gap-20'>
                  <CalcLinks>DAILY CALORIE</CalcLinks>
                  <CalcLinks>IDEAL WEIGHT</CalcLinks>
                </div>

                <div className='flex gap-3 ml-4 md:ml-0 mt-3 md:mt-0 md:gap-20'>
                  <CalcLinks>BODY FAT PERCENT</CalcLinks>
                  <CalcLinks>BMI</CalcLinks>
                </div>

                <div className='ml-20 mt-2 md:mt-0 md:ml-0'>
                  <CalcLinks>MACROS</CalcLinks>
                </div>
              </div>
            </div>
          </motion.div>


          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
            className='md:pt-28 pt-14'>
            {heads.map(item => (
              toggleCalc === item.name && <>
                <Htext>{item.title}</Htext>
                <p className='pt-10 text-base md:w-[80%]'>{item.about}</p>
              </>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default CalcHead