import React from 'react'
import { CircleLoader } from 'react-spinners'

const LoadingUi = () => {
  return (
    <div className='flex gap-4 flex-col min-h-screen justify-center w-full items-center'>
      <CircleLoader className='text-black dark:text-white' size={32}/>
      <p>Stick tight Loading...</p>
    </div>
  )
}

export default LoadingUi
