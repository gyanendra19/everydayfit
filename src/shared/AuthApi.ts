import axios from "axios"
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom"

export function Alert(message : String = 'Something went wrong, Try Again') {
    const markup = `<div class='fixed left-[43%] top-8 py-2 px-6 rounded-md bg-[#F6BD60] text-white animate-alert-animate opacity-90 z-[1000]'>${message}</div>`
    document.querySelector('.alert-active')?.insertAdjacentHTML('afterbegin', markup)
}


export const AuthApi = (type: String) => {
    const navigate = useNavigate()
    const [_, setCookies] = useCookies(['access_token'])

    const whichAuth = (data: any) => {
        if(type === 'signup'){
            return  {email: data.signupemail,
            password: data.signuppassword,
            passwordConfirm: data.signupconfirmpassword}
        }else{
            return {email: data.email,
            password: data.password}
        }
    }

    return async (data: any, e: any) => {
    
    try {
    e.preventDefault()
    const res = await axios.post(`http://127.0.0.1:4555/api/v1/user/${type}`, whichAuth(data))


    if (res.data.status === 'success') {
        setCookies('access_token', res.data.token, {path: '/'})
        type === 'signup' ? Alert('Signed in Successfull') : Alert('Log in Successfull')
        setTimeout(() => navigate('/'), 1000)
    }
    } catch (err: any) {
        Alert(err.response.data.message || 'Somehting went wrong, Try Again!')
    }
    }
}
