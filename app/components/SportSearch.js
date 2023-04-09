"use client"
import React, { useState } from 'react'

const SportSearch = ({ getSearchResults }) => {
  const [query, setQuery] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/sports/search?query=${query}`)
    const sports = await res.json()
    getSearchResults(sports)
  }
  return (
    <form onSubmit={handleSubmit} className='mt-1 mb-2 text-black rounded-sm'>
      <input type="text" placeholder='Search sports' value={query} onChange={(e) => setQuery(e.target.value)} />
      <button type='submit' className=' bg-blue-600 text-white px-1 ml-1 rounded-sm'>Search</button>
    </form>
  )
}

export default SportSearch