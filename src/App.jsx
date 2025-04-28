import { Navbar } from './components/Navbar.jsx'
import { AboutMe } from './components/AboutMe.jsx'
import { Proyect } from './components/Proyect.jsx'
import { useState } from 'react'
import { Skill } from './components/Skill.jsx'
import { Footer } from './components/Footer.jsx'
import { HeroSection } from './components/HeroSection.jsx'

function App () {
  const [proyect, setProyect] = useState(true)

  const proyectFront = () => {
    setProyect(true)
  }

  const proyectBack = () => {
    setProyect(false)
  }

  const styleOn = 'bg-blue-950/50 border border-gray-800 rounded shadow'

  return (
    <>
      <Navbar />
      <main className='flex flex-col gap-36 xl:gap-48 items-center justify-center pt-20 md:pt-36 '>
        <HeroSection />

        <section className='w-4/5 xl:w-3/4 2xl:w-1/2' id='Proyectos'>
          <article className='flex justify-between items-center pb-4'>
            <h2 className=' text-2xl 2xl:text-3xl font-bold'> <i className='bi bi-code-slash font-bold' /> Proyectos</h2>
            <div className='flex justify-center items-center w-auto bg-transparent border border-gray-500 rounded'>
              <button onClick={proyectFront} className={`p-1 pl-2 pr-2 ${proyect ? styleOn : null}`}>
                Frontend
              </button>
              <button onClick={proyectBack} className={`p-1 pl-2 pr-2 ${!proyect ? styleOn : null}`}>
                Backend
              </button>
            </div>
          </article>

          {
          proyect ? <Proyect endpoint='frontend' /> : <Proyect endpoint='backend' />
          }
        </section>

        <section className='w-4/5 xl:w-3/4 2xl:w-1/2 pb-36'>
          <article className='pb-4'>
            <h2 className='text-2xl 2xl:text-3xl pb-3 font-bold' id='Habilidades'> <i className='bi bi-code-slash font-bold' /> Habilidades</h2>
          </article>

          <Skill />
          

        </section>

        <AboutMe />
      </main>

      <Footer />

    </>
  )
}

export default App
