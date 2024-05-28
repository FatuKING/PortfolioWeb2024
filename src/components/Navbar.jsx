export function Navbar ({ name1, name2, name3, url1, url2, url3 }) {
  return (
    <>
      <header className='h-10'>
        <nav className='p-1 bg-transparent shadow-sm shadow-white fixed w-full z-1'>
          <ul className='flex justify-center items-center gap-5 bg-transparent'>
            <a href={url1}><li className='font-bold text-lg hover:text-indigo-500'>{name1}</li></a>
            <a href={url2}><li className='font-semibold text-lg hover:text-violet-500'>{name2}</li></a>
            <a href={url3}><li className='font-semibold text-lg hover:text-purple-500'>{name3}</li></a>
          </ul>
        </nav>
      </header>
    </>
  )
}
