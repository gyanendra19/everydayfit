import { productContextType, useProductContext } from '@/contexts/productContext'

type Props = {
    children: String
}

function VarietyBtn({children}: Props) {
    const {setToggleVariety} = useProductContext() as productContextType
    
  return (
    <button
    className='text-[#B14343] font-bold'
    onClick={() => setToggleVariety(children)}
    >
        {children}
    </button>
  )
}

export default VarietyBtn