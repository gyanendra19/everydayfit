import results from '@/CalcComponent/CalcResults/ResultsApi'
import { useForm } from 'react-hook-form'

type Props = {}

function BMI({ }: Props) {
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

    const onSubmit = results('bmi')

    return (
        <div className='basis-3/5'>
            <form
                action=""
                onSubmit={handleSubmit(onSubmit)}
            >
                {inputBody('age', 'Age', 'number')}
                {
                    errors.age &&
                    <p className='mt-1'>
                        {errors.age.type === 'required' && 'This field is required'}
                    </p>
                }
                {inputBody('weight', 'Weight', 'number')}
                {
                    errors.weight &&
                    <p className='mt-1'>
                        {errors.weight.type === 'required' && 'This field is required'}
                    </p>
                }
                {inputBody('height', 'Height', 'number')}
                {
                    errors.height &&
                    <p className='mt-1'>
                        {errors.height.type === 'required' && 'This field is required'}
                    </p>
                }

                <button
                    type='submit'
                    className='py-3 mt-3.5 px-4 md:w-5/6 w-[90%] rounded-md bg-[#FF8A6C] text-white'>RESULTS</button>
            </form >
        </div >
    )
}

export default BMI