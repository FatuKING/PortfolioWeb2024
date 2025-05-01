import { IconJavascript, IconReact, IconCShar, IconPostgreSql, IconCss, IconBootstrap, IconHtml, IconMicrosoftSqlServer } from './icons.jsx'

export function Skill () {
  return (
    <>
      <section className='flex justify-between items-center flex-wrap w-full h-full'>
          <div className='filter hover:grayscale-0 grayscale transition-all duration-300'>
            <IconJavascript />
          </div>

          <div className='filter hover:grayscale-0 grayscale transition-all duration-300'>
            <IconReact />
          </div>  
      
          <div className='filter hover:grayscale-0 grayscale transition-all duration-300'>
            <IconCShar />
          </div>
    
          <div className='filter hover:grayscale-0 grayscale transition-all duration-300'>
            <IconPostgreSql />
          </div>

          <IconBootstrap />
          <IconCss />
          <IconHtml />
          <IconMicrosoftSqlServer />

      </section>
    </>
  )
}
