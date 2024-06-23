import { useState, useEffect } from 'react'
import { api } from '../logic/api.js'
import { DelayedLetters } from './DelayedLetters.jsx'
import { LinkIcon } from './LinkIcon.jsx'

export function AboutMe () {
  const [data, setData] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await api('index')
        setData(result)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <section className='flex flex-col-reverse gap-14 md:gap-5 justify-center items-center w-4/5 md:flex-row xl:w-3/4 2xl:w-1/2'>
        <article className='flex flex-col'>
          <h1 className='text-3xl lg:text-4xl xl:text-5xl font-bold'>Hola, soy <span className='bg-gradient-to-tl from-slate-800 via-violet-500 to-violet-600 bg-clip-text text-transparent'>{data.name}</span></h1>
          <DelayedLetters text='Software Developer Jr' delay={200} repeat={2} />

          <p className='inline-block pt-3 xl:text-lg md:w-4/5 xl:w-2/3 2xl:w-3/4'>
            {data.description}
          </p>

          <div className='flex gap-3 pt-5'>
            {data.url && data.iconName && data.iconTitle && data.url.map((link, index) => (
              <LinkIcon
                key={index}
                url={link}
                icon={data.iconName[index]}
                title={data.iconTitle[index]}
              />
            ))}
          </div>
        </article>

        <figure className='aspect-square max-w-64 rounded-full md:min-w-72 lg:min-w-80'>
          <img className='rounded-full object-cover imgShadow' src={data.img} alt='Facundo Cozzani Foto' />
        </figure>
      </section>
    </>
  )
}
