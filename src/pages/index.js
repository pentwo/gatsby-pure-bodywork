import * as React from 'react'

import Hero from '../components/Hero'
import { Treatments } from '../components/Treatments'
import { Team } from '../components/Team'
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
        <Team />
        <Testimonies />
        <Location />
      </main>
    </>
  )
}

export default IndexPage
