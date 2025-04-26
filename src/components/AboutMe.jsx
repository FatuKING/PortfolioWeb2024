import { DelayedLetters } from './DelayedLetters.jsx'
import { LinkIcon } from './LinkIcon.jsx'

export function AboutMe () {
  const data = {
    links: ['https://github.com/FatuKING', 'https://www.linkedin.com/in/facundocozzani', 'https://wa.me/5491155709631', 'https://cozzanifacundo.com/FacundoCozzaniCV2024.pdf', 'mailto:cozzanifacundo@gmail.com'],
    iconName: ['github', 'linkedin', 'whatsapp', 'person-circle', 'envelope-at'],
    iconTitle: ['Perfil Github', 'Perfil Linkedin', 'Chat por WhatsApp', 'Curriculum Vitae', 'Envio de Mail']
  }

  return (
    <>
      <section className='flex flex-col-reverse gap-14 md:gap-5 justify-center items-center w-4/5 md:flex-row xl:w-3/4 2xl:w-1/2'>
        <article className='flex flex-col'>
          <h1 className='text-3xl lg:text-4xl xl:text-5xl font-bold'>Hola, soy <span className='bg-gradient-to-r from-purple-700 to-indigo-800 bg-clip-text text-transparent'>Facundo</span></h1>
          <DelayedLetters text='Software Developer Jr' delay={200} repeat={2} />

          <p className='inline-block pt-3 xl:text-lg md:w-4/5 xl:w-2/3 2xl:w-3/4'>
            Actualmente, estoy estudiando en ISTEA y simultáneamente desempeño el rol de analista de sistemas en Cafe Martinez. Durante mi tiempo libre, me dedico a desarrollar mis proyectos personales, disfrutar de videojuegos y compartir momentos con mi familia.
          </p>

          <div className='flex gap-3 pt-5'>
            {data.links.map((link, index) => (
              <LinkIcon
                key={index}
                url={link}
                icon={data.iconName[index]}
                title={data.iconTitle[index]}
              />
            ))}
          </div>
        </article>

        <figure className='aspect-square max-w-64 rounded-full md:min-w-72 lg:min-w-80'>
          <img className='rounded-full object-cover imgShadow' src='https://cozzanifacundo.com/fotodeperfil.jpg' alt='Facundo Cozzani Foto' />
        </figure>
      </section>
    </>
  )
}
