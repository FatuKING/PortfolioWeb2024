import { Navbar } from './components/Navbar.jsx'
import { AboutMe } from './components/AboutMe.jsx'
import { Proyect } from './components/Proyect.jsx'
import { useState } from 'react'
import { Skill } from './components/Skill.jsx'
import { Footer } from './components/Footer.jsx'
import { Counter } from './components/Counter.jsx'

function App () {
  const [proyect, setProyect] = useState(true)

  const proyectFront = () => {
    setProyect(true)
  }

  const proyectBack = () => {
    setProyect(false)
  }

  const styleOn = 'scale-95 bg-gray-800/60 border border-gray-600 rounded-full'

  return (
    <>
      <Navbar name1='Inicio' name2='Proyectos' name3='Habilidades' url1='#' url2='#Proyectos' url3='#Habilidades' />
      <main className='flex flex-col gap-40 items-center justify-center pt-36 '>
        <AboutMe />

        <section className='flex justify-between w-4/5 xl:w-3/4 2xl:w-1/2'>
          <article className='flex flex-col justify-center items-center p-2'>
            <div className='text-3xl font-bold'>2</div>
            <span className='text-lg font-semibold'>Experiencia</span>
          </article>

          <Counter numberMax='11' text='Proyectos' delay='200' />

          <Counter numberMax='120' text='Contribuciones' delay='100' />
        </section>

        <section className='w-4/5 xl:w-3/4 2xl:w-1/2 pt-16' id='Proyectos'>
          <article className='flex justify-between items-center pb-4'>
            <h2 className=' text-xl xl:text-2xl 2xl:text-3xl font-bold'> <i class='bi bi-code-slash font-bold' /> Proyectos</h2>
            <div className='flex justify-center items-center w-auto bg-transparent border border-gray-500 rounded-full'>
              <button onClick={proyectFront} className={`p-1 pl-3 pr-3 ${proyect ? styleOn : null}`}>
                Frontend
              </button>
              <button onClick={proyectBack} className={`p-1 pl-3 pr-3 ${!proyect ? styleOn : null}`}>
                Backend
              </button>
            </div>
          </article>

          {
          proyect ? <Proyect /> : <Proyect />
          }
        </section>

        <section className='w-4/5 xl:w-3/4 2xl:w-1/2 pb-36'>
          <article className='pb-4'>
            <h2 className='text-lg lg:text-xl xl:text-2xl 2xl:text-3xl pb-3 font-bold' id='Habilidades'> <i class='bi bi-code-slash font-bold' /> Habilidades</h2>
          </article>

          <Skill />

        </section>
      </main>

      <Footer />

    </>
  )
}

export default App
