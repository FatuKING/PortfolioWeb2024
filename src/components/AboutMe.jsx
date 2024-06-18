import { DelayedLetters } from './DelayedLetters.jsx'
import { LinkIcon } from './LinkIcon.jsx'

export function AboutMe () {
  return (
    <>
      <section className='flex flex-col-reverse gap-14 md:gap-5 justify-center items-center w-4/5 md:flex-row xl:w-3/4 2xl:w-1/2'>
        <article className='flex flex-col'>
          <h1 className='text-3xl lg:text-4xl xl:text-5xl font-bold'>Hola, soy <span className='bg-gradient-to-tl from-slate-800 via-violet-500 to-violet-600 bg-clip-text text-transparent'>Facundo</span></h1>
          <DelayedLetters text='Software Developer Jr' delay={200} repeat={2} />

          <p className='inline-block pt-3 xl:text-lg md:w-4/5 xl:w-2/3 2xl:w-3/4'>
            Actualmente, estoy estudiando en <a href='https://www.istea.edu.ar/' target='_blank' rel='noreferrer'><span className='underline decoration-violet-600 font-medium'>ISTEA</span></a> y simultáneamente desempeño el rol de analista de sistemas en <a href='https://www.cafemartinez.com/' target='_blank' rel='noreferrer'><span className='underline decoration-violet-600 font-medium'>Cafe Martinez.</span></a> Durante mi tiempo libre, me dedico a desarrollar mis proyectos personales, disfrutar de videojuegos y compartir momentos con mi familia.
          </p>

          <div className='flex gap-3 pt-5'>
            <LinkIcon url='https://github.com/FatuKING' icon='github' title='Perfil Github' />
            <LinkIcon url='https://www.linkedin.com/in/facundocozzani' icon='linkedin' title='Perfil Linkedin' />
            <LinkIcon url='https://wa.me/1155709631' icon='whatsapp' title='Chat por WhatsApp' />
            <LinkIcon url='/public/FacundoCozzaniCV2024.pdf' icon='person-circle' title='Curriculum Vitae' />
            <LinkIcon url='mailto:cozzanifacundo@gmail.com' icon='envelope-at' title='Envio de Mail' />
          </div>
        </article>

        <figure className='aspect-square max-w-64 rounded-full md:min-w-72 lg:min-w-80'>
          <img className='rounded-full object-cover imgShadow' src='/fotodeperfil.jpg' alt='Facundo Cozzani' />
        </figure>
      </section>
    </>
  )
}
