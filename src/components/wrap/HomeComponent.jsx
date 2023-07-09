import React from 'react'
import Section1Component from './home/Section1Component'
import Section2Component from './home/Section2Component'
import Section3Component from './home/Section3Component'
import Section4Component from './home/Section4Component'
import Section5Component from './home/Section5Component'
import Section6Component from './home/Section6Component'

export default function HomeCompoent() {
  return (
    <main id="home">
      <Section1Component />
      <Section2Component />
      <Section3Component />
      <Section4Component />
      <Section5Component />
      <Section6Component />
    </main>
  )
}
