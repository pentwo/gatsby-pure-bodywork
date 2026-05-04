import * as React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components/Hero'
import SEO from '../components/SEO'

import { LOCATIONS } from '../data/utility'

const BookingStyles = styled.div`
  padding: 4rem 0 6rem;

  .intro {
    max-width: 640px;
    margin: 0 auto 5rem;
    padding: 0 3rem;
    text-align: center;

    p {
      font-family: 'Cormorant Garamond', serif;
      font-style: italic;
      font-size: 2rem;
      line-height: 1.5;
      color: var(--ink-soft);
    }
  }

  .location-block {
    max-width: 1100px;
    margin: 0 auto 6rem;
    padding: 0 3rem;
  }

  .location-header {
    text-align: center;
    margin-bottom: 3rem;

    .eyebrow {
      font-family: 'Poppins', sans-serif;
      font-size: 1.2rem;
      letter-spacing: 0.32em;
      text-transform: uppercase;
      color: var(--muted);
      margin-bottom: 0.75rem;
    }
    h2 {
      font-family: 'Italiana', serif;
      font-size: clamp(3rem, 2rem + 2.5vw, 4.6rem);
      margin-bottom: 1rem;
      color: var(--ink);
    }
    .venue {
      font-family: 'Cormorant Garamond', serif;
      font-style: italic;
      font-size: 1.8rem;
      color: var(--ink-soft);
      margin-bottom: 0.5rem;
    }
    .address {
      font-family: 'Poppins', sans-serif;
      font-size: 1.3rem;
      color: var(--muted);
      a {
        color: var(--muted);
        text-decoration: underline;
        text-decoration-color: var(--sage);
      }
    }
    .hours {
      margin-top: 1.5rem;
      font-family: 'Poppins', sans-serif;
      font-size: 1.2rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--ink);
    }
  }

  .iframe-wrap {
    border: 1px solid rgba(31, 31, 31, 0.1);
    background: var(--cream-soft);
  }

  iframe {
    display: block;
    width: 100%;
    border: 0;
  }

  .external-card {
    background: var(--sage);
    color: var(--cream);
    padding: 5rem 3rem;
    text-align: center;

    p {
      font-family: 'Cormorant Garamond', serif;
      font-style: italic;
      font-size: 1.8rem;
      max-width: 50ch;
      margin: 0 auto 2.5rem;
      color: var(--cream);
      opacity: 0.95;
    }

    .ext-cta {
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      font-family: 'Poppins', sans-serif;
      font-size: 1.3rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--cream);
      text-decoration: none;
      border-bottom: 1px solid var(--cream);
      padding-bottom: 0.4rem;
      transition: opacity 0.25s ease;
      &:hover { opacity: 0.7; }
      &::after { content: '→'; font-size: 1.4rem; letter-spacing: 0; }
    }
  }

  .divider {
    width: 60px;
    height: 1px;
    background: var(--ink);
    opacity: 0.25;
    margin: 0 auto;
  }
`

const BookingPage = () => {
  const east = LOCATIONS.eastPerth
  const west = LOCATIONS.westPerth
  return (
    <main>
      <SEO title="Booking" />
      <PageHero title="Book your appointment" eyebrow="Schedule" />
      <BookingStyles>
        <div className="intro">
          <p>
            Monica practises across <em>two locations</em>. Pick the one that
            suits you and book online below.
          </p>
        </div>

        <section className="location-block" id="east-perth">
          <div className="location-header">
            <div className="eyebrow">Location One</div>
            <h2>{east.name}</h2>
            <div className="venue">{east.venue}</div>
            <div className="address">
              <a
                href={east.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {east.address}
              </a>
            </div>
            <div className="hours">Mon · Tue · Fri (PM)</div>
          </div>

          <div className="iframe-wrap">
            <iframe
              title="East Perth booking"
              id="acuity-booking-east"
              src={east.bookingUrl}
              scrolling="auto"
              height="1000"
              style={{ pointerEvents: 'auto' }}
            />
          </div>
        </section>

        <div className="divider" />

        <section className="location-block" id="west-perth">
          <div className="location-header">
            <div className="eyebrow">Location Two</div>
            <h2>{west.name}</h2>
            <div className="venue">{west.venue}</div>
            <div className="hours">Wed · Thu · Fri (AM)</div>
          </div>

          {west.bookingType === 'iframe' ? (
            <div className="iframe-wrap">
              <iframe
                title="West Perth booking"
                id="acuity-booking-west"
                src={west.bookingUrl}
                scrolling="auto"
                height="1000"
                style={{ pointerEvents: 'auto' }}
              />
            </div>
          ) : (
            <div className="external-card">
              <p>
                Bookings for West Perth are managed by {west.venue} on their
                own site.
              </p>
              <a
                className="ext-cta"
                href={west.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book at {west.venue}
              </a>
            </div>
          )}
        </section>
      </BookingStyles>
    </main>
  )
}

export default BookingPage
