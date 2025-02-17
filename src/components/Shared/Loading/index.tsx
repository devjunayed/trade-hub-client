import React from 'react'
import { CircleLoader } from 'react-spinners'

const Loading = () => {
  return (
    <div className='min-h-screen w-full flex justify-center items-center'>
      <CircleLoader className='text-gray-900 dark:text-white' />
    </div>
  )
}

export default Loading
