import Login from '@/components/Auth/Login'
import Loading from '@/components/Shared/Loading'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <Suspense fallback={<Loading />}>
        <Login />
    </Suspense>
  )
}

export default page
