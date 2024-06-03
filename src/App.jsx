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

  const styleOn = 'scale-90 bg-violet-700 border border-violet-600 rounded-full'

  return (
    <>
      <Navbar name1='Inicio' name2='Proyectos' name3='Habilidades' url1='#' url2='#Proyectos' url3='#Habilidades' />
      <main className='flex flex-col items-center justify-center pt-24'>
        <AboutMe />

        <section className='w-4/5 xl:w-3/4 2xl:w-1/2 pt-32'>
          <h2 className='text-2xl pb-3 font-bold' id='Proyectos'> <i class='bi bi-code-slash font-bold' /> Proyectos</h2>
          <div className='flex justify-center w-52 bg-gradient-to-tl from-slate-800 via-violet-600 to-violet-700 border border-gray-600 rounded-full'>
            <button onClick={proyectFront} className={`text-xl p-1 pl-3 pr-3 ${proyect ? styleOn : null}`}>
              Frontend
            </button>
            <button onClick={proyectBack} className={`text-xl p-1 pl-3 pr-3 ${!proyect ? styleOn : null}`}>
              Backend
            </button>
          </div>

          {
          proyect ? <Proyect /> : <Proyect />
          }
        </section>

        <section className='w-4/5 xl:w-3/4 2xl:w-1/2 pt-32'>
          <h2 className='text-2xl pb-3 font-bold' id='Habilidades'> <i class='bi bi-code-slash font-bold' /> Habilidades</h2>
        </section>
      </main>

    </>
  )
}

export default App
