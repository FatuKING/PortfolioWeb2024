import { Navbar } from './components/Navbar.jsx'
import { AboutMe } from './components/AboutMe.jsx'
import { Proyect } from './components/Proyect.jsx'
import { useState } from 'react'

function App () {
  const [proyect, setProyect] = useState(true)

  const proyectFront = () => {
    setProyect(true)
  }

  const proyectBack = () => {
    setProyect(false)
  }

  const styleOn = 'scale-95 bg-gray-700 border border-gray-600 rounded-full'

  return (
    <>
      <Navbar name1='Inicio' name2='Proyectos' name3='Habilidades' url1='#' url2='#Proyectos' url3='#Habilidades' />
      <main className='flex flex-col items-center justify-center pt-24'>
        <AboutMe />

        <section className='w-4/5 xl:w-3/4 2xl:w-1/2 pt-32'>
          <article className='flex justify-between items-center'>
            <h2 className=' text-xl xl:text-2xl font-bold' id='Proyectos'> <i class='bi bi-code-slash font-bold' /> Proyectos</h2>
            <div className='flex justify-center items-center w-auto bg-gray-800 border border-gray-600 rounded-full shadow shadow-gray-600 hover:shadow-gray-600'>
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

        <section className='w-4/5 xl:w-3/4 2xl:w-1/2 pt-32'>
          <h2 className='text-lg lg:text-xl xl:text-2xl  pb-3 font-bold' id='Habilidades'> <i class='bi bi-code-slash font-bold' /> Habilidades</h2>
        </section>
      </main>

    </>
  )
}

export default App
