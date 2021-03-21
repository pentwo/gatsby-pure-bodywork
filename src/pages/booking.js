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
    gap: 2rem;
    margin-bottom: 3rem;
    .tag {
      display: flex;
      align-items: center;

      padding: 1rem;
      border: 1px solid var(--dark);
      border-radius: 10px;

      img {
        max-width: 100px;
        border-radius: 500px;
        margin-right: 2rem;
      }
      h5 {
        margin: 0;
      }
      &.active {
        background-color: var(--grey);
        h5 {
          font-weight: bold;
        }
      }
    }
  }
`

// markup
const BookingPage = () => {
  const [practicer, setPracticer] = useState('Monica Li')
  const [url, setUrl] = useState(
    'https://perthhealthcare.au1.cliniko.com/bookings?practitioner_id=159109',
  )

  const handleClick = member => {
    setPracticer(member.name)
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
            <div className="name-tags">
              {members.map(member => {
                return (
                  <div
                    className={practicer === member.name ? `tag active` : 'tag'}
                    onClick={() => handleClick(member)}
                    key={member.id}
                  >
                    {/* <img src={member.avatarImage} /> */}
                    <h5>{member.name}</h5>
                  </div>
                )
              })}
            </div>
            <h4>Booking with {practicer}</h4>
            <iframe
              id="cliniko-9992835"
              src={`${url}&embedded=true`}
              frameBorder="0"
              scrolling="auto"
              width="100%"
              height="1000"
              style={{ pointerEvents: 'auto' }}
            ></iframe>
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
