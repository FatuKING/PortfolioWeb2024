import { IconJavascript, IconReact, IconTailwind, IconHtml, IconCss, IconBootstrap, IconCShar, IconJava, IconNodejs, IconMicrosoftSqlServer, IconMySql, IconPostgreSql } from './icons.jsx'

export function Skill ({ skill, icon }) {
  return (
    <>
      <section className='grid grid-cols-6 gap-5'>
        <article className='flex flex-col justify-center items-center bg-gray-800/50 border border-gray-600 rounded-lg p-2'>
          <IconHtml />

          <span className=''>HTML</span>
        </article>

        <article className='flex flex-col justify-center items-center bg-gray-800/50 border border-gray-600 rounded-lg p-2'>
          <IconCss />

          <span className=''>CSS</span>
        </article>

        <article className='flex flex-col justify-center items-center bg-gray-800/50 border border-gray-600 rounded-lg p-2'>
          <IconJavascript />

          <span className=''>JavaScript</span>
        </article>

        <article className='flex flex-col justify-center items-center bg-gray-800/50 border border-gray-600 rounded-lg p-2'>
          <IconReact />

          <span className=''>React</span>
        </article>

        <article className='flex flex-col justify-center items-center bg-gray-800/60 border border-gray-600 rounded-lg p-2'>
          <IconTailwind />

          <span className=''>Tailwind</span>
        </article>

        <article className='flex flex-col justify-center items-center bg-gray-800/50 border border-gray-600 rounded-lg p-2'>
          <IconBootstrap />

          <span className=''>Bootstrap</span>
        </article>

        <article className='flex flex-col justify-center items-center bg-gray-800/50 border border-gray-600 rounded-lg p-2'>
          <IconCShar />

          <span className=''>C#</span>
        </article>

        <article className='flex flex-col justify-center items-center bg-gray-800/50 border border-gray-600 rounded-lg p-2'>
          <IconJava />

          <span className=''>Java</span>
        </article>

        <article className='flex flex-col justify-center items-center bg-gray-800/50 border border-gray-600 rounded-lg p-2'>
          <IconNodejs />

          <span className=''>NodeJS</span>
        </article>

        <article className='flex flex-col justify-center items-center bg-gray-800/50 border border-gray-600 rounded-lg p-2'>
          <IconMicrosoftSqlServer />

          <span className=''>SQL Server</span>
        </article>

        <article className='flex flex-col justify-center items-center bg-gray-800/50 border border-gray-600 rounded-lg p-2'>
          <IconPostgreSql />

          <span className=''>PostgreSQL</span>
        </article>

        <article className='flex flex-col justify-center items-center bg-gray-800/50 border border-gray-600 rounded-lg p-2'>
          <IconMySql />

          <span className=''>MySQL</span>
        </article>
      </section>
    </>
  )
}
