import React from 'react'

type Props = {
    children: React.ReactNode
}

function Htext({children}: Props) {
  return (
    <h2 className='text-3xl text-header-primary mt-6 font-bold'>{children}</h2>
  )
}

export default Htext