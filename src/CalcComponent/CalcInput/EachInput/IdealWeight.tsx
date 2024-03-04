import { useForm } from "react-hook-form"

type Props = {}

function IdealWeight({ }: Props) {
    const { register, trigger, formState: { errors } } = useForm()
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

    const onSubmit = async (e: any) => {
        const isValid = await trigger()
        if (!isValid) {
            e.preventDefault()
        }
    }

    return (
        <div className='basis-3/5'>
            <form
                action=""
                onSubmit={onSubmit}
            >
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

                <button
                    type='submit'
                    className='py-3 mt-3.5 px-4 md:w-5/6 w-[90%] rounded-md bg-[#FF8A6C] text-white'>RESULTS</button>
            </form>
        </div>

    )
}

export default IdealWeight