import Register from '@/components/Auth/Register'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Register />
    </Suspense>
  )
}

export default page
