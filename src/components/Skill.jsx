import { IconJavascript, IconReact, IconCShar, IconPostgreSql } from './icons.jsx'

export function Skill () {
  return (
    <>
      <section className='grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-5'>
          <div className=' filter hover:grayscale-0 grayscale transition-all duration-300'>
            <IconJavascript />
          </div>

          <div className=''>
            <IconReact />
          </div>  
      
          <div className=''>
            <IconCShar />
          </div>
    
          <div className=''>
            <IconPostgreSql />
          </div>

      </section>
    </>
  )
}
