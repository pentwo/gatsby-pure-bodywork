import * as React from 'react'

import Hero from '../components/Hero'
import { Treatments } from '../components/Treatments'
import { About } from '../components/About'
import { Testimonies } from '../components/Testimonies'
import Location from '../components/Location'
import SEO from '../components/SEO'

// markup
const IndexPage = () => {
  return (
    <>
      <main>
        <SEO title="Home"></SEO>
        <Hero />
        <Treatments />
        <About />
        <Testimonies />
        <Location />
      </main>
    </>
  )
}

export default IndexPage
