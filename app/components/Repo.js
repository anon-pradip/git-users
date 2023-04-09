import React from 'react'
import { FaCodeBranch, FaEye, FaStar } from 'react-icons/fa'

const fetchRepo = async (name) => {
  const response = await fetch(`https://api.github.com/repos/anon-pradip/${name}`)
  const repo = await response.json()
  return repo
}

const Repo = async ({ name }) => {
  const repo = await fetchRepo(name)
  return (
    <div>
      <p className=" font-bold text-xl mt-2">{repo.name}</p>
      <p className=" font-semibold text-slate-600">{repo.description}</p>
      <div className=" flex flex-wrap justify-between text-slate-500">
        <div className=" flex flex-row justify-center items-center gap-x-2">
          <p>
            <FaStar fill='red-yellow' size={15} />
          </p>
          <p>{repo.stargazers_count}</p>
        </div>
        <div className=" flex flex-row justify-center items-center gap-x-2">
          <p>
            <FaCodeBranch />
          </p>
          <p>{repo.forks_count}</p>
        </div>
        <div className=" flex flex-row justify-center items-center gap-x-2">
          <p>
            <FaEye />
          </p>
          <p>{repo.watchers_count}</p>
        </div>
      </div>
    </div>
  )
}

export default Repo