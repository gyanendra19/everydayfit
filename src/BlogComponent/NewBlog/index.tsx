import { Alert } from '@/shared/AuthApi'
import Htext from '@/shared/Htext'
import { motion } from 'framer-motion'
import { useCookies } from 'react-cookie'
import { useForm } from 'react-hook-form'

type Props = {}

function NewBlog({ }: Props) {
    const { register, handleSubmit, trigger, formState: { errors } } = useForm()
    const [cookies] = useCookies(['access_token'])

    const submit = async(e: any) => {
        const isValid = await trigger()
        if(!isValid){
            e.preventDefault()
        }
        
    }

    const inputStyles = `py-3 mt-4 px-4 w-full bg-box-secondary rounded-md placeholder-white focus:outline-none`

    return (
        <section className='py-2 w-full'>
            <div className='w-5/6 mx-auto'>
                <div className='md:flex'>
                    <motion.div
                    initial = 'hidden'
                    whileInView= 'visible'
                    viewport={{amount: 0.4}}
                    transition={{duration: 0.5}}
                    variants={{
                      hidden:  {opacity: 0, y: 50},
                      visible:  {opacity: 1, y: 0}
                    }}      
                    className='basis-3/5'>
                        <Htext>WRITE AND PUBLISH YOUR OWN BLOG</Htext>
                        <form
                        className='mt-4'
                        onSubmit={handleSubmit(submit)}
                         action="">
                            <input
                            {...register('topic', {
                                required: true,
                                maxLength: 25
                            })}
                            className={`${inputStyles}`}
                            placeholder='TOPIC'
                            type="text" />
                            {
                                errors.topic && (
                                    <p className='mt-1'>
                                        {errors.topic.type === 'required' && 'This field is required'}
                                        {errors.topic.type === 'maxLength' && 'There should be atmost 25 char'}
                                    </p>
                                )
                            }
                            <input
                            {...register('photo', {
                                required: true
                            })}
                            className={`${inputStyles}`}
                            placeholder='PHOTO'
                            type="text" />
                            {
                                errors.photo && (
                                    <p className='mt-1'>
                                        {errors.photo.type === 'required' && 'This field is required'}
                                    </p>
                                )
                            }
                            <textarea
                            {...register('blog', {
                                required: true,
                                minLength: 200
                            })}
                            className={`${inputStyles}`}
                            placeholder='WRITE...'
                            cols={50} 
                            rows={9}/>
                            {
                                errors.blog && (
                                    <p className='mt-1'>
                                        {errors.blog.type === 'required' && 'This field is required'}
                                        {errors.blog.type === 'minLength' && 'There should be atleast 200 char'}
                                    </p>
                                )
                            }
                            <button
                            onClick={() => {
                                {!cookies.access_token && Alert('Login to submit the blog')}
                            }}
                            type='submit' className='py-2 px-8 bg-button-primary text-white rounded-md mt-4'>SUBMIT</button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default NewBlog

// {errors.topic &&
//     <p className='mt-1'>
//         {errors.topic.type === 'required' && "This field is required"}
//         {errors.topic.type === 'maxLength' && "Max Length is 20 char."}
//     </p>
// }