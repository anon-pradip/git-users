import Repo from '@/app/components/Repo'
import RepoDirs from '@/app/components/RepoDirs'
import Link from 'next/link'
import React, { Suspense } from 'react'

const page = ({ params }) => {
  const { name } = params
  return (
    <div className='flex flex-col justify-center items-center py-2'>
      <div className=' bg-white px-1 py-2 text-black max-w-md w-full rounded-sm'>
        <Link href="/code/repos" className='rounded-sm text-sm bg-blue-900 text-white hover:bg-blue-700 p-1' >
          Back to Repos
        </Link>
        <Suspense fallback={<div>Loading repo...</div>}>
          <Repo name={name} />
        </Suspense>
        <Suspense fallback={<div>Loading directories...</div>}>
          <RepoDirs name={name} />
        </Suspense>
      </div>
    </div>

  )
}

export default page