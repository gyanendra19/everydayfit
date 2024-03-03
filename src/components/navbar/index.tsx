import Logo from "../../assets/logo.png"
import Links from './Links'
import ActionButton from '../../shared/ActionButton'
import useMediaQuery from '../../hooks/useMediaQuery'
import { RiMenu3Line, RiCloseCircleLine } from '@remixicon/react'
import { useEffect, useState } from 'react'
import { gymContextType, useGymContext } from "@/contexts/gymContext"
import { Pages } from "@/shared/types"

type Props = {}

function Navbar({ }: Props) {
    const [isToggle, setToggle] = useState(false)
    const [isTopOfPage, setIsTopOfPage] = useState(true)
    const {setSelectedPage} = useGymContext() as gymContextType

    useEffect(() => {
        const scrollNav = () => {
            if(window.scrollY === 0){
                setIsTopOfPage(true)
                setSelectedPage(Pages.Home)
            }else{
                setIsTopOfPage(false)
            }
        }

        window.addEventListener('scroll', scrollNav)
        return () => removeEventListener('scroll', scrollNav)
    }, [])

    const isAboveMediumScreen = useMediaQuery("(min-width:1060px)")
    return (
        <section className={`${isTopOfPage ? "" : "bg-box-primary"} w-full py-6 md:fixed top-0 z-30`}>
            <div className="w-full">
                <div className='md:mx-10 mx-4 flex justify-between items-center'>
                    <div className='flex gap-8'>
                        <img src={Logo} alt="" />
                    </div>

                    {isAboveMediumScreen ? (
                        <div className='flex gap-8 items-center font-semibold'>
                            <Links>Home</Links>
                            <Links>Our Services</Links>
                            <Links>Features</Links>
                            <Links>Contact us</Links>
                            <ActionButton>Become a member</ActionButton>
                        </div>
                    )
                        :
                        (
                            <div
                                onClick={() => setToggle(!isToggle)}
                                className='rounded-full p-2 bg-button-primary'>
                                <RiMenu3Line color='white' />
                            </div>
                        )
                    }
                </div>
            </div>

            {!isAboveMediumScreen && isToggle && (
                <div className='h-full w-[300px] bg-box-primary fixed right-0 bottom-0 z-40 '>
                    <div className='w-full py-16 text-xl relative'>
                        <div className='h-full w-3/5 mx-auto flex flex-col gap-7'>
                            <div 
                            onClick={() => setToggle(!isToggle)}
                            className='absolute right-10 top-8'>
                                <RiCloseCircleLine size = '28'/>
                            </div>
                            <Links>Home</Links>
                            <Links>Our Services</Links>
                            <Links>Features</Links>
                            <Links>Contact us</Links>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Navbar