import Link from 'next/link'
import React from 'react'

const fetchRepoContents = async (name) => {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  const res = await fetch(`https://api.github.com/repos/anon-pradip/${name}/contents`)
  const contents = await res.json()
  return contents
}

const RepoDirs = async ({ name }) => {
  const contents = await fetchRepoContents(name)
  const dirs = contents.filter((content) => content.type === 'dir')
  return (
    <div className='mt-3'>
      <h3 className=' font-bold'>Directories</h3>
      <ul className='max-w-md space-y-1 list-disc list-inside'>
        {dirs.map((dir) => (
          <li key={dir.path} className='ml-4'>
            <Link href={`/code/repos/${name}/${dir.path}`} className=' text-blue-900 font-medium underline'>{dir.path}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RepoDirs