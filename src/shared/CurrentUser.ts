import axios from "axios"


export const getCurrentUser = async(token: string, setCurrentUser:(value: any) => void) => {

    const res = await axios({
        method: 'GET',
        url: `https://everydayfit-backend.onrender.com/api/v1/user/protect/${token}`
    })

    setCurrentUser(res.data.data)
}

