export function Navbar () {
  const menuItems = [
    { name: 'Inicio', url: '#' },
    { name: 'Proyectos', url: '#Proyectos' },
    { name: 'Sobre mi', url: '#Habilidades' }
  ]

  return (
    <>
      <header className='flex items-center justify-center fixed w-full bg-black/20 backdrop-blur-lg z-10 shadow-sm shadow-blue-950'>
        <nav className='w-4/5 xl:w-3/4 2xl:w-1/2 p-1 z-20 h-14 flex justify-center sm:justify-between items-center'>
          <strong className='hidden sm:inline-block text-xl font-semibold title'>Facundo Cozzani</strong>

          <ul className='flex gap-3 bg-transparent'>
            {menuItems.map((item, index) => (
              <li key={index} className='font-medium text-base hover:text-purple-700'><a href={item.url}>{item.name}</a></li>
            ))}
          </ul>

          <div className="flex gap-3">
            <i class="bi bi-github"></i>
            <i class="bi bi-linkedin"></i>
          </div>
        </nav>
      </header>
    </>
  )
}
