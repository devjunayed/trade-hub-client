import React from 'react'
import { CircleLoader } from 'react-spinners'

const Loading = () => {
  return (
    <div className='min-h-screen w-full flex justify-center items-center'>
      <CircleLoader />
    </div>
  )
}

export default Loading
