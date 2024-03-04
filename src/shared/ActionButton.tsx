import AnchorLink from 'react-anchor-link-smooth-scroll'
import { gymContextType, useGymContext } from '../contexts/gymContext'
import { Pages } from './types'
import { NavLink } from 'react-router-dom'

type PropsOne = {
    children: string
}

type PropsTwo = {
    children: string,
    toPage: string
}

function ActionButton({children}: PropsOne) {

  const {setSelectedPage} = useGymContext() as gymContextType
  return (
    <AnchorLink
    onClick={() => setSelectedPage(Pages.ContactUs)}
    className='rounded-md bg-button-primary text-white hover:opacity-90 py-2 px-8'
    href={`${Pages.ContactUs}`}
    >
        {children}
    </AnchorLink>
  )
}

export function FeaturesButton({children, toPage}: PropsTwo) {

  const {setSelectedPage} = useGymContext() as gymContextType
  return (
    <NavLink
    onClick={() => setSelectedPage(Pages.ContactUs)}
    className='rounded-md bg-button-primary text-white hover:opacity-90 py-2 px-8'
    to={`/${toPage}`}
    >
        {children}
    </NavLink>
  )
}

export default ActionButton