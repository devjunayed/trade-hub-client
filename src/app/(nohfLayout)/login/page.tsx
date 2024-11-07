import Login from '@/components/Auth/Login'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <Login />
    </Suspense>
  )
}

export default page
