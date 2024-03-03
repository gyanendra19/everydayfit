import { useForm } from 'react-hook-form'
import ContactImage from '@/assets/contact-1.png'
import Htext from '@/shared/Htext'
import { motion } from 'framer-motion'
import { gymContextType, useGymContext } from '@/contexts/gymContext'
import { Pages } from '@/shared/types'

type Props = {}

function ContactUs({ }: Props) {
  const { register, trigger, formState: { errors } } = useForm()
  const {setSelectedPage} = useGymContext() as gymContextType

  const onSubmit = async (e: any) => {
    const isValid = await trigger()
    if (!isValid) {
      e.preventDefault()
    }
  }

  const inputStyles = `py-3 mt-4 px-4 w-full bg-box-secondary rounded-md placeholder-white focus:outline-none`

  return (
    <section id='contactus' className='py-8 w-full'>
      <motion.div
      onViewportEnter={() => setSelectedPage(Pages.ContactUs)}
      className='mx-auto w-5/6'>
        <div className='md:flex justify-between'>
          <motion.div
          initial = 'hidden'
          whileInView='visible'
          viewport={{amount:0.5}}
          transition={{duration: 0.5}}
          variants={{
              hidden : {opacity: 0, y:50},
              visible : {opacity: 1, y:0}
          }}
          className='basis-2/4'>
            <Htext>CONTACT US</Htext>
            <form
              target='_blank'
              onSubmit={onSubmit}
              action='https://formsubmit.co/harfanmaula4@gmail.com'
              method='POST'
            >
              <input
                {...register('name', {
                  required: true,
                  maxLength: 50
                })}
                placeholder='NAME'
                className={`${inputStyles} mt-8`}
                type="text" />

              {errors.name &&
                <p className='mt-1'>
                  {errors.name.type === 'required' && "This field is required"}
                  {errors.name.type === 'maxLength' && "Max Length is 20 char."}
                </p>
              }

              <input
                {...register('email', {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
                placeholder='EMAIL'
                className={`${inputStyles}`}
                type="text" />

              {errors.email &&
                <p className='mt-1'>
                  {errors.email.type === 'required' && "This field is required"}
                  {errors.email.type === 'pattern' && "Invalid email type"}
                </p>
              }

              <textarea
                {...register('message', {
                  required: true,
                  maxLength: 200
                })}
                placeholder='MESSAGE'
                rows={5}
                cols={50}
                className={`${inputStyles}`}
              />

              {errors.message &&
                <p className='mt-1'>
                  {errors.message.type === 'required' && "This field is required"}
                  {errors.message.type === 'maxLength' && "Max length is 200 char."}
                </p>
              }

              <button
                type='submit'
                className='py-2 px-8 bg-button-primary text-white rounded-md mt-4'
              >Submit</button>
            </form>
          </motion.div>

          <div className='basis-2/5 md:flex items-center justify-center relative'>
            <div className='before:absolute md:before:content-everydayfit before:-left-48 before:top-96 before:z-[-1]'>
            <img src={ContactImage} alt="" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default ContactUs