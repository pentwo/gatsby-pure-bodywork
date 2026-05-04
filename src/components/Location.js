import React from 'react'
import styled from 'styled-components'
import { LOCATIONS } from '../data/utility'

const LocationStyles = styled.section`
  background: var(--sage);
  color: var(--cream);
  padding: 7rem 0;

  h3 {
    font-family: 'Italiana', serif;
    color: var(--cream);
    margin-bottom: 1rem;
    text-align: center;
  }

  .section-eyebrow {
    font-family: 'Poppins', sans-serif;
    font-size: 1.2rem;
    letter-spacing: 0.32em;
    text-transform: uppercase;
    color: var(--cream);
    opacity: 0.85;
    text-align: center;
    margin-bottom: 1rem;
    display: block;
  }

  .section-lead {
    font-family: 'Cormorant Garamond', serif;
    font-style: italic;
    font-size: 1.8rem;
    text-align: center;
    color: var(--cream);
    opacity: 0.95;
    max-width: 50ch;
    margin: 0 auto 5rem;
  }

  .locations {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 3rem;

    @media (max-width: 760px) {
      grid-template-columns: 1fr;
      gap: 4rem;
    }
  }

  .location-card {
    text-align: center;
  }

  .location-name {
    font-family: 'Italiana', serif;
    font-size: 3rem;
    color: var(--cream);
    margin-bottom: 0.5rem;
  }

  .venue {
    font-family: 'Cormorant Garamond', serif;
    font-style: italic;
    font-size: 1.6rem;
    color: var(--cream);
    opacity: 0.9;
    margin-bottom: 1rem;
  }

  address {
    font-style: normal;
    margin-bottom: 1.5rem;
    a {
      color: var(--cream);
      text-decoration: none;
      border-bottom: 1px solid rgba(242, 238, 229, 0.5);
      padding-bottom: 2px;
      font-size: 1.4rem;
      transition: opacity 0.2s;
      &:hover { opacity: 0.75; }
    }
  }

  .schedule {
    font-family: 'Poppins', sans-serif;
    font-size: 1.1rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    opacity: 0.8;
    margin-bottom: 1.5rem;
  }

  .map iframe {
    width: 100%;
    height: 240px;
    border: 0;
    filter: grayscale(0.2) contrast(1.05);
  }
`

const cards = [
  {
    ...LOCATIONS.eastPerth,
    schedule: 'Mon · Tue · Fri (PM)',
  },
  {
    ...LOCATIONS.westPerth,
    schedule: 'Wed · Thu · Fri (AM)',
  },
]

export default function Location() {
  return (
    <LocationStyles>
      <div>
        <span className="section-eyebrow">Where to find Monica</span>
        <h3>Two locations across Perth</h3>
        <p className="section-lead">
          Choose the studio that suits you — pick a time that works, and we'll
          look after the rest.
        </p>

        <div className="locations">
          {cards.map(loc => (
            <div className="location-card" key={loc.key}>
              <div className="location-name">{loc.name}</div>
              <div className="venue">{loc.venue}</div>
              <address>
                <a href={loc.mapsUrl} target="_blank" rel="noopener noreferrer">
                  {loc.address}
                </a>
              </address>
              <div className="schedule">{loc.schedule}</div>
              <div className="map">
                <iframe
                  src={loc.mapsEmbed}
                  title={`${loc.name} map`}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </LocationStyles>
  )
}
