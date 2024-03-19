import useMediaQuery from '@/hooks/useMediaQuery'
import { RiCloseCircleLine } from '@remixicon/react'
import { useCookies } from 'react-cookie'
import { NavLink } from 'react-router-dom'
import { Alert } from './AuthApi'
import { gymContextType, useGymContext } from '@/contexts/gymContext'

type Props = {
    whichPageOne: String,
    whichPageTwo: String,
    isCheckout: boolean
}

function MobileSidebar({whichPageOne, whichPageTwo, isCheckout }: Props) {
    const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)")
    const {isToggle, setToggle} = useGymContext() as gymContextType
    const [cookies, _, removeCookies] = useCookies(['access_token'])


    return (!isAboveMediumScreen && isToggle && (
        <div className='h-full w-[300px] bg-box-primary fixed right-0 bottom-0 z-40 '>
            <div className='w-full py-16 text-xl relative'>
                <div className='h-full w-3/5 mx-auto flex flex-col gap-7'>
                    <div
                        onClick={() => setToggle(!isToggle)}
                        className='absolute right-10 top-8'>
                        <RiCloseCircleLine size='28' />
                    </div>
                    <NavLink to={`/${whichPageOne}`}>{whichPageOne.toUpperCase()}</NavLink>
                    <NavLink to={`/${whichPageTwo}`}>{whichPageTwo.toUpperCase()}</NavLink>
                    {isCheckout && <NavLink to={`/calculators`}>CALCULATORS</NavLink>}
                    {
                        cookies.access_token ?
                            <button
                                onClick={() => {
                                    removeCookies('access_token')
                                    Alert('Logged out')
                                }}
                                className='rounded-md bg-button-primary text-white hover:opacity-90 py-2 px-8'
                            >Logout</button>
                            :
                            <NavLink
                                className='rounded-md bg-button-primary text-white hover:opacity-90 py-2 px-8'
                                to='/signup'>Signup</NavLink>
                    }

                </div>
            </div>
        </div>
    )
    )
}

export default MobileSidebar