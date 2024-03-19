import { gymContextType, useGymContext } from '@/contexts/gymContext'
import useMediaQuery from '@/hooks/useMediaQuery'
import { RiMenu3Line, RiShoppingCart2Fill } from '@remixicon/react'
import { useCookies } from 'react-cookie'
import { NavLink } from 'react-router-dom'
import { Alert } from './AuthApi'

type Props = {
    featureOne: String,
    featureTwo: String,
    isCheckout: boolean
}

function NavRight({featureOne, featureTwo, isCheckout}: Props) {
    const [cookies, _, removeCookies] = useCookies(['access_token'])
    const {isToggle, setToggle} = useGymContext() as gymContextType
    const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)")

  return (
    isAboveMediumScreen ? (
        <div className='flex gap-8 items-center'>
          <NavLink to={'/checkout'} className='text-text-primary cursor-pointer'><RiShoppingCart2Fill /></NavLink>
          <NavLink to={`/${featureOne}`}>{featureOne}</NavLink>
          <NavLink to={`/${featureTwo}`}>{featureTwo}</NavLink>
          {isCheckout && <NavLink to={`/calculators`}>calculators</NavLink>}
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
      )
        :
        (
          <div className='flex gap-3 items-center'>
            <NavLink to={'/checkout'} className='text-text-primary cursor-pointer'><RiShoppingCart2Fill /></NavLink>
            <div onClick={() => setToggle(!isToggle)}
              className='rounded-full p-2 bg-button-primary'><RiMenu3Line color='white' /></div>
          </div>
        )
  )
}

export default NavRight