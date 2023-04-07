import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className=' flex flex-col space-y-2 border-b-2 justify-center items-center bg-blue-600 text-white'>
      <div className=' text-xl font-bold tracking-wider'>
        <Link href="/">Pradip Subedi</Link>
      </div>
      <div className=' flex space-x-4'>
        <Link href="/about" className=' hover:underline'>About</Link>
        <Link href="/team" className=' hover:underline'>Team</Link>
        <Link href="/code" className=' hover:underline'>Code</Link>
      </div>
    </div>

  )
}

export default Header
