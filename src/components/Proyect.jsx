export function Proyect ({ proyect, title, description }) {
  return (
    <>
      <section className='flex flex-col md:flex-row gap-2'>
        <article className='md:w-1/2 h-44 lg:h-40 bg-gray-800/50 border border-gray-600 hover:border-gray-400 p-3 pt-4 pb-4 mt-5 rounded-md relative shadow shadow-gray-600 hover:shadow-gray-400'>
          <h4 className='inline-block text-lg xl:text-xl font-bold hover:text-violet-500'><a href=''>Pequeños Proyectos</a></h4>

          <a href='' className='absolute top-3 right-4 hover:text-violet-500'><i class='bi bi-github text-2xl' /></a>

          <p className='pt-2'>Monorepositorio de proyectos utilizando React</p>

          <div className='flex gap-1 absolute bottom-3'>
            <span className='text-xs font-medium p-1 pl-2 pr-2 bg-gray-700 border border-gray-600 rounded-full'>React</span>
            <span className='text-xs font-medium p-1 pl-2 pr-2 bg-gray-700 border border-gray-600 rounded-full'>Tailwind</span>
            <span className='text-xs font-medium p-1 pl-2 pr-2 bg-gray-700 border border-gray-600 rounded-full'>JavaScript</span>
            <span className='text-xs font-medium p-1 pl-2 pr-2 bg-gray-700 border border-gray-600 rounded-full'>TypeScript</span>
          </div>
        </article>

        <article className='md:w-1/2 h-44 lg:h-40 bg-gray-800/50 border border-gray-600 hover:border-gray-400 p-3 pt-4 pb-4 mt-5 rounded-md relative shadow shadow-gray-600 hover:shadow-gray-400'>
          <h4 className='inline-block text-lg xl:text-xl font-bold hover:text-violet-500'><a href=''>Moli Ahumados</a></h4>

          <a href='' className='absolute top-3 right-4 hover:text-violet-500'><i class='bi bi-github text-2xl' /></a>

          <p className='pt-2'>Menu online para restaurante de comida rapida, utilizando google sheet como base de datos.</p>

          <div className='flex gap-2 absolute bottom-3'>
            <span className='text-xs font-medium p-1 pl-2 pr-2 bg-gray-700 border border-gray-600 rounded-full'>React</span>
            <span className='text-xs font-medium p-1 pl-2 pr-2 bg-gray-700 border border-gray-600 rounded-full'>Bootstrap</span>
            <span className='text-xs font-medium p-1 pl-2 pr-2 bg-gray-700 border border-gray-600 rounded-full'>Google-Sheet</span>
          </div>
        </article>

      </section>
    </>
  )
}
