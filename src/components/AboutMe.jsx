export function AboutMe () {
  return (
    <>
      <section className='flex justify-center items-center w-1/2'>
        <article className='flex flex-col'>
          <h1 className='text-5xl font-bold'>Hola, soy <span className='bg-gradient-to-tl from-slate-800 via-violet-500 to-violet-400 bg-clip-text text-transparent'>Facundo</span></h1>

          <p className='inline-block pt-5 w-3/4 text-lg text-gr'>
            Actualmente, estoy estudiando en <a href='https://www.istea.edu.ar/' target='_blank' rel='noreferrer'><span className='underline decoration-indigo-500 font-medium'>ISTEA</span></a> y simultáneamente desempeño el rol de analista de sistemas en <a href='https://www.cafemartinez.com/' target='_blank' rel='noreferrer'><span className='underline decoration-indigo-500 font-medium'>Cafe Martinez.</span></a> Durante mi tiempo libre, me dedico a desarrollar mis proyectos personales, disfrutar de juegos y compartir momentos con mi familia.
          </p>
        </article>

        <figure className='aspect-square rounded-full min-w-72'>
          <img className='rounded-full' src='/fotodeperfil.jpg' alt='Facundo Cozzani' />
        </figure>
      </section>
    </>
  )
}
