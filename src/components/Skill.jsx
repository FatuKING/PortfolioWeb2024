import { IconJavascript, IconReact, IconTailwind, IconHtml, IconCss, IconBootstrap, IconCShar, IconJava, IconNodejs, IconMicrosoftSqlServer, IconMySql, IconPostgreSql } from './icons.jsx'

export function Skill ({ skill, icon }) {
  return (
    <>
      <div>
        <IconJavascript />
        <IconTailwind />
        <IconReact />
        <IconCss />
        <IconHtml />
        <IconBootstrap />
        <IconCShar />
        <IconJava />
        <IconNodejs />
        <IconMicrosoftSqlServer />
        <IconPostgreSql />
        <IconMySql />
        <p>{skill}</p>
      </div>
    </>
  )
}
