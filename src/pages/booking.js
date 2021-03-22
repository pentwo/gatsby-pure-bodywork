import * as React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { PageHero } from '../components/Hero'
import SEO from '../components/SEO'

import { members } from '../data/utility'

const BookingStyles = styled.div`
  padding-bottom: 3rem;

  .name-tags {
    display: flex;

    margin-bottom: 3rem;
    .tag {
      display: flex;
      align-items: center;

      cursor: pointer;
      padding: 1rem;

      border-radius: 5px;

      --cast: 2px;
      box-shadow: var(--cast) var(--cast) 0 var(--grey);
      text-shadow: 0.5px 0.5px 0 rgba(0, 0, 0, 0.2);
      transition: all 0.2s;

      &:hover {
        background-color: var(--light);
        --cast: 4px;
      }
      &.active {
        background: var(--purple);
        color: var(--white);
      }
    }
    .tag ~ .tag {
      margin-left: 2rem;
    }
    h5 {
      margin: 0;
    }
  }
`

// markup
const BookingPage = () => {
  const [practitioner, setPractitioner] = useState('')
  const [url, setUrl] = useState('')

  const handleClick = member => {
    setPractitioner(member.name)
    setUrl(member.booking)
  }
  if (typeof window !== 'undefined') {
    window.addEventListener('message', function handleIFrameMessage(e) {
      var clinikoBookings = document.getElementById('cliniko-9992835')
      if (typeof e.data !== 'string') return
      if (e.data.search('cliniko-bookings-resize') > -1) {
        var height = Number(e.data.split(':')[1])
        clinikoBookings.style.height = height + 'px'
      }
      e.data.search('cliniko-bookings-page') > -1 &&
        clinikoBookings.scrollIntoView()
    })
  }

  return (
    <>
      <main>
        <SEO title="Booking"></SEO>
        <title>Booking</title>
        <PageHero title="Booking" />
        <BookingStyles>
          <div className="wrapper-column">
            <h4>Booking with {practitioner ? practitioner : '...'}</h4>
            <div className="name-tags">
              {members.map(member => {
                return (
                  <div
                    className={
                      practitioner === member.name ? `tag active` : 'tag'
                    }
                    onClick={() => handleClick(member)}
                    key={member.id}
                  >
                    <h5>{member.name}</h5>
                  </div>
                )
              })}
            </div>
            {url ? (
              <iframe
                id="cliniko-9992835"
                src={`${url}&embedded=true`}
                frameBorder="0"
                scrolling="auto"
                width="100%"
                height="1000"
                style={{ pointerEvents: 'auto' }}
              ></iframe>
            ) : (
              ''
            )}
          </div>
        </BookingStyles>
        {}
      </main>
    </>
  )
}

export default BookingPage

/* BOOKING iframe
<iframe
  id="cliniko-9992835"
  src="https://perthhealthcare.au1.cliniko.com/bookings?practitioner_id=159109&embedded=true"
  frameborder="0"
  scrolling="auto"
  width="100%"
  height="1000"
  style={{ pointerEvents: 'auto' }}
></iframe>
{window.addEventListener('message', function handleIFrameMessage(e) {
  var clinikoBookings = document.getElementById('cliniko-9992835')
  if (typeof e.data !== 'string') return
  if (e.data.search('cliniko-bookings-resize') > -1) {
    var height = Number(e.data.split(':')[1])
    clinikoBookings.style.height = height + 'px'
  }
  e.data.search('cliniko-bookings-page') > -1 &&
    clinikoBookings.scrollIntoView()
})}
*/
