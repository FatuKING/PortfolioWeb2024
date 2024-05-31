import { Navbar } from './components/Navbar'
import { AboutMe } from './components/AboutMe'

function App () {
  return (
    <>
      <Navbar name1='Inicio' name2='Proyectos' name3='Habilidades' url1='#Inicio' url2='#Proyectos' url3='#Habilidades' />
      <main className='flex justify-center pt-24'>
        <AboutMe />
      </main>

    </>
  )
}

export default App
