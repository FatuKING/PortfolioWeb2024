import { useState, useEffect } from 'react'

export function Counter ({ numberMax, text, delay }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < numberMax) {
        setCount(count + 1)
      } else {
        clearInterval(interval)
      }

      return () => clearInterval(interval)
    }, delay)
  }, [count, numberMax])

  return (
    <>
      <article className='flex flex-col justify-center items-center p-2'>
        <div className='text-3xl font-bold'>{count}</div>
        <span className='text-xl font-semibold'>{text}</span>
      </article>
    </>
  )
}
