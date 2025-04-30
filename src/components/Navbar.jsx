export function Navbar () {
  const menuItems = [
    { name: 'Inicio', url: '#' },
    { name: 'Proyectos', url: '#Proyectos' },
    { name: 'Sobre mi', url: '#Habilidades' }
  ]

  return (
    <>
      <header className='flex items-center justify-center fixed w-full bg-black/5 backdrop-blur-lg z-40 shadow-sm shadow-black'>
        <div className='w-4/5 xl:w-3/4 2xl:w-1/2 p-1 z-20 h-14 flex justify-between items-center'>
          <strong className='hidden sm:inline-block text-xl font-semibold title'>Facundo Cozzani</strong>
          
          <nav className='flex items-center gap-4'>
            <ul className='flex gap-3 bg-transparent'>
              {menuItems.map((item, index) => (
                <li key={index} className='text-base hover:font-semibold hover:text-[#8D5499]'><a href={item.url}>{item.name}</a></li>
              ))}
            </ul>

            <div className="flex gap-2 text-lg">
              <a href="https://github.com/fatuking" title='Github' target="_blank"><i className="bi bi-github"></i></a>
              <a href="https://www.linkedin.com/in/facundocozzani/" title="Linkedin" target="_blank"><i className="bi bi-linkedin"></i></a>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
