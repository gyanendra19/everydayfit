import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    head: string,
    description: string
}

function OurServices({head, description}: Props) {
  return (
    <div className='relative md:basis-2/5 w-[290px] mt-16'>
        <div className='before:absolute before:-top-10 before:-left-14 before:content-boxPink before:z-[-1]'>
            <h2 className='text-xl text-header-primary mt-6 font-bold'>{head}</h2>
            <p className='mt-4'>{description}</p>
            <div className='relative w-[50px] text-white left-40 top-16'>
            <div className='before:absolute before:content-boxRed before:z-[-1] before:-top-6 before:-left-4'>
                <AnchorLink
                >Check</AnchorLink>
            </div>
            </div>
        </div>
    </div>
  )
}

export default OurServices