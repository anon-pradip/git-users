import Link from 'next/link'
import React from 'react'

const fetchRepoContents = async (name) => {
  const res = await fetch(`https://api.github.com/repos/anon-pradip/${name}/contents`)
  const contents = await res.json()
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return contents
}

const RepoDirs = async ({ name }) => {
  const contents = await fetchRepoContents(name)
  const dirs = contents.filter((content) => content.type === 'dir')
  return (
    <div className='mt-3'>
      <h3 className=' font-bold'>Directories</h3>
      <ul>
        {dirs.map((dir) => (
          <li key={dir.path}>
            <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default RepoDirs