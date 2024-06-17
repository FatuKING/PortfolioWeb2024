export function Footer () {
  return (
    <>

      <footer className='flex justify-center items-center pt-3'>
        <address className='flex justify-between items-center w-4/5 xl:w-3/4 2xl:w-1/2 pb-2 border-t border-gray-400'>
          <div className='pt-2'>
            <h5 className='text-xl'>Facundo Cozzani</h5>
            <span className=''>Portfolio 2024</span>
          </div>

          <ul className='flex gap-5'>
            <li className='hover:scale-110 cursor-pointer'>
              <a href='https://www.linkedin.com/in/facundocozzani' /><i className='bi bi-linkedin text-2xl' />
            </li>
            <li className='hover:scale-110 cursor-pointer'>
              <a href='https://wa.me/1155709631' /><i className='bi bi-whatsapp text-2xl' />
            </li>
            <li className='hover:scale-110 cursor-pointer'>
              <a href='mailto:cozzanifacundo@gmail.com' /><i className='bi bi-envelope-at text-2xl' />
            </li>
          </ul>
        </address>
      </footer>
    </>
  )
}
