export function Navbar ({ name1, name2, name3, url1, url2, url3 }) {
  return (
    <>
      <header className='fixed w-full bg-black z-10'>
        <nav className='p-1 bg-transparent shadow-sm shadow-violet-500 w-full h-14 flex justify-center items-center'>
          <ul className='flex gap-5 bg-transparent'>
            <a href={url1}><li className='font-bold text-xl hover:text-violet-600'>{name1}</li></a>
            <a href={url2}><li className='font-semibold text-xl hover:text-violet-600'>{name2}</li></a>
            <a href={url3}><li className='font-semibold text-xl hover:text-violet-600'>{name3}</li></a>
          </ul>
        </nav>
      </header>
    </>
  )
}
