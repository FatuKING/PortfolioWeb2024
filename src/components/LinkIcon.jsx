export function LinkIcon ({ url, icon, title }) {
  const nameIcon = `bi bi-${icon} color text-xl`

  return (
    <>
      <a href={url} className='bg-gray-800 hover:bg-gray-100 transition duration-300 ease-in-out p-2 pl-3 pr-3 rounded-full' target='_blank' rel='noreferrer' title={title}>
        <i className={nameIcon} />
      </a>
    </>
  )
}
