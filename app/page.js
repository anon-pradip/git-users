"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import Loading from './loading'
import Sports from './components/Sports'
import SportSearch from './components/SportSearch'
const page = () => {
  const [sports, setSports] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSports = async () => {
      const res = await fetch("api/sports")
      const data = await res.json()
      setSports(data)
      setLoading(false)
    }
    fetchSports()
  }, [])

  if (loading) {
    return <Loading />
  }
  return (
    <div className='max-w-md mx-auto'>
      <SportSearch getSearchResults={(results) => setSports(results)} />
      <Sports sports={sports} />
    </div>
  )
}

export default page
