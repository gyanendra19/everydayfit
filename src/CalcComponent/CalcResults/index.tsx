import React from 'react'

type Props = {}

function CalcResults({}: Props) {
  return (
    <section className='py-28 w-full mb-10'>
        <div className='w-4/6 mx-auto'>
            <div className='relative text-white'>
                <div className='before:absolute sm:before:content-resultsBox before:content-mobileResultsBox sm:before:-left-32 before:-left-6 before:-top-24 before:z-[-1]'>
                    <div>
                        Hello
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CalcResults