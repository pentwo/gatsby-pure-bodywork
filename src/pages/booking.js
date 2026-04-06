import * as React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components/Hero'
import SEO from '../components/SEO'

const BookingStyles = styled.div`
  padding-bottom: 3rem;

  iframe {
    border: none;
    min-height: 800px;
  }
`

const BookingPage = () => {
  return (
    <>
      <main>
        <SEO title="Booking"></SEO>
        <title>Booking</title>
        <PageHero title="Booking" />
        <BookingStyles>
          <div className="wrapper-column">
            <iframe
              title="booking page"
              src="https://app.acuityscheduling.com/schedule/fbf64d5a"
              width="100%"
              height="1000"
              style={{ pointerEvents: 'auto' }}
            ></iframe>
          </div>
        </BookingStyles>
      </main>
    </>
  )
}

export default BookingPage
