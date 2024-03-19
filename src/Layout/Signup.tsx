import { useForm } from 'react-hook-form'
import { useState } from 'react'
import Logo from '@/assets/logo.png'
import { AuthApi } from '@/shared/AuthApi'


function Signup() {
    const { register, getValues, handleSubmit, formState: { errors } } = useForm()
    const [toggleAuth, setToggleAuth] = useState('SIGNUP')
    const authStyle = `text-[#790029] md:w-1/2 w-3/4 font-bold text-2xl cursor-pointer text-center pb-3 transition-all`

    const onSubmit = AuthApi('signup') 
    const submit =  AuthApi('login')
    

    return (
        <>
        <section className='py-10 w-full alert-active'>
        <div className='w-[90%] mx-auto'>
            <a href='/'>
                <img src={Logo} alt="logo" />
            </a>
        </div>
    </section>
        <div className='pt-16 w-full'>
            <div className='md:w-1/2 w-full mx-auto flex flex-col items-center'>
                <div className='flex w-1/2 gap-4 md:gap-0'>
                    <h1 onClick={() => setToggleAuth('SIGNUP')} className={`${authStyle} ${toggleAuth === 'SIGNUP' ? 'border-b-2 border-button-primary' : ''}`}>SIGNUP</h1>
                    <h1 onClick={() => setToggleAuth('LOGIN')} className={`${authStyle} ${toggleAuth === 'LOGIN' ? 'border-b-2 border-button-primary' : ''}`}>LOGIN</h1>
                </div>

                {toggleAuth === 'SIGNUP' ? (

                    <form 
                    onSubmit={handleSubmit(onSubmit)}
                    className='w-full mx-auto flex flex-col items-center'>
                        <input
                            {...register('signupemail', {
                                required: true,
                                maxLength: 20,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })}
                            placeholder='EMAIL'
                            className='px-4 md:w-1/2 w-3/4 py-3 bg-[#FFCFD2] mt-6 rounded-md  placeholder-white focus:outline-none'
                            type="text" />
                        {errors.signupemail && (
                            <p className='mt-1'>
                                {errors.signupemail.type === 'minLength' && 'The field should have max 20 char'}
                                {errors.signupemail.type === 'required' && 'This field is required'}
                                {errors.signupemail.type === 'pattern' && 'Invalid email'}
                            </p>
                        )
                        }
                        <input
                            {...register('signuppassword', {
                                required: true,
                                minLength: 8,
                            })}
                            placeholder='PASSWORD'
                            className='px-4 md:w-1/2 w-3/4 py-3 bg-[#FFCFD2] mt-4 rounded-md placeholder-white focus:outline-none'
                            type="password" />
                        {errors.signuppassword && (
                            <p className='mt-1'>
                                {errors.signuppassword.type === 'minLength' && 'Password should have atleast 8 char'}
                                {errors.signuppassword.type === 'required' && 'This field is required'}
                            </p>
                        )
                        }
                        <input
                            {...register('signupconfirmpassword', {
                                required: true,
                                minLength: 8,
                                validate: (match) => {
                                    const password = getValues("signuppassword")
                                    return match === password || "Passwords should match!"
                                }
                            })}
                            placeholder='CONFIRM PASSWORD'
                            className='px-4 md:w-1/2 w-3/4 py-3 bg-[#FFCFD2] mt-4 rounded-md placeholder-white focus:outline-none'
                            type="password" />
                        {errors.signupconfirmpassword && (
                            <p className='mt-1'>
                                {errors.signupconfirmpassword.type === 'validate' && 'Passwords do not match'}
                                {errors.signupconfirmpassword.type === 'minLength' && 'Password should have atleast 8 char'}
                                {errors.signupconfirmpassword.type === 'required' && 'This field is required'}
                            </p>
                        )
                        }
                        <button type='submit' className='py-2 px-8 w-3/4 md:w-1/2 bg-button-primary text-white rounded-md mt-4'>SIGNUP</button>
                    </form>
                )
                    :
                    (
                        <form
                        onSubmit={handleSubmit(submit)}
                        className='w-full mx-auto flex flex-col items-center'>
                            <input
                                {...register('email', {
                                    required: true,
                                    maxLength: 20,
                                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                })}
                                placeholder='EMAIL'
                                className='px-4 md:w-1/2 w-3/4 py-3 bg-[#FFCFD2] mt-6 rounded-md  placeholder-white focus:outline-none'
                                type="text" />
                            {errors.email && (
                                <p className='mt-1'>
                                    {errors.email.type === 'minLength' && 'The field should have max 20 char'}
                                    {errors.email.type === 'required' && 'This field is required'}
                                    {errors.email.type === 'pattern' && 'Invalid email'}
                                </p>
                            )
                            }

                            <input
                                {...register('password', {
                                    required: true,
                                    minLength: 8,
                                })}
                                placeholder='PASSWORD'
                                className='px-4 md:w-1/2 w-3/4 py-3 bg-[#FFCFD2] mt-4 rounded-md placeholder-white focus:outline-none'
                                type="password" />
                            {errors.password && (
                                <p className='mt-1'>
                                    {errors.password.type === 'minLength' && 'Password should have atleast 8 char'}
                                    {errors.password.type === 'required' && 'This field is required'}
                                </p>
                            )
                            }
                            <button type='submit' className='py-2 px-8 w-3/4 md:w-1/2 bg-button-primary text-white rounded-md mt-4'>LOGIN</button>
                        </form>
                    )
                }
            </div>
        </div>
        </>
    )
}

export default Signup