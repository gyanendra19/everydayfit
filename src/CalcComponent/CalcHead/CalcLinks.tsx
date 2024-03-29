import { calcContextType, useCalcContext } from '@/contexts/calcContext'

type Props = {
    children: string
}

function CalcLinks({children}: Props) {
    const {toggleCalc, setToggleCalc} = useCalcContext() as calcContextType
    const lowerCasePage = children.toLowerCase().replace(/ /g , "") as string

  return (
    <button
    className={`${toggleCalc === lowerCasePage ? "opacity-70" : ""} cursor-pointer`}
    onClick={() => setToggleCalc(lowerCasePage)}
    >
        {children}
    </button>
  )
}

export default CalcLinks