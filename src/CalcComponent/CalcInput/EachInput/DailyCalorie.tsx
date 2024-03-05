import results from '@/CalcComponent/CalcResults/ResultsApi'
import { useForm } from 'react-hook-form'

type Props = {}

function DailyCalorie({ }: Props) {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const inputStyles = `py-3 mt-4 px-4 md:w-5/6 w-[90%] bg-box-secondary rounded-md placeholder-white focus:outline-none`

    const inputBody = (field: string, fieldCap: string, type: string) => {
        return <input
            {...register(`${field}`, {
                required: true,
                maxLength: 50
            })}
            placeholder={fieldCap}
            className={`${inputStyles}`}
            type={type} />

    }

    const onSubmit = results('dailycalorie')

    // const inputErrors = (item:string) => {
    //    return errors[`${item}`] &&
    //     <p className='mt-1'>
    //         {errors[`${item}`].type === 'required' && 'This field is required'}
    //     </p>      
    // }
    return (
        <div className='basis-3/5'>
            <form
                action=""
                onSubmit={handleSubmit(onSubmit)}
            >
                {inputBody('age', 'Age', 'number')}
                {errors.age &&
                    <p className='mt-1'>
                        {errors.age.type === 'required' && 'This field is required'}
                    </p>
                }
                {inputBody('gender', 'Gender', 'text')}
                {errors.gender &&
                    <p className='mt-1'>
                        {errors.gender.type === 'required' && 'This field is required'}
                    </p>
                }
                {inputBody('weight', 'Weight', 'number')}
                {errors.weight &&
                    <p className='mt-1'>
                        {errors.weight.type === 'required' && 'This field is required'}
                    </p>
                }
                {inputBody('height', 'Height', 'number')}
                {errors.height &&
                    <p className='mt-1'>
                        {errors.height.type === 'required' && 'This field is required'}
                    </p>
                }
                <div className={`${inputStyles}`}>
                    <select id='activitylevel' className='p-4 w-[90%] rounded-md mt-1 bg-box-secondary border-2 border-box-primary text-text-primary focus:outline-none' {...register('activitylevel')}>
                        <option value="level_1">Sedentary: little or no exercise</option>
                        <option value="level_2">Exercise 1-3 times/week</option>
                        <option value="level_3">Exercise 4-5 times/week</option>
                        <option value="level_4">Daily exercise or intense exercise 3-4 times/week</option>
                        <option value="level_5">Intense exercise 6-7 times/week</option>
                        <option value="level_6">Very intense exercise daily, or physical job</option>
                    </select>
                </div>

                <button
                    type='submit'
                    className='py-3 mt-3.5 px-4 md:w-5/6 w-[90%] rounded-md bg-[#FF8A6C] text-white'>RESULTS</button>
            </form>
        </div>

    )
}

export default DailyCalorie