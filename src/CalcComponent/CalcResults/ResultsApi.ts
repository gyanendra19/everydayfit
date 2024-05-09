import { calcContextType, useCalcContext } from "@/contexts/calcContext"
import { Alert } from "@/shared/AuthApi"
import axios from "axios"
import { useForm } from "react-hook-form"


function results(calcType: string) {
    const {setResponse, setWhichCalc } = useCalcContext() as calcContextType
    const { trigger } = useForm()

    const parametres = (data: any) => {
        if (calcType === 'macrocalculator') {
            return {
                age: data.age,
                gender: data.gender,
                weight: data.weight,
                height: data.height,
                activitylevel: data.activitylevel,
                goal: data.goal
            }
        }
        else if (calcType === 'dailycalorie') {
            return {
                age: data.age,
                gender: data.gender,
                weight: data.weight,
                height: data.height,
                activitylevel: data.activitylevel,
                goal: data.goal
            }
        }
        else if (calcType === 'bmi') {
            return {
                age: data.age,
                height: data.height,
                weight: data.weight
            }
        }
        else if (calcType === 'bodyfat') {
            return {
                age: data.age,
                gender: data.gender,
                weight: data.weight,
                height: data.height,
                neck: data.neck,
                waist: data.waist,
                hip: data.hip
            }
        }
        else {
            return {
                gender: data.gender,
                height: data.height
            }
        }

    }

    return async (data: any, e: any) => {
        const isValid = await trigger()
        if (!isValid) {
            e.preventDefault()
        }

        try{
            const res = await axios({
            method: 'GET',
            url: `https://fitness-calculator.p.rapidapi.com/${calcType}`,
            params: parametres(data),
            headers: {
                'X-RapidAPI-Key': '7fcdb6044emshab7fce7ba97264cp1f2c69jsn2eb3df2e2c36',
                'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
            }
        })

        setResponse(res.data.data) 
        setWhichCalc(calcType)
    }catch(err){
        Alert('Something went wrong!!')
    }
    }
}

export default results