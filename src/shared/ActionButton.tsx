import AnchorLink from 'react-anchor-link-smooth-scroll'
import { gymContextType, useGymContext } from '../contexts/gymContext'
import { Pages } from './types'

type Props = {
    children: string
}

function ActionButton({children}: Props) {

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

export default ActionButton