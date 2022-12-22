import React from 'react'
import LeftSide from './LeftSide'
import RightSide from './RightSide'

const Entire = () => {
  return (
    <div className='flex w-full h-screen ' >
        <LeftSide />
        <RightSide />
    </div>
  )
}

export default Entire