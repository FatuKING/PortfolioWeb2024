import { useState, useEffect } from 'react'
import { api } from '../logic/api'

export function Proyect ({ endpoint }) {
  const [data, setData] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await api(endpoint)
        setData(result)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [endpoint])

  return (
    <>
      <section className='grid grid-cols-1 md:grid-cols-2 gap-2'>
        {data && data.map((data, index) => (
          <article key={index} className='h-44 bg-[#0f172a] border border-gray-500/20 hover:border-gray-400 p-3 pt-4 pb-4 mt-5 rounded-md relative'>
            <h3 className='inline-block text-lg xl:text-xl font-bold title hover:text-purple-700'><a href={data.url}>{data.name}</a></h3>

            <a href={data.urlGithub} className='absolute top-3 right-4 hover:text-purple-700'><i className='bi bi-github text-2xl' /></a>

            <p className='pt-2 text-gray-400'>{data.description}</p>

            <div className='flex gap-2 absolute bottom-3'>
              {data.skills && data.skills.map((skill, index) => (
                <span key={index} className='text-xs font-medium p-1 pl-2 pr-2 bg-blue-950 border border-gray-800 rounded-full'>{skill}</span>
              ))}
            </div>
          </article>
        ))}

      </section>
    </>
  )
}
