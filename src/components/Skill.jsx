import { IconJavascript, IconReact, IconCShar, IconPostgreSql } from './icons.jsx'

export function Skill () {
  return (
    <>
      <section className='flex gap-4'>
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

      </section>
    </>
  )
}
