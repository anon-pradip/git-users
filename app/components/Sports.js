import Link from 'next/link';
import React from 'react'

const Sports = ({ sports }) => {
  return (
    <div className='max-w-md w-full mx-auto space-y-3'>
      {sports.map((sport) => (
        <div key={sport.id} className=' flex flex-col bg-white text-black rounded-sm py-3 px-2'>
          <p className=' text-xl font-bold'>{sport.title}</p>
          <p className=''>{sport.description}</p>
          <Link href={sport.link} target='_blank' className=' bg-blue-500 text-white px-1 py-1 capitalize max-w-max rounded-sm mt-2'>go to official website</Link>
        </div>
      ))}
    </div>
  )
}

export default Sports