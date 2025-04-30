import { Animation } from "./Animation.jsx"

export function HeroSection () {
  return (
    <section className='w-4/5 xl:w-3/4 2xl:w-1/2 flex items-center justify-between'>
      <div className='flex flex-col gap-5 justify-center items-start'>
        <h1 className='text-3xl sm:text-4xl md:text-6xl font-bold title'>Software Developer</h1>
        <p className='text-base text-gray-400 w-3/4'>Transformo ideas en soluciones digitales funcionales y elegantes, utilizando tecnologías modernas para resolver problemas reales.</p>

        <button>
            <a href="https://cozzanifacundo.com/FacundoCozzaniCV2024.pdf" target="_blank" className='bg-[#8D5499] text-black font-bold border border-gray-800 rounded shadow p-2 pl-4 pr-4 hover:bg-[#894a96]'>Ver Curriculum</a>
        </button>
      </div>

      <Animation />
    </section>
  )
}