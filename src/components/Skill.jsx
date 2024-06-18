import { IconJavascript, IconReact, IconTailwind, IconHtml, IconCss, IconBootstrap, IconCShar, IconJava, IconNodejs, IconMicrosoftSqlServer, IconMySql, IconPostgreSql } from './icons.jsx'

export function Skill ({ skill, icon }) {
  return (
    <>
      <section className='grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-5'>
        <article className='group flex flex-col justify-center gap-2 items-center bg-transparent border border-gray-500 hover:border-gray-400 rounded-lg p-2'>
          <div className=''>
            <IconHtml />
          </div>
          <span className='text-sm sm:text-base xl:text-lg font-semibold'>HTML</span>
        </article>

        <article className='group flex flex-col justify-center gap-2 items-center bg-transparent border border-gray-500 hover:border-gray-400 rounded-lg p-2'>
          <div className=''>
            <IconCss />
          </div>
          <span className='text-sm sm:text-base xl:text-lg font-semibold'>CSS</span>
        </article>

        <article className='group flex flex-col justify-center gap-2 items-center bg-transparent border border-gray-500 hover:border-gray-400 rounded-lg p-2'>
          <div className=''>
            <IconJavascript />
          </div>
          <span className='text-sm sm:text-base xl:text-lg font-semibold'>JavaScript</span>
        </article>

        <article className='group flex flex-col justify-center gap-2 items-center bg-transparent border border-gray-500 hover:border-gray-400 rounded-lg p-2'>
          <div className=''>
            <IconReact />
          </div>

          <span className='text-sm sm:text-base xl:text-lg font-semibold'>React</span>
        </article>

        <article className='group flex flex-col justify-center gap-2 items-center bg-transparent border border-gray-500 hover:border-gray-400 rounded-lg p-2'>
          <div className=''>
            <IconTailwind />
          </div>

          <span className='text-sm sm:text-base xl:text-lg font-semibold'>Tailwind</span>
        </article>

        <article className='group flex flex-col justify-center gap-2 items-center bg-transparent border border-gray-500 hover:border-gray-400 rounded-lg p-2'>
          <div className=''>
            <IconBootstrap />
          </div>

          <span className='text-sm sm:text-base xl:text-lg font-semibold'>Bootstrap</span>
        </article>

        <article className='group flex flex-col justify-center gap-2 items-center bg-transparent border border-gray-500 hover:border-gray-400 rounded-lg p-2'>
          <div className=''>
            <IconCShar />
          </div>

          <span className='text-sm sm:text-base xl:text-lg font-semibold'>C#</span>
        </article>

        <article className='group flex flex-col justify-center gap-2 items-center bg-transparent border border-gray-500 hover:border-gray-400 rounded-lg p-2'>
          <div className=''>
            <IconJava />
          </div>

          <span className='text-sm sm:text-base xl:text-lg font-semibold'>Java</span>
        </article>

        <article className='group flex flex-col justify-center gap-2 items-center bg-transparent border border-gray-500 hover:border-gray-400 rounded-lg p-2'>
          <div className=''>
            <IconNodejs />
          </div>

          <span className='text-sm sm:text-base xl:text-lg font-semibold'>NodeJS</span>
        </article>

        <article className='group flex flex-col justify-center gap-2 items-center bg-transparent border border-gray-500 hover:border-gray-400 rounded-lg p-2'>
          <div className=''>
            <IconMicrosoftSqlServer />
          </div>

          <span className='text-sm sm:text-base xl:text-lg font-semibold'>SQL Server</span>
        </article>

        <article className='group flex flex-col justify-center gap-2 items-center bg-transparent border border-gray-500 hover:border-gray-400 rounded-lg p-2'>
          <div className=''>
            <IconPostgreSql />
          </div>

          <span className='text-sm sm:text-base xl:text-lg font-semibold'>PostgreSQL</span>
        </article>

        <article className='group flex flex-col justify-center gap-2 items-center bg-transparent border border-gray-500 hover:border-gray-400 rounded-lg p-2'>
          <div className=''>
            <IconMySql />
          </div>

          <span className='text-sm sm:text-base xl:text-lg font-semibold'>MySQL</span>
        </article>
      </section>
    </>
  )
}
