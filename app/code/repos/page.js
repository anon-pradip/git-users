import React from 'react'

async function getRepos() {
  const res = await fetch("https://api.github.com/users/anon-pradip/repos")
  const data = await res.json()
  return data
}

const page = async () => {
  const data = await getRepos()
  console.log(data[0].name)
  return (

    < div > code page</ div>
  )
}

export default page