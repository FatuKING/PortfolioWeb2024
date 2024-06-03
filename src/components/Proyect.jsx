export function Proyect ({ proyect, title, description }) {
  return (
    <>
      <section className=''>
        <article className=' bg-gray-900 pl-2 p-2 mt-5 rounded-md relative'>
          <h4 className='inline-block text-lg xl:text-xl font-bold hover:text-violet-500'><a href=''>Pequeños Proyectos</a></h4>

          <a href='' className='absolute top-2 right-3 hover:text-violet-500'><i class='bi bi-github text-2xl' /></a>

          <p className='pt-2'>Monorepositorio de proyectos utilizando React</p>

          <div className='flex gap-2 pt-3'>
            <span className='text-xs p-1 pl-2 pr-2 bg-gray-700 border border-gray-600 rounded-full'>HTML</span>
            <span className='text-xs p-1 pl-2 pr-2 bg-gray-700 border border-gray-600 rounded-full'>CSS</span>
            <span className='text-xs p-1 pl-2 pr-2 bg-gray-700 border border-gray-600 rounded-full'>React</span>
            <span className='text-xs p-1 pl-2 pr-2 bg-gray-700 border border-gray-600 rounded-full'>JavaScript</span>
          </div>
        </article>

        <article className=' bg-gray-900 pl-2 p-2 mt-5 rounded-md relative'>
          <h4 className='inline-block text-lg xl:text-xl font-bold hover:text-violet-500'><a href=''>Pequeños Proyectos</a></h4>

          <a href='' className='absolute top-2 right-3 hover:text-violet-500'><i class='bi bi-github text-2xl' /></a>

          <p className='pt-2'>Monorepositorio de proyectos utilizando React</p>

          <div className='flex gap-2 pt-3'>
            <span className='text-xs p-1 pl-2 pr-2 bg-gray-700 border border-gray-600 rounded-full'>HTML</span>
            <span className='text-xs p-1 pl-2 pr-2 bg-gray-700 border border-gray-600 rounded-full'>CSS</span>
            <span className='text-xs p-1 pl-2 pr-2 bg-gray-700 border border-gray-600 rounded-full'>React</span>
            <span className='text-xs p-1 pl-2 pr-2 bg-gray-700 border border-gray-600 rounded-full'>JavaScript</span>
          </div>
        </article>

      </section>
    </>
  )
}
