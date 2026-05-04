import * as React from 'react'

import Hero from '../components/Hero'
import { Treatments } from '../components/Treatments'
import { Team } from '../components/Team'
import Benefits from '../components/Benefits'
import { Testimonies } from '../components/Testimonies'
import Location from '../components/Location'
import SEO from '../components/SEO'

const IndexPage = () => {
  return (
    <main>
      <SEO title="Home" />
      <Hero />
      <Team />
      <Treatments />
      <Benefits />
      <Testimonies />
      <Location />
    </main>
  )
}

export default IndexPage
