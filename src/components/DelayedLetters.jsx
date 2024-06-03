import { useState, useEffect } from 'react'

export function DelayedLetters ({ text, delay, repeat }) {
  const [count, setCount] = useState(0)
  const [phrase, setPhrase] = useState([])
  const [restartCount, setRestartCount] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      if (!deleting) {
        if (count < text.length) {
          setPhrase(prevPhrase => prevPhrase + text[count])
          setCount(prevCount => prevCount + 1)
        } else if (restartCount < repeat) {
          setDeleting(true)
        }
      } else {
        if (count > 0) {
          setPhrase(prevPhrase => prevPhrase.slice(0, -1))
          setCount(prevCount => prevCount - 1)
        } else {
          setDeleting(false)
          setRestartCount(prevRestartCount => prevRestartCount + 1)
        }
      }
    }, delay)

    return () => clearInterval(interval)
  }, [count, deleting])

  return (
    <>
      <span className='text text-lg'>{phrase}</span>
    </>
  )
}
