import { IconJavascript, IconReact, IconTailwind, IconHtml, IconCss, IconBootstrap, IconCShar, IconJava, IconNodejs, IconMicrosoftSqlServer, IconMySql, IconPostgreSql } from './icons.jsx'

export function Skill ({ skill, icon }) {
  return (
    <>
      <section className='grid grid-cols-6 gap-5'>
        <article className='group flex flex-col justify-center items-center bg-transparent border border-gray-500 hover:border-gray-400 rounded-lg p-2'>
          <div className='grayscale group-hover:grayscale-0'>
            <IconHtml />
          </div>
          <span className='xl:text-lg'>HTML</span>
        </article>

        <article className='group flex flex-col justify-center items-center bg-transparent border border-gray-500 hover:border-gray-400 rounded-lg p-2'>
          <div className='grayscale group-hover:grayscale-0'>
            <IconCss />
          </div>
          <span className='xl:text-lg'>CSS</span>
        </article>

        <article className='group flex flex-col justify-center items-center bg-transparent border border-gray-500 hover:border-gray-400 rounded-lg p-2'>
          <div className='grayscale group-hover:grayscale-0'>
            <IconJavascript />
          </div>
          <span className='xl:text-lg'>JavaScript</span>
        </article>

        <article className='group flex flex-col justify-center items-center bg-transparent border border-gray-500 hover:border-gray-400 rounded-lg p-2'>
          <div className='grayscale group-hover:grayscale-0'>
            <IconReact />
          </div>

          <span className='xl:text-lg'>React</span>
        </article>

        <article className='group flex flex-col justify-center items-center bg-transparent border border-gray-500 hover:border-gray-400 rounded-lg p-2'>
          <div className='grayscale group-hover:grayscale-0'>
            <IconTailwind />
          </div>

          <span className='xl:text-lg'>Tailwind</span>
        </article>

        <article className='group flex flex-col justify-center items-center bg-transparent border border-gray-500 hover:border-gray-400 rounded-lg p-2'>
          <div className='grayscale group-hover:grayscale-0'>
            <IconBootstrap />
          </div>

          <span className='xl:text-lg'>Bootstrap</span>
        </article>

        <article className='group flex flex-col justify-center items-center bg-transparent border border-gray-500 hover:border-gray-400 rounded-lg p-2'>
          <div className='grayscale group-hover:grayscale-0'>
            <IconCShar />
          </div>

          <span className='xl:text-lg'>C#</span>
        </article>

        <article className='group flex flex-col justify-center items-center bg-transparent border border-gray-500 hover:border-gray-400 rounded-lg p-2'>
          <div className='grayscale group-hover:grayscale-0'>
            <IconJava />
          </div>

          <span className='xl:text-lg'>Java</span>
        </article>

        <article className='group flex flex-col justify-center items-center bg-transparent border border-gray-500 hover:border-gray-400 rounded-lg p-2'>
          <div className='grayscale group-hover:grayscale-0'>
            <IconNodejs />
          </div>

          <span className='xl:text-lg'>NodeJS</span>
        </article>

        <article className='group flex flex-col justify-center items-center bg-transparent border border-gray-500 hover:border-gray-400 rounded-lg p-2'>
          <div className='grayscale group-hover:grayscale-0'>
            <IconMicrosoftSqlServer />
          </div>

          <span className='xl:text-lg'>SQL Server</span>
        </article>

        <article className='group flex flex-col justify-center items-center bg-transparent border border-gray-500 hover:border-gray-400 rounded-lg p-2'>
          <div className='grayscale group-hover:grayscale-0'>
            <IconPostgreSql />
          </div>

          <span className='xl:text-lg'>PostgreSQL</span>
        </article>

        <article className='group flex flex-col justify-center items-center bg-transparent border border-gray-500 hover:border-gray-400 rounded-lg p-2'>
          <div className='grayscale group-hover:grayscale-0'>
            <IconMySql />
          </div>

          <span className='xl:text-lg'>MySQL</span>
        </article>
      </section>
    </>
  )
}
