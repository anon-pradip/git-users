import Link from 'next/link'
import React from 'react'
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa"

async function getRepos() {
  const res = await fetch("https://api.github.com/users/anon-pradip/repos")
  const repos = await res.json()
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return repos
}

const page = async () => {
  const repos = await getRepos()
  return (
    <div className="px-2">
      <p className=" font-bold text-xl py-3">Repositories</p>
      <div className=" flex flex-col space-y-2 justify-center items-center">
        {repos.map((repo) => (
          <Link
            href={`/code/repos/${repo.name}`}
            className=" flex flex-col px-1 py-1 text-black bg-white w-full rounded-sm max-w-md hover:-translate-y-0.5 duration-200"
            key={repo.id}
          >
            <p className=" font-bold">{repo.name}</p>
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
          </Link>
        ))}
      </div>
    </div>
  );
}

export default page