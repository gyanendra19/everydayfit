import React from 'react'
import Logo from '@/assets/logo.png'
import CalcNames from '@/assets/calculatorNames.png'
import Links from '@/components/navbar/Links'
import Htext from '@/shared/Htext'
import CalcLinks from './CalcLinks'

type Props = {}

function CalcHead({ }: Props) {
  return (
    <>
      <section className='py-6 w-full'>
        <div className='w-[90%] mx-auto'>
          <div>
            <img src={Logo} alt="logo" />
          </div>
        </div>
      </section>


      <section className='md:pt-28 pt-10 w-full'>
        <div className='w-5/6 mx-auto'>
          <div className='relative text-[#B14343] font-bold text-base md:text-xl'>
            <div className='before:absolute md:before:content-CalcNameBox before:content-mobileNameBox md:before:-left-12 md:before:-top-24 before:-top-4 before:-left-6 before:z-[1]'>
              <div className='flex md:flex-row flex-col gap-10 md:gap-4 justify-evenly relative z-10'>
                <div className='flex gap-3 md:gap-16'>
                  <CalcLinks>DAILY CALORIE</CalcLinks>
                  <CalcLinks>IDEAL WEIGHT</CalcLinks>
                </div>

                <div className='flex gap-3 ml-4 md:ml-0 mt-3 md:mt-0 md:gap-16'>
                  <CalcLinks>BODY FAT PERCENT</CalcLinks>
                  <CalcLinks>BMI</CalcLinks>
                </div>

                <div className='ml-20 mt-2 md:mt-0 md:ml-0'>
                <CalcLinks>MACROS</CalcLinks>
                </div>
              </div>
            </div>
          </div>


          <div className='md:pt-28 pt-14'>
            <Htext>IDEAL WEIGHT</Htext>
            <p className='pt-10 md:w-[80%]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque necessitatibus blanditiis voluptate culpa hic earum animi suscipit? Corrupti quia cumque error corporis harum magnam vero, aliquid eligendi, minima, nostrum in. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consequatur nobis fugit pariatur, asperiores dicta sint exercitationem enim dolorem rerum.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default CalcHead