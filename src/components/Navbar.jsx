export function Navbar ({ name1, name2, name3, url1, url2, url3 }) {
  return (
    <>
      <header className='flex items-center justify-center fixed w-full bg-black/60 backdrop-blur-lg z-10 shadow-sm shadow-violet-500'>
        <nav className='w-4/5 xl:w-3/4 2xl:w-1/2 p-1 z-20 h-14 flex justify-between items-center'>
          <h5 className='text-xl font-semibold'>Facundo Cozzani</h5>

          <ul className='flex gap-5 bg-transparent'>
            <li className='font-semibold text-xl hover:text-violet-600'><a href={url1}>{name1}</a></li>
            <li className='font-semibold text-xl hover:text-violet-600'><a href={url2}>{name2}</a></li>
            <li className='font-semibold text-xl hover:text-violet-600'><a href={url3}>{name3}</a></li>
          </ul>
        </nav>
      </header>
    </>
  )
}
