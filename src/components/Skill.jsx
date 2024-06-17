import { IconJavascript, IconReact, IconTailwind, IconHtml, IconCss, IconBootstrap, IconCShar, IconJava, IconNodejs, IconMicrosoftSqlServer, IconMySql, IconPostgreSql } from './icons.jsx'

export function Skill ({ skill, icon }) {
  return (
    <>
      <section className='grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-5'>
        <article className='group flex flex-col justify-center gap-2 items-center bg-transparent border border-gray-500 hover:border-gray-400 rounded-lg p-2'>
          <div className=''>
            <IconHtml />
          </div>
          <span className='text-sm sm:text-base xl:text-lg'>HTML</span>
        </article>

        <article className='group flex flex-col justify-center gap-2 items-center bg-transparent border border-gray-500 hover:border-gray-400 rounded-lg p-2'>
          <div className=''>
            <IconCss />
          </div>
          <span className='text-sm sm:text-base xl:text-lg'>CSS</span>
        </article>

        <article className='group flex flex-col justify-center gap-2 items-center bg-transparent border border-gray-500 hover:border-gray-400 rounded-lg p-2'>
          <div className=''>
            <IconJavascript />
          </div>
          <span className='text-sm sm:text-base xl:text-lg'>JavaScript</span>
        </article>

        <article className='group flex flex-col justify-center gap-2 items-center bg-transparent border border-gray-500 hover:border-gray-400 rounded-lg p-2'>
          <div className=''>
            <IconReact />
          </div>

          <span className='text-sm sm:text-base xl:text-lg'>React</span>
        </article>

        <article className='group flex flex-col justify-center gap-2 items-center bg-transparent border border-gray-500 hover:border-gray-400 rounded-lg p-2'>
          <div className=''>
            <IconTailwind />
          </div>

          <span className='text-sm sm:text-base xl:text-lg'>Tailwind</span>
        </article>

        <article className='group flex flex-col justify-center gap-2 items-center bg-transparent border border-gray-500 hover:border-gray-400 rounded-lg p-2'>
          <div className=''>
            <IconBootstrap />
          </div>

          <span className='text-sm sm:text-base xl:text-lg'>Bootstrap</span>
        </article>

        <article className='group flex flex-col justify-center gap-2 items-center bg-transparent border border-gray-500 hover:border-gray-400 rounded-lg p-2'>
          <div className=''>
            <IconCShar />
          </div>

          <span className='text-sm sm:text-base xl:text-lg'>C#</span>
        </article>

        <article className='group flex flex-col justify-center gap-2 items-center bg-transparent border border-gray-500 hover:border-gray-400 rounded-lg p-2'>
          <div className=''>
            <IconJava />
          </div>

          <span className='text-sm sm:text-base xl:text-lg'>Java</span>
        </article>

        <article className='group flex flex-col justify-center gap-2 items-center bg-transparent border border-gray-500 hover:border-gray-400 rounded-lg p-2'>
          <div className=''>
            <IconNodejs />
          </div>

          <span className='text-sm sm:text-base xl:text-lg'>NodeJS</span>
        </article>

        <article className='group flex flex-col justify-center gap-2 items-center bg-transparent border border-gray-500 hover:border-gray-400 rounded-lg p-2'>
          <div className=''>
            <IconMicrosoftSqlServer />
          </div>

          <span className='text-sm sm:text-base xl:text-lg'>SQL Server</span>
        </article>

        <article className='group flex flex-col justify-center gap-2 items-center bg-transparent border border-gray-500 hover:border-gray-400 rounded-lg p-2'>
          <div className=''>
            <IconPostgreSql />
          </div>

          <span className='text-sm sm:text-base xl:text-lg'>PostgreSQL</span>
        </article>

        <article className='group flex flex-col justify-center gap-2 items-center bg-transparent border border-gray-500 hover:border-gray-400 rounded-lg p-2'>
          <div className=''>
            <IconMySql />
          </div>

          <span className='text-sm sm:text-base xl:text-lg'>MySQL</span>
        </article>
      </section>
    </>
  )
}
