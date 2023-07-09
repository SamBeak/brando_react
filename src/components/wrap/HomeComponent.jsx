import React from 'react'
import Section1Component from './home/Section1Component'
import Section2Component from './home/Section2Component'
import Section3Component from './home/Section3Component'

export default function HomeCompoent() {
  return (
    <main id="home">
      <Section1Component />
      <Section2Component />
      <Section3Component />
    </main>
  )
}
