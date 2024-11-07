import Register from '@/components/Auth/Register'
import Loading from '@/components/Shared/Loading'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Register />
    </Suspense>
  )
}

export default page
